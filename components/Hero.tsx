'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Search, MapPin, Building2, TrendingUp } from 'lucide-react';
import { areaProfiles } from '@/lib/data';

const locations = [
  'Lajpat Nagar 1', 'Lajpat Nagar 2', 'Lajpat Nagar 3', 'Lajpat Nagar 4',
  'Defence Colony', 'Feroze Gandhi Road', 'Ring Road', 'National Park',
  'Vikram Vihar', 'Amar Colony', 'Dayanand Colony', 'Double Storey',
  'Old Double Storey', 'Nirmal Puri', 'Vinoba Puri', 'Kasturba Niketan',
  'Jal Vihar', 'Gulabi Bagh Railway Colony', 'Central Market',
  "3C's Mall / Competent Cine Court", 'Defence Colony C Block Market',
  'Krishna Market', 'Amar Colony Market', 'Gupta Market',
];

const quickFilters = [
  { label: 'Lajpat Nagar', icon: MapPin },
  { label: 'Defence Colony', icon: MapPin },
  { label: '2 BHK', icon: Building2 },
  { label: 'Commercial', icon: TrendingUp },
];

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden min-h-[500px] h-[calc(100svh-5rem)]">
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover object-center">
        <source src="/bgvideo.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80" />
      <div className="absolute inset-0 bg-primary-navy/30" />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col items-center justify-center px-4 py-8 text-center sm:px-6 sm:py-10 lg:px-8 lg:py-8">
        <PincodeBlocks />
        <Headline />
        <Subtitle />
        <SearchSection />
        <Chips />
        <Stats />
      </div>
    </section>
  );
}

function PincodeBlocks() {
  const target = '110024';
  const [digits, setDigits] = useState(target.split('').map(() => '0'));
  const [revealed, setRevealed] = useState(target.split('').map(() => false));

  useEffect(() => {
    const intervals = target.split('').map((digit, i) => {
      const delay = 800 + Math.random() * 1200;
      const startTime = Date.now();

      const interval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        if (elapsed >= delay) {
          setDigits((prev) => {
            const next = [...prev];
            next[i] = digit;
            return next;
          });
          setRevealed((prev) => {
            const next = [...prev];
            next[i] = true;
            return next;
          });
          clearInterval(interval);
        } else {
          setDigits((prev) => {
            const next = [...prev];
            next[i] = String(Math.floor(Math.random() * 10));
            return next;
          });
        }
      }, 50);

      return interval;
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <div className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4 lg:mb-5">
      {digits.map((d, i) => (
        <div
          key={i}
          className={`w-14 h-16 sm:w-16 sm:h-[4.5rem] md:w-20 md:h-20 flex items-center justify-center rounded-lg backdrop-blur-md border transition-all duration-300 ${
            revealed[i]
              ? 'bg-white/10 border-gold-accent/40 shadow-lg shadow-gold-accent/10'
              : 'bg-white/5 border-white/15'
          }`}
        >
          <span className={`text-3xl sm:text-4xl md:text-5xl font-bold tabular-nums transition-colors duration-300 ${
            revealed[i] ? 'text-gold-accent' : 'text-white/60'
          }`}>
            {d}
          </span>
        </div>
      ))}
    </div>
  );
}

function Headline() {
  return (
    <h1 className="text-3xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold text-white mb-3 sm:mb-4 lg:mb-5 leading-[1.1] tracking-tight">
      LAJPAT KI LAAJ,
      <br />
      <span className="text-gold-accent">DEFENCE KA TAAJ</span>
    </h1>
  );
}

function Subtitle() {
  return (
    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/70 max-w-[90%] sm:max-w-2xl mx-auto mb-5 sm:mb-7 lg:mb-8 leading-relaxed">
      Your Trusted South Delhi Real Estate Partner. Find your dream home or investment in Lajpat Nagar, Defence Colony, Amar Colony, and beyond.

    </p>
  );
}

function SearchSection() {
  const router = useRouter();
  const [locationText, setLocationText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [suggestions, setSuggestions] = useState<typeof areaProfiles>([]);
  const lastIndex = useRef(-1);

  useEffect(() => {
    if (userInput.trim()) {
      const filtered = areaProfiles.filter((a) =>
        a.name.toLowerCase().includes(userInput.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  }, [userInput]);

  const handleSelect = (slug: string) => {
    setUserInput('');
    setSuggestions([]);
    router.push(`/area/${slug}`);
  };

  const handleSearch = () => {
    if (!userInput.trim()) return;
    const match = areaProfiles.find((a) =>
      a.name.toLowerCase().includes(userInput.toLowerCase())
    );
    if (match) {
      handleSelect(match.slug);
    } else {
      router.push('/');
    }
  };

  const getRandomLocation = () => {
    let index;
    do {
      index = Math.floor(Math.random() * locations.length);
    } while (index === lastIndex.current);
    lastIndex.current = index;
    return locations[index];
  };

  const animatePlaceholder = useCallback(() => {
    const location = getRandomLocation();
    let i = 0;
    let deleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    const type = () => {
      if (isFocused) return;
      if (!deleting) {
        setLocationText(location.slice(0, i + 1));
        i++;
        if (i <= location.length) {
          timeout = setTimeout(type, 40 + Math.random() * 30);
        } else {
          timeout = setTimeout(() => { deleting = true; type(); }, 2000);
        }
      } else {
        setLocationText(location.slice(0, i));
        i--;
        if (i >= 0) {
          timeout = setTimeout(type, 20);
        } else {
          timeout = setTimeout(animatePlaceholder, 300);
        }
      }
    };

    type();
    return () => clearTimeout(timeout);
  }, [isFocused]);

  useEffect(() => {
    const cleanup = animatePlaceholder();
    return cleanup;
  }, [animatePlaceholder]);

  useEffect(() => {
    const interval = setInterval(() => setCursorVisible((v) => !v), 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-[92%] xs:max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-3xl mb-3 lg:mb-4">
      <div className="relative">
        <div className="bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.3)] p-1.5 sm:p-2 flex flex-col sm:flex-row items-stretch gap-1.5 sm:gap-2">
          <div className="relative flex-grow flex items-center gap-2 sm:gap-3 bg-light-navy/60 px-3 sm:px-5 py-3 sm:py-4 rounded-xl min-w-0">
            <Search className="w-4 h-4 sm:w-5 sm:h-5 text-secondary-text shrink-0 relative z-10" />
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setTimeout(() => setIsFocused(false), 200)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              className="absolute inset-0 w-full h-full bg-transparent border-none outline-none text-primary-navy px-3 sm:px-5 pl-[40px] sm:pl-[52px] py-3 sm:py-4 text-sm sm:text-base z-20 caret-primary-navy"
            />
            {!userInput && !isFocused && (
              <span className="absolute left-[40px] sm:left-[52px] right-3 top-1/2 -translate-y-1/2 text-sm sm:text-base pointer-events-none z-10 whitespace-nowrap overflow-hidden text-ellipsis text-left">
                <span className="text-secondary-text/60">Search For </span>
                <span className="text-primary-navy">{locationText}</span>
                <span
                  className={`inline-block w-[2px] h-4 sm:h-5 bg-primary-navy/70 ml-[1px] align-middle ${
                    cursorVisible ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </span>
            )}
          </div>
          <button
            onClick={handleSearch}
            className="bg-primary-navy hover:bg-gold-accent text-white px-5 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 whitespace-nowrap shadow-md hover:shadow-lg w-full sm:w-auto"
          >
            Search
          </button>
        </div>
        {isFocused && suggestions.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-border-color shadow-[0_20px_60px_rgba(0,0,0,0.12)] rounded-xl p-2 max-h-[300px] overflow-y-auto z-50">
            {suggestions.map((area) => (
              <button
                key={area.slug}
                onMouseDown={() => handleSelect(area.slug)}
                className="w-full flex items-center gap-3 text-left px-3 py-2.5 rounded-lg hover:bg-light-navy/60 transition-colors group"
              >
                <MapPin className="w-4 h-4 text-gold-accent shrink-0" />
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-primary-navy group-hover:text-gold-accent transition-colors truncate">{area.name}</div>
                  <div className="text-xs text-secondary-text truncate">{area.tagline}</div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function Chips() {
  const router = useRouter();

  const handleClick = (label: string) => {
    if (label === 'Lajpat Nagar') {
      router.push('/area/lajpat-nagar-1');
    } else if (label === 'Defence Colony') {
      router.push('/area/defence-colony');
    } else if (label === '2 BHK' || label === 'Commercial') {
      document.getElementById('featured-properties')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-5 sm:mb-6 lg:mb-7 max-w-full px-1">
      {quickFilters.map((filter) => (
        <button
          key={filter.label}
          onClick={() => handleClick(filter.label)}
          className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 backdrop-blur-md text-white/70 hover:text-white text-[11px] sm:text-sm font-medium transition-all duration-200"
        >
          <filter.icon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          {filter.label}
        </button>
      ))}
      <span className="text-white/20 hidden sm:inline">|</span>
      <button
        onClick={() => document.getElementById('featured-properties')?.scrollIntoView({ behavior: 'smooth' })}
        className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 backdrop-blur-md text-white/70 hover:text-white text-[11px] sm:text-sm font-medium transition-all duration-200"
      >
        List Your Property
      </button>
    </div>
  );
}

function Stats() {
  const stats = [
    { value: '1,000+', label: 'Families Served' },
    { value: '50+', label: 'Years of Trust' },
    { value: '25+', label: 'Localities Covered' },
    { value: '3rd', label: 'Generation Expertise' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-5 sm:gap-6 md:gap-10 pt-5 sm:pt-6 mt-1 border-t border-white/20 w-full max-w-[92%] xs:max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-3xl">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <div className="text-2xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-gold-accent drop-shadow-lg">
            {stat.value}
          </div>
          <div className="text-[9px] sm:text-xs md:text-sm text-white/50 mt-1 uppercase tracking-wider font-medium">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}

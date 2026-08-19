'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { Search } from 'lucide-react';

const locations = [
  'Lajpat Nagar 1',
  'Lajpat Nagar 2',
  'Lajpat Nagar 3',
  'Lajpat Nagar 4',
  'Defence Colony',
  'Feroze Gandhi Road',
  'Ring Road',
  'National Park',
  'Vikram Vihar',
  'Amar Colony',
  'Dayanand Colony',
  'Double Storey',
  'Old Double Storey',
  'Nirmal Puri',
  'Vinoba Puri',
  'Kasturba Niketan',
  'Jal Vihar',
  'Gulabi Bagh Railway Colony',
  'Central Market',
  "3C's Mall / Competent Cine Court",
  'Defence Colony C Block Market',
  'Krishna Market',
  'Amar Colony Market',
  'Gupta Market',
];

export function SearchBar() {
  const [locationText, setLocationText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const [userInput, setUserInput] = useState('');
  const lastIndex = useRef(-1);

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
          timeout = setTimeout(() => {
            deleting = true;
            type();
          }, 2000);
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
    <div className="w-full">
      <div className="bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.3)] p-1.5 sm:p-2 flex flex-col md:flex-row items-stretch gap-1.5 sm:gap-2">
        <div className="relative flex-grow flex items-center gap-2 sm:gap-3 bg-light-navy/60 px-3 sm:px-5 py-3 sm:py-4 rounded-xl">
          <Search className="w-4 h-4 sm:w-5 sm:h-5 text-secondary-text shrink-0 relative z-10" />
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="absolute inset-0 w-full h-full bg-transparent border-none outline-none text-primary-navy px-3 sm:px-5 pl-[40px] sm:pl-[52px] py-3 sm:py-4 text-sm sm:text-base z-20 caret-transparent"
          />
          {!userInput && (
            <span className="absolute left-[40px] sm:left-[52px] top-1/2 -translate-y-1/2 text-sm sm:text-base pointer-events-none z-10 whitespace-nowrap">
              <span className="text-secondary-text/60">Search For </span>
              <span className="text-primary-navy">{locationText}</span>
              <span className={`inline-block w-[2px] h-4 sm:h-5 bg-primary-navy/70 ml-[1px] align-middle ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}></span>
            </span>
          )}
        </div>
        <button className="bg-primary-navy hover:bg-gold-accent text-white px-5 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 whitespace-nowrap shadow-md hover:shadow-lg">
          Search
        </button>
      </div>
    </div>
  );
}

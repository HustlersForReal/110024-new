import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { areaProfiles } from '@/lib/data';

export function Explore110024() {
  const residentialAreas = areaProfiles.filter((a) => a.category === 'residential');
  const roadAreas = areaProfiles.filter((a) => a.category === 'roads');
  const marketAreas = areaProfiles.filter((a) => a.category === 'markets');

  return (
    <section id="explore" className="py-14 sm:py-20 md:py-24 lg:py-32 bg-light-navy/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10 sm:mb-14">
          <span className="text-gold-accent font-semibold tracking-widest uppercase text-[11px] sm:text-xs mb-3 sm:mb-4 block">Neighbourhoods</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-navy mb-3 sm:mb-4 tracking-tight">
            Explore 110024
          </h2>
          <p className="text-secondary-text text-base sm:text-lg">
            Discover the neighbourhoods, markets and residential pockets that make 110024 unique.
          </p>
        </div>

        <div className="space-y-8 sm:space-y-10">
          <div>
            <h3 className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-secondary-text mb-4 sm:mb-5 pb-2 border-b border-border-color">
              Residential Colonies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {residentialAreas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/area/${area.slug}`}
                  className="group flex items-center gap-3 sm:gap-4 px-5 sm:px-6 py-4 sm:py-5 bg-white border border-border-color hover:border-gold-accent/40 hover:shadow-md transition-all duration-200"
                >
                  <MapPin className="w-5 h-5 text-gold-accent shrink-0" />
                  <div className="min-w-0">
                    <span className="text-sm sm:text-base font-semibold text-primary-navy leading-tight block group-hover:text-gold-accent transition-colors">
                      {area.name}
                    </span>
                    <span className="text-[11px] text-secondary-text leading-tight block mt-1 truncate">
                      {area.tagline}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-secondary-text mb-4 sm:mb-5 pb-2 border-b border-border-color">
              Roads & Connectors
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {roadAreas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/area/${area.slug}`}
                  className="group flex items-center gap-3 sm:gap-4 px-5 sm:px-6 py-4 sm:py-5 bg-white border border-border-color hover:border-gold-accent/40 hover:shadow-md transition-all duration-200"
                >
                  <MapPin className="w-5 h-5 text-gold-accent shrink-0" />
                  <div className="min-w-0">
                    <span className="text-sm sm:text-base font-semibold text-primary-navy leading-tight block group-hover:text-gold-accent transition-colors">
                      {area.name}
                    </span>
                    <span className="text-[11px] text-secondary-text leading-tight block mt-1 truncate">
                      {area.tagline}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-secondary-text mb-4 sm:mb-5 pb-2 border-b border-border-color">
              Markets & Commercial
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {marketAreas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/area/${area.slug}`}
                  className="group flex items-center gap-3 sm:gap-4 px-5 sm:px-6 py-4 sm:py-5 bg-white border border-border-color hover:border-gold-accent/40 hover:shadow-md transition-all duration-200"
                >
                  <MapPin className="w-5 h-5 text-gold-accent shrink-0" />
                  <div className="min-w-0">
                    <span className="text-sm sm:text-base font-semibold text-primary-navy leading-tight block group-hover:text-gold-accent transition-colors">
                      {area.name}
                    </span>
                    <span className="text-[11px] text-secondary-text leading-tight block mt-1 truncate">
                      {area.tagline}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

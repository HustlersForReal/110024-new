import { Map, ArrowRight } from 'lucide-react';

interface Locality {
  slug: string;
  name: string;
  character: string;
  lifestyle: string;
  marketPositioning: string;
  description: string;
  propertyCount: number;
}

export function LocalityCard({ locality }: { locality: Locality }) {
  return (
    <div className="group relative bg-white border border-border-color rounded-2xl p-6 hover:shadow-xl hover:shadow-primary-navy/5 transition-all duration-300 flex flex-col h-full overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-accent to-gold-accent/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      
      <div className="flex justify-between items-start mb-4">
        <div className="w-12 h-12 bg-light-navy rounded-full flex items-center justify-center mb-2 group-hover:bg-primary-navy transition-colors">
          <Map className="w-6 h-6 text-primary-navy group-hover:text-white transition-colors" />
        </div>
        <span className="bg-light-navy text-primary-navy text-xs font-semibold px-3 py-1 rounded-full">
          {locality.propertyCount} Properties
        </span>
      </div>
      
      <h3 className="text-xl sm:text-2xl font-bold text-primary-navy mb-2">
        {locality.name}
      </h3>
      
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="text-[11px] uppercase tracking-wider font-semibold text-gold-accent">
          {locality.marketPositioning}
        </span>
        <span className="text-[11px] text-border-color">•</span>
        <span className="text-[11px] uppercase tracking-wider font-semibold text-secondary-text">
          {locality.character}
        </span>
      </div>
      
      <p className="text-sm text-secondary-text leading-relaxed mb-6 flex-grow">
        {locality.description}
      </p>
      
      <button className="flex items-center text-primary-navy font-semibold text-sm group/btn mt-auto">
        Explore Area
        <ArrowRight className="w-4 h-4 ml-1.5 group-hover/btn:translate-x-1 transition-transform" />
      </button>
    </div>
  );
}

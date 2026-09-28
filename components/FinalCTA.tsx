'use client';

import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { site } from '@/lib/site';

export function FinalCTA() {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-primary-navy text-center relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl opacity-[0.03] pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight tracking-tight">
          Looking for Property in 110024?
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-light-navy/60 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
          Whether you&apos;re buying, selling or renting, discover the right property with hyperlocal expertise.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <Link
            href="/#live-demand"
            className="inline-flex items-center justify-center gap-2 bg-gold-accent text-primary-navy hover:bg-white px-8 sm:px-10 py-3.5 sm:py-4 text-sm font-semibold uppercase tracking-wider transition-all duration-300"
          >
            Explore Properties
          </Link>
          <a
            href={site.whatsapp('Hello 110024.com, I would like to talk to an expert about property in 110024.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/20 text-white hover:border-white/40 hover:bg-white/5 px-8 sm:px-10 py-3.5 sm:py-4 text-sm font-semibold uppercase tracking-wider transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4" />
            Talk to an Expert
          </a>
        </div>
      </div>
    </section>
  );
}

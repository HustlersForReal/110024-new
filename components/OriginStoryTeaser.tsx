import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function OriginStoryTeaser() {
  return (
    <section className="py-14 sm:py-20 md:py-24 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-gold-accent font-semibold tracking-widest uppercase text-[11px] sm:text-xs mb-3 sm:mb-4 block">
          Our Heritage
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-navy mb-5 sm:mb-8 tracking-tight leading-[1.1]">
          Origin &amp; Story
        </h2>
        <p className="text-secondary-text text-sm sm:text-[15px] leading-[1.9] text-justify mb-8 sm:mb-10">
          The pincode 110024 which has now emerged as one of South Delhi&apos;s most upscale prime locations is built on two landmark colonies, Lajpat Nagar and Defence Colony. Its origin goes back to the late 1940s, in the years right after the Partition of India, when thousands of displaced families arrived in Delhi with almost nothing and needed a place to rebuild their lives. The government carved out this stretch of South Delhi for their resettlement, allotting modest single storey homes in Lajpat Nagar to the refugees and nearby plots to the army personnel who would go on to form Defence Colony. What began as an emergency rehabilitation effort in the late 1940s slowly turned into one of the finest addresses of South Delhi.
        </p>
        <Link
          href="/origin-and-story"
          className="inline-flex items-center justify-center gap-2 bg-primary-navy hover:bg-gold-accent text-white hover:text-primary-navy px-8 sm:px-10 py-3.5 sm:py-4 text-sm font-semibold uppercase tracking-wider transition-all duration-300"
        >
          View Full Origin
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}

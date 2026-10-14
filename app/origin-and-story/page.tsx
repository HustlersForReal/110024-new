import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { OriginOfPincode } from '@/components/OriginOfPincode';
import { StoryOf110024 } from '@/components/StoryOf110024';

export const metadata: Metadata = pageMetadata({
  title: 'Origin & Story',
  description:
    'Where pincode 110024 came from, and the story behind 110024.com. Lajpat Nagar and Defence Colony, from the Partition refugee years to today.',
  path: '/origin-and-story',
});

export default function OriginAndStoryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.07]">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full fill-gold-accent">
            <polygon points="0,100 100,0 100,100" />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 md:py-24">
          <span className="text-gold-accent font-semibold tracking-widest uppercase text-[11px] sm:text-xs mb-3 sm:mb-4 block">
            Our Heritage
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight leading-[1.1]">
            Origin &amp; Story
          </h1>
          <p className="text-light-navy/60 text-base sm:text-lg max-w-2xl leading-relaxed">
            How a pincode made out of refugee barracks became one of South Delhi&apos;s most
            sought-after addresses, and the three generations behind 110024.com.
          </p>
        </div>
      </section>

      <OriginOfPincode />
      <StoryOf110024 />
    </>
  );
}

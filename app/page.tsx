import { Hero } from '@/components/Hero';
import { FeaturedProperties } from '@/components/FeaturedProperties';
import { WhatIs110024 } from '@/components/WhatIs110024';
import { Explore110024 } from '@/components/Explore110024';
import { OriginStoryTeaser } from '@/components/OriginStoryTeaser';
import { OurServices } from '@/components/OurServices';
import { SaveMyMoney } from '@/components/SaveMyMoney';
// TODO: re-enable. Section is temporarily hidden on the homepage.
// import { StrategicPartnerships } from '@/components/StrategicPartnerships';
import { WhyInvest } from '@/components/WhyInvest';
import { CalculatorsSection } from '@/components/CalculatorsSection';
import { TrustStats } from '@/components/TrustStats';
import { Insights } from '@/components/Insights';
import { FinalCTA } from '@/components/FinalCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProperties />
      <WhatIs110024 />
      <SaveMyMoney />
      <OurServices />
      <Explore110024 />
      <OriginStoryTeaser />
      {/* <StrategicPartnerships /> */}
      <WhyInvest />
      <CalculatorsSection />
      <TrustStats />
      <Insights />
      <FinalCTA />
    </>
  );
}

import { Hero } from '@/components/Hero';
import { FeaturedProperties } from '@/components/FeaturedProperties';
import { Explore110024 } from '@/components/Explore110024';
import { OurServices } from '@/components/OurServices';
import { SaveMyMoney } from '@/components/SaveMyMoney';
import { StrategicPartnerships } from '@/components/StrategicPartnerships';
import { StoryOf110024 } from '@/components/StoryOf110024';
import { OriginOfPincode } from '@/components/OriginOfPincode';
import { WhyInvest } from '@/components/WhyInvest';
import { TrustStats } from '@/components/TrustStats';
import { Insights } from '@/components/Insights';
import { FinalCTA } from '@/components/FinalCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProperties />
      <Explore110024 />
      <OurServices />
      <SaveMyMoney />
      <StrategicPartnerships />
      <StoryOf110024 />
      <OriginOfPincode />
      <WhyInvest />
      <TrustStats />
      <Insights />
      <FinalCTA />
    </>
  );
}

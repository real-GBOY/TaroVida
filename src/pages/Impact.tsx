import { Globe } from 'lucide-react';
import PageHero from '../components/layout/PageHero';
import ImpactSection from '../components/sections/ImpactSection';
import EnvironmentalBenefits from '../components/sections/EnvironmentalBenefits';
import ImpactTimeline from '../components/sections/ImpactTimeline';

export default function Impact() {
  return (
    <>
      <PageHero
        icon={Globe}
        title="Our Impact"
        subtitle="Measuring how zero-waste taro processing improves farmer livelihoods, rural communities, and the environment in Menoufia."
      />
      <ImpactSection hideIntro />
      <EnvironmentalBenefits />
      <ImpactTimeline />
    </>
  );
}

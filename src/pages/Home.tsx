import { useLenis } from '../hooks/useLenis';
import HeroSection from '../components/sections/HeroSection';
import ProblemSection from '../components/sections/ProblemSection';
import SolutionSection from '../components/sections/SolutionSection';
import ProductsSection from '../components/sections/ProductsSection';
import ImpactSection from '../components/sections/ImpactSection';
import AboutSection from '../components/sections/AboutSection';
import PartnersSection from '../components/sections/PartnersSection';
import CallToAction from '../components/sections/CallToAction';

export default function Home() {
  useLenis(true);

  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ProductsSection compact />
      <ImpactSection />
      <AboutSection />
      <PartnersSection />
      <CallToAction />
    </>
  );
}

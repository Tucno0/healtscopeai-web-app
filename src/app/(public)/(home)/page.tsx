import { Footer } from '@/components/public/footer';
import { FeaturesSection } from '@/modules/public/home/ui/components/features-section';
import { HeroSection } from '@/modules/public/home/ui/components/hero-section';
import { LogoCloud } from '@/modules/public/home/ui/components/logo-cloud';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <LogoCloud />
      <FeaturesSection />
      <Footer />
    </>
  );
};

export default HomePage;

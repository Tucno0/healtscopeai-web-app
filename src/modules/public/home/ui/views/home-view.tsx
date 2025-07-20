import { Footer } from '@/components/public/footer';
import { FeaturesSection } from '@/modules/public/home/ui/components/features-section';
import { HeroSection } from '@/modules/public/home/ui/components/hero-section';
import { LogoCloud } from '@/modules/public/home/ui/components/logo-cloud';

export const HomeView = () => {
  return (
    <>
      <HeroSection />
      <LogoCloud />
      <FeaturesSection />
      <Footer />
    </>
  );
};

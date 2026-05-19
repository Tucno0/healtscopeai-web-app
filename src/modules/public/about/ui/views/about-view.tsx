import { AboutHero } from "../components/about-hero";
import { TeamSection } from "../components/team-section";
import { ValuesSection } from "../components/values-section";

export function AboutView() {
  return (
    <div>
      <AboutHero />
      <TeamSection />
      <ValuesSection />
    </div>
  );
} 
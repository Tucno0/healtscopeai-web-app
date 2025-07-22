import { ServicesHero } from "../components/services-hero";
import { ServicesList } from "../components/services-list";
import { ServicesGrid } from "../components/services-grid";

export function ServicesView() {
  return (
    <main>
      <ServicesHero />
      <ServicesList />
      <ServicesGrid />
    </main>
  );
} 
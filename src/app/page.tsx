import dynamic from 'next/dynamic';

import HeroSection from "@/components/HeroSection";
import LogoTicker from "@/components/LogoTicker";
import AboutSection from "@/components/AboutSection";

const BenefitsSection = dynamic(() => import("@/components/BenefitsSection"));
const StackedBannersSection = dynamic(() => import("@/components/StackedBannersSection"));
const BentoGridSection = dynamic(() => import("@/components/BentoGridSection"));
const ServicesSection = dynamic(() => import("@/components/ServicesSection"));
const HomeBlogSection = dynamic(() => import("@/components/HomeBlogSection"));
const TailoredSolutions = dynamic(() => import("@/components/TailoredSolutions"));
const NewEraSection = dynamic(() => import("@/components/NewEraSection"));
const CorporateIdentity = dynamic(() => import("@/components/CorporateIdentity"));
const CTASection = dynamic(() => import("@/components/CTASection"));

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-background)]">
      <HeroSection />
      <LogoTicker />
      <AboutSection />
      <BenefitsSection />
      <BentoGridSection />
      <StackedBannersSection />
      <ServicesSection />
      <HomeBlogSection />
      <TailoredSolutions />
      <NewEraSection />
      <CorporateIdentity />
      <CTASection />
    </main>
  );
}

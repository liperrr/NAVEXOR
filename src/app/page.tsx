import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import LogoTicker from "@/components/LogoTicker";
import AboutSection from "@/components/AboutSection";
import StackedBannersSection from "@/components/StackedBannersSection";
import ServicesSection from "@/components/ServicesSection";
import HomeBlogSection from "@/components/HomeBlogSection";
import TailoredSolutions from "@/components/TailoredSolutions";
import NewEraSection from "@/components/NewEraSection";
import CorporateIdentity from "@/components/CorporateIdentity";
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-background)]">
      <HeroSection />
      <BenefitsSection />
      <LogoTicker />
      <AboutSection />
      <StackedBannersSection />
      <ServicesSection />
      <HomeBlogSection />
      <TailoredSolutions />
      <NewEraSection />
      <CorporateIdentity />
      <ContactFooter />
    </main>
  );
}

import GalleryMasonrySection from "@/components/GalleryMasonrySection";
import FreightDetailsSection from "@/components/FreightDetailsSection";
import CertificationsSection from "@/components/CertificationsSection";
import PremiumCTASection from "@/components/PremiumCTASection";

export default function ServicosPage() {
  return (
    <main className="min-h-screen bg-white pt-32">
      
      {/* O componente principal de Serviços da referência (Frete Internacional) */}
      <GalleryMasonrySection />

      {/* Seção Completa de Detalhes (Aéreo, Marítimo, Inovação) */}
      <FreightDetailsSection />

      <CertificationsSection />

      <PremiumCTASection />

    </main>
  );
}

"use client";

import { motion } from "framer-motion";
import { BookOpen, Video, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";
import PremiumCTASection from "@/components/PremiumCTASection";

const academiaFeatures = [
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "E-books Exclusivos",
    description: "Guias completos e materiais ricos sobre importação, exportação e gestão logística."
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: "Webinars & Masterclasses",
    description: "Aulas em vídeo com nossos especialistas discutindo as principais tendências do mercado global."
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: "Artigos Técnicos",
    description: "Análises profundas sobre regulamentações aduaneiras e estratégias de supply chain."
  }
];

export default function AcademiaPage() {
  return (
    <main className="min-h-screen bg-[#f8f9fa] pt-32 pb-24">
      {/* Hero Section */}
      <div className="container mx-auto max-w-[1200px] px-6 mb-24">
        <div className="bg-[#001f3f] rounded-[40px] p-10 md:p-20 relative overflow-hidden text-center">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <span className="text-[12px] font-bold uppercase tracking-widest text-[#c5a059] mb-4 block">
              LANÇAMENTO EM BREVE
            </span>
            <h1 className="text-4xl md:text-6xl font-medium text-white leading-tight tracking-tight mb-6">
              Academia Navexor
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-light mb-10 leading-relaxed">
              Estamos preparando a plataforma definitiva de capacitação em Comércio Exterior. O conhecimento que move os grandes mercados globais, em breve disponível para você.
            </p>
            <button className="bg-[#c5a059] text-white px-8 py-4 rounded-full font-bold hover:bg-[#b08d4a] transition-colors shadow-lg shadow-[#c5a059]/20">
              Quero ser avisado no lançamento
            </button>
          </motion.div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto max-w-[1200px] px-6 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a192f] mb-4">O que você vai encontrar</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Conteúdos de alto nível desenvolvidos por quem está na linha de frente do comércio internacional todos os dias.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {academiaFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-10 rounded-[32px] shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-[#001f3f]/5 rounded-2xl flex items-center justify-center text-[#001f3f] mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1f1f1f] mb-3">{feature.title}</h3>
              <p className="text-[15px] text-[#5f5f5f] leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <PremiumCTASection />
    </main>
  );
}

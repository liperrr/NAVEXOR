"use client";

import { motion } from "framer-motion";
import { Download, ShieldCheck, Scale, FileText } from "lucide-react";
import PremiumCTASection from "@/components/PremiumCTASection";

export default function EticaCondutaPage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero */}
      <section className="pt-40 pb-24 px-6 bg-[#001f3f] text-white">
        <div className="container mx-auto max-w-[1000px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-bold uppercase tracking-widest text-[#c5a059] mb-6 block">
              COMPLIANCE E TRANSPARÊNCIA
            </span>
            <h1 className="text-4xl md:text-6xl font-light leading-tight mb-2">
              Ética e Conduta
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-8">
              A base das nossas relações.
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto font-medium">
              Na Navexor, acreditamos que a transparência e a integridade são os pilares fundamentais para o sucesso sustentável. Nosso Código de Ética norteia todas as nossas operações globais.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#001f3f]/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-8 h-8 text-[#001f3f]" />
              </div>
              <h3 className="text-xl font-bold text-[#0a192f] mb-4">Integridade</h3>
              <p className="text-gray-600 font-medium">Atuamos com honestidade em todas as interações comerciais, rejeitando qualquer forma de corrupção ou suborno.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#001f3f]/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <Scale className="w-8 h-8 text-[#001f3f]" />
              </div>
              <h3 className="text-xl font-bold text-[#0a192f] mb-4">Respeito às Leis</h3>
              <p className="text-gray-600 font-medium">Cumprimos rigorosamente todas as legislações aduaneiras, trabalhistas e ambientais vigentes nos países em que operamos.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#001f3f]/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-[#001f3f]" />
              </div>
              <h3 className="text-xl font-bold text-[#0a192f] mb-4">Confidencialidade</h3>
              <p className="text-gray-600 font-medium">Garantimos o sigilo absoluto e a proteção dos dados dos nossos clientes, parceiros e colaboradores.</p>
            </motion.div>

          </div>

          {/* Download Box */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-24 bg-[#f8f9fa] border border-gray-200 rounded-3xl p-12 text-center max-w-4xl mx-auto flex flex-col items-center"
          >
            <h2 className="text-3xl font-bold text-[#0a192f] mb-4">Código de Ética e Conduta</h2>
            <p className="text-gray-600 font-medium max-w-2xl mx-auto mb-8">
              Faça o download do nosso documento oficial para conhecer em detalhes as diretrizes de compliance que regem o Grupo Navexor.
            </p>
            <a 
              href="#" 
              className="inline-flex items-center gap-3 bg-[#c5a059] text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-full hover:bg-[#001f3f] transition-colors duration-300"
            >
              <Download className="w-5 h-5" />
              Baixar PDF (2026)
            </a>
          </motion.div>

        </div>
      </section>

      <PremiumCTASection />
    </main>
  );
}

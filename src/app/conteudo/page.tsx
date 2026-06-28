"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BookOpen, HelpCircle, GraduationCap } from "lucide-react";
import PremiumCTASection from "@/components/PremiumCTASection";

export default function ConteudoPage() {
  return (
    <main className="min-h-screen bg-[#f8f9fa] pt-32 pb-24">
      <div className="container mx-auto max-w-[1200px] px-6">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-[#c5a059] mb-4 block">
            CONTEÚDO
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#001f3f] leading-tight mb-6">
            Conhecimento que move mercados
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            Explore nossos artigos, tire suas dúvidas frequentes e mantenha-se atualizado com as últimas tendências e análises do comércio exterior.
          </p>
        </motion.div>

        {/* Hub Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/blog" className="block h-full bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-[#c5a059]/30 group">
              <div className="w-16 h-16 bg-[#001f3f]/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#001f3f] transition-colors duration-300">
                <BookOpen className="w-8 h-8 text-[#001f3f] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-[#0a192f] mb-4">Portal de Notícias e Blog</h3>
              <p className="text-gray-600 font-medium leading-relaxed">
                Acompanhe as últimas notícias do mercado, cotações ao vivo e análises aprofundadas da nossa equipe de especialistas.
              </p>
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Link href="/faq" className="block h-full bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-[#c5a059]/30 group">
              <div className="w-16 h-16 bg-[#c5a059]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#c5a059] transition-colors duration-300">
                <HelpCircle className="w-8 h-8 text-[#c5a059] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-[#0a192f] mb-4">Perguntas Frequentes</h3>
              <p className="text-gray-600 font-medium leading-relaxed">
                Tire suas dúvidas sobre importação, exportação, documentações e como funcionam nossos serviços logísticos.
              </p>
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/academia" className="block h-full bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-[#c5a059]/30 group">
              <div className="w-16 h-16 bg-[#001f3f]/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#001f3f] transition-colors duration-300">
                <GraduationCap className="w-8 h-8 text-[#001f3f] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-[#0a192f] mb-4">Academia Navexor</h3>
              <p className="text-gray-600 font-medium leading-relaxed">
                Materiais ricos, e-books, webinars e treinamentos exclusivos para capacitar a sua equipe em Comex.
              </p>
            </Link>
          </motion.div>

        </div>
      </div>

      <PremiumCTASection />
    </main>
  );
}

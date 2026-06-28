"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import PremiumCTASection from "@/components/PremiumCTASection";

export default function TrabalheConoscoPage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 bg-[#001f3f] text-white">
        <div className="container mx-auto max-w-[1200px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-bold uppercase tracking-widest text-[#c5a059] mb-6 block">
              TRABALHE CONOSCO
            </span>
            <h1 className="text-4xl md:text-6xl font-light leading-tight mb-2">
              Junte-se ao time que...
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight text-[#c5a059] mb-8">
              faz isso há mais de 80 anos!
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto font-medium">
              Não somos apenas uma equipe, somos uma comunidade unida por uma visão compartilhada e valores sólidos. 
              Temos orgulho de manter o compromisso com a excelência impulsionando a busca contínua para inovar e crescer.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Galeria de Fotos da Equipe */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="container mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image src="/images/people-working.jpg" alt="Equipe Navexor 1" fill className="object-cover" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl md:-translate-y-12"
            >
              <Image src="/images/business-people-meeting.jpg" alt="Equipe Navexor 2" fill className="object-cover" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image src="/images/portrait-engineers-work-hours-job-site.jpg" alt="Equipe Navexor 3" fill className="object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vagas Abertas / CTA RH */}
      <section className="py-24 px-6 bg-[#f8f9fa]">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-[#001f3f] mb-6">Confira nossas vagas abertas</h2>
          <p className="text-gray-600 mb-8 font-medium">
            Estamos sempre em busca de talentos apaixonados por logística, comércio exterior e inovação. 
            Se você tem esse perfil, cadastre seu currículo em nosso banco de talentos.
          </p>
          <a 
            href="#" 
            className="inline-block bg-[#001f3f] text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-full hover:bg-[#c5a059] transition-colors duration-300"
          >
            Ver Vagas na Gupy
          </a>
        </div>
      </section>

      <PremiumCTASection />
    </main>
  );
}

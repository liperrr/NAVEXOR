"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Globe, GitMerge, Settings } from "lucide-react";
import { pinhoFadeInUp, pinhoStaggerContainer, pinhoStaggerItem } from "@/utils/animations";

export default function BenefitsSection() {
  return (
    <div className="bg-white">
      <section className="relative py-12 md:py-16 bg-[#003366] text-white overflow-hidden rounded-t-[40px] md:rounded-t-[80px]">
        <div className="container relative z-10 mx-auto px-6 max-w-[1100px]">
        
        {/* Top Header */}
        <motion.div 
          variants={pinhoFadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col items-center text-center mb-12"
        >
          <span className="text-[13px] font-bold tracking-[0.15em] uppercase text-white mb-6">
            O QUE FAZEMOS & NOSSOS BENEFÍCIOS
          </span>
          
          <h2 className="text-[24px] md:text-[32px] lg:text-[38px] font-light leading-[1.6] text-white max-w-[900px] mx-auto">
            Oferecemos uma gestão completa e estratégica de todas as suas operações 
            <span className="inline-block align-middle mx-2 overflow-hidden rounded-full border border-white/30 w-[60px] h-[30px] md:w-[80px] md:h-[40px] relative">
              <Image unoptimized src="/images/business-people-meeting.jpg" fill sizes="(max-width: 768px) 60px, 80px" className="object-cover" alt="Gestão" />
            </span> 
            logísticas, atuando 
            <span className="inline-block align-middle mx-2 overflow-hidden rounded-full border border-white/30 w-[60px] h-[30px] md:w-[80px] md:h-[40px] relative">
              <Image unoptimized src="/images/aerial-view-container-cargo-ship-sea.jpg" fill sizes="(max-width: 768px) 60px, 80px" className="object-cover" alt="Marítimo" />
            </span> 
            como seu ponto único de controle. Desde a coordenação de transporte até a 
            <span className="inline-block align-middle mx-2 overflow-hidden rounded-full border border-white/30 w-[60px] h-[30px] md:w-[80px] md:h-[40px] relative">
              <Image src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=200&h=100" fill sizes="(max-width: 768px) 60px, 80px" className="object-cover" alt="Aéreo" unoptimized />
            </span> 
            armazenagem, garantimos que cada etapa da sua cadeia de suprimentos seja eficiente, segura e sob controle 
            <span className="inline-block align-middle mx-2 overflow-hidden rounded-full border border-white/30 w-[60px] h-[30px] md:w-[80px] md:h-[40px] relative">
              <Image src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=200&h=100" fill sizes="(max-width: 768px) 60px, 80px" className="object-cover" alt="Terrestre" unoptimized />
            </span>.
          </h2>
        </motion.div>

        {/* 3-Column Clean Grid */}
        <motion.div 
          variants={pinhoStaggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Card 1 */}
          <motion.div 
            variants={pinhoStaggerItem}
            className="border border-white/20 p-6 lg:p-8 flex flex-col h-full hover:border-white/40 transition-colors duration-300"
          >
            <Globe className="w-6 h-6 text-white mb-6" />
            <h4 className="text-[18px] font-bold text-white mb-3">Controle Total da Cadeia Logística</h4>
            <p className="text-[14px] text-white/70 leading-[1.6] font-light">
              Centralizamos e gerenciamos todas as etapas da sua operação logística, otimizando processos, reduzindo custos e fornecendo visibilidade total para tomada de decisão estratégica.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            variants={pinhoStaggerItem}
            className="border border-white/20 p-6 lg:p-8 flex flex-col h-full hover:border-white/40 transition-colors duration-300"
          >
            <GitMerge className="w-6 h-6 text-white mb-6" />
            <h4 className="text-[18px] font-bold text-white mb-3">Comunicação Unificada</h4>
            <p className="text-[14px] text-white/70 leading-[1.6] font-light">
              Um único ponto de contato para todas as suas necessidades logísticas, garantindo que sua comunicação seja rápida, integrada e eficiente, sempre em tempo real.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            variants={pinhoStaggerItem}
            className="border border-white/20 p-6 lg:p-8 flex flex-col h-full hover:border-white/40 transition-colors duration-300"
          >
            <Settings className="w-6 h-6 text-white mb-6" />
            <h4 className="text-[18px] font-bold text-white mb-3">Flexibilidade e Escalabilidade</h4>
            <p className="text-[14px] text-white/70 leading-[1.6] font-light">
              Soluções logísticas flexíveis e escaláveis, feitas sob medida para atender às suas necessidades específicas, independente do tamanho ou complexidade da sua operação.
            </p>
          </motion.div>
        </motion.div>
        
      </div>
    </section>
    </div>
  );
}

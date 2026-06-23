"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const springConfig = { duration: 0.7, ease: "easeOut" };

export default function BentoGridSection() {
  return (
    <section className="py-24 bg-white text-black overflow-hidden border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-[1300px]">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={springConfig}
          className="mb-16 flex flex-col items-start"
        >
          <span className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-4">FUNCIONALIDADES</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-black max-w-3xl">
            Facilitando sua Logística e Comércio Internacional
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[280px]">
          
          {/* Col 1: Left (IA Box + Blue Tech) */}
          <div className="flex flex-col gap-6 col-span-1 row-span-2">
            {/* Box 1: IA */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={springConfig}
              className="rounded-[24px] overflow-hidden relative group flex-1 p-8 flex flex-col justify-between"
            >
              <Image 
                src="/images/bento_ai_automation.png" 
                alt="Inteligência Artificial"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 z-0"
              />
              <div className="absolute inset-0 bg-black/50 z-10 transition-opacity duration-500 group-hover:bg-black/60" />
              <span className="relative z-20 text-[10px] font-bold tracking-wider uppercase text-white/80">Inteligência Artificial</span>
              <h4 className="relative z-20 text-xl md:text-2xl font-medium text-white mt-4 leading-snug drop-shadow-md">Automação e Eficiência com IA</h4>
            </motion.div>

            {/* Box 2: Blue Tech Abstract -> Now Image */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ ...springConfig, delay: 0.1 }}
              className="rounded-[24px] overflow-hidden relative group flex-1"
            >
              <Image 
                src="/images/global-logistics-transportation-network.jpg" 
                alt="Tecnologia 4PL"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 z-0"
              />
              <div className="absolute inset-0 bg-black/30 z-10 transition-opacity duration-500 group-hover:bg-black/40" />
              <div className="relative z-20 w-full h-full p-6 flex flex-col justify-end items-start">
                <span className="text-white font-bold tracking-widest uppercase text-[10px] md:text-xs drop-shadow-md border border-white/30 px-3 py-1 rounded-full backdrop-blur-sm">Tecnologia 4PL</span>
              </div>
            </motion.div>
          </div>

          {/* Col 2: Middle Tall (Ship Sunset) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ ...springConfig, delay: 0.1 }}
            className="rounded-[24px] overflow-hidden col-span-1 row-span-2 relative group"
          >
            <Image 
              src="/images/portrait-engineers-work-hours-job-site.jpg" 
              alt="Engenheiros e Gestão Logística"
              fill
              className="object-cover object-[35%_10%] group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          </motion.div>

          {/* Col 3 & 4: Right Side */}
          <div className="flex flex-col gap-6 col-span-1 md:col-span-2 row-span-2">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
              {/* Box: Aduanas */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ ...springConfig, delay: 0.2 }}
                className="rounded-[24px] overflow-hidden relative group flex-1 p-8 flex flex-col justify-between"
              >
                <Image 
                  src="/images/bento_customs.png" 
                  alt="Aduanas"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 z-0"
                />
                <div className="absolute inset-0 bg-black/50 z-10 transition-opacity duration-500 group-hover:bg-black/60" />
                <span className="relative z-20 text-[10px] font-bold tracking-wider uppercase text-white/80">Operamos em todas as aduanas</span>
                <h4 className="relative z-20 text-lg md:text-xl font-medium text-white mt-4 leading-snug drop-shadow-md">Liberamos suas cargas em qualquer lugar do Brasil</h4>
              </motion.div>

              {/* Box: Woman Success Image */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ ...springConfig, delay: 0.3 }}
                className="rounded-[24px] overflow-hidden relative group"
              >
                <Image 
                  src="/images/business-people-meeting.jpg" 
                  alt="Reunião Estratégica"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </motion.div>
            </div>

            {/* Box: Green Câmbio */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ ...springConfig, delay: 0.4 }}
              className="rounded-[24px] overflow-hidden relative group flex-1 p-8 flex flex-col justify-between"
            >
              <Image 
                src="/images/bento_currency.png" 
                alt="Câmbio Aduaneiro"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 z-0"
              />
              <div className="absolute inset-0 bg-[#2a8335]/80 mix-blend-multiply z-10 transition-opacity duration-500 group-hover:bg-[#2a8335]/90" />
              <div className="absolute inset-0 bg-black/40 z-10 transition-opacity duration-500 group-hover:bg-black/50" />
              <span className="relative z-20 text-[10px] font-bold tracking-wider uppercase text-white/90">Câmbio Aduaneiro</span>
              <h4 className="relative z-20 text-xl md:text-2xl font-medium text-white leading-relaxed mt-4 max-w-xl drop-shadow-md">
                Cotações de câmbio atualizadas para auxiliar no registro da Declaração de Importação (D.I.).
              </h4>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}

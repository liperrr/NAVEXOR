"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { pinhoFadeInUp, pinhoStaggerContainer, pinhoStaggerItem } from "@/utils/animations";

export default function BentoGridSection() {
  return (
    <section className="py-24 bg-white text-black overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1300px]">
        
        {/* Section Header with Dashed Line */}
        <div className="border-t border-dashed border-gray-300 mb-12"></div>
        <motion.div 
          variants={pinhoFadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mb-16 flex flex-col items-start"
        >
          <span className="text-[13px] font-normal tracking-wide text-gray-700 mb-4">FUNCIONALIDADES</span>
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-normal leading-[1.1] text-black max-w-4xl">
            Facilitando sua Logística e Comércio Internacional
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <motion.div 
          variants={pinhoStaggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col md:grid md:grid-cols-4 gap-4 md:auto-rows-[280px]"
        >
          
          {/* Col 1: Left (IA Box + Blue Tech) */}
          <div className="flex flex-col gap-4 md:col-span-1 md:row-span-2">
            {/* Box 1: IA (Solid Beige) */}
            <motion.div 
              variants={pinhoStaggerItem}
              className="rounded-[24px] bg-[#f2efe9] flex-1 p-8 flex flex-col justify-between"
            >
              <span className="text-[10px] font-medium tracking-wider uppercase text-gray-600">Inteligência Artificial</span>
              <h4 className="text-xl md:text-2xl font-normal text-black mt-4 leading-snug">Automação e<br/>Eficiência com IA</h4>
            </motion.div>

            {/* Box 2: Blue Tech Abstract */}
            <motion.div 
              variants={pinhoStaggerItem}
              className="rounded-[24px] overflow-hidden relative flex-1 h-[250px] md:h-auto"
            >
              <Image 
                src="/images/global-logistics-transportation-network.jpg" 
                alt="Tecnologia"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>

          {/* Col 2: Middle Tall (Ship Sunset) */}
          <motion.div 
            variants={pinhoStaggerItem}
            className="rounded-[24px] overflow-hidden md:col-span-1 md:row-span-2 relative h-[350px] md:h-auto"
          >
            <Image 
              src="/images/portrait-engineers-work-hours-job-site.jpg" 
              alt="Gestão Logística"
              fill
              className="object-cover object-[35%_10%] hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          </motion.div>

          {/* Col 3 & 4: Right Side */}
          <div className="flex flex-col gap-4 md:col-span-2 md:row-span-2">
            
            <div className="flex flex-col md:grid md:grid-cols-2 gap-4 flex-1">
              {/* Box: Aduanas (Solid Beige) */}
              <motion.div 
                variants={pinhoStaggerItem}
                className="rounded-[24px] bg-[#f2efe9] flex-1 p-8 flex flex-col justify-between"
              >
                <span className="text-[10px] font-medium tracking-wider uppercase text-gray-600 max-w-[150px]">Operamos em todas as aduanas</span>
                <h4 className="text-lg md:text-xl font-normal text-black mt-4 leading-snug pr-4">Liberamos suas<br/>cargas em<br/>qualquer lugar do<br/>Brasil</h4>
              </motion.div>

              {/* Box: Landscape Image */}
              <motion.div 
                variants={pinhoStaggerItem}
                className="rounded-[24px] overflow-hidden relative h-[250px] md:h-auto"
              >
                <Image 
                  src="/images/business-people-meeting.jpg" 
                  alt="Operações"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </motion.div>
            </div>

            {/* Box: Green Câmbio (Solid Green) */}
            <motion.div 
              variants={pinhoStaggerItem}
              className="rounded-[24px] bg-[#2a8b3d] flex-1 p-8 flex flex-col justify-between"
            >
              <span className="text-[10px] font-medium tracking-wider uppercase text-white/90">Câmbio Aduaneiro</span>
              <h4 className="text-xl md:text-2xl font-normal text-white leading-relaxed mt-4 max-w-xl">
                Cotações de câmbio atualizadas para auxiliar no registro da Declaração de Importação (D.I.).
              </h4>
            </motion.div>

          </div>

        </motion.div>
      </div>
    </section>
  );
}

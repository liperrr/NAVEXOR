"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { pinhoFadeInUp, pinhoFadeInLeft, pinhoFadeInRight, pinhoStaggerContainer, pinhoStaggerItem } from "@/utils/animations";

export default function NewEraSection() {
  return (
    <div className="bg-[#e6e7e1]">
      <section className="relative py-16 md:py-20 bg-[#003366] text-white overflow-hidden rounded-t-[40px] md:rounded-t-[80px]">
        <div className="container relative z-10 mx-auto px-6 max-w-[1200px]">
        
        {/* Top Header Row (2 Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end mb-12 lg:mb-16">
          
          {/* Left: Titles */}
          <motion.div 
            variants={pinhoFadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <h2 className="text-[12px] font-medium tracking-[0.2em] text-white/70 uppercase mb-4">SOBRE NÓS</h2>
            <h3 className="text-3xl md:text-4xl lg:text-[42px] font-light leading-[1.15] text-white">
              Uma nova era na Gestão Estratégica
              <span className="block mt-3 flex items-center">
                <span className="inline-block w-10 h-[1px] bg-white/40 mr-4"></span>
                de Logística
              </span>
            </h3>
          </motion.div>
          
          {/* Right: Description */}
          <motion.div
            variants={pinhoFadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="pb-2"
          >
            <p className="text-[14px] text-gray-300 leading-[1.7] font-light max-w-lg">
              A Navexor Global Trade atua como exportadora e trading especializada na estruturação e desenvolvimento de negócios internacionais. Transformamos potencial produtivo em oportunidades globais, conectando o Brasil ao mundo através de relações comerciais sólidas e tecnologia de ponta.
            </p>
          </motion.div>
        </div>

        {/* Bottom Cards Row */}
        <motion.div 
          variants={pinhoStaggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {/* Card 1 */}
          <motion.div 
            variants={pinhoStaggerItem}
            className="bg-[#0f213d] border border-white/5 rounded-[20px] p-6 lg:p-8 flex flex-col h-full transition-all duration-500 hover:border-white/10"
          >
            <div className="w-full h-40 lg:h-48 rounded-[12px] overflow-hidden mb-6 relative">
              <Image 
                unoptimized
                src="/images/navexor_corporate_team_1781468506772.png" 
                alt="Nosso Propósito"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="flex flex-col flex-grow">
              <h4 className="text-[10px] font-bold text-white/50 uppercase tracking-[0.15em] mb-2">O QUE NOS MOVE</h4>
              <h5 className="text-[24px] font-normal text-white mb-3">Nosso Propósito</h5>
              <p className="text-[14px] text-white/60 leading-[1.6] flex-grow font-light mb-6">
                Conectar a excelência dos produtos brasileiros aos mercados internacionais por meio de operações seguras, eficientes e sustentáveis em cada etapa da logística.
              </p>
              <div className="mt-auto">
                <a href="#contact" className="inline-block border border-white/20 text-white rounded-[30px] px-6 py-2.5 text-[12px] font-medium tracking-wide hover:bg-white hover:text-[#0a192f] transition-all duration-300">
                  Confira agora
                </a>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            variants={pinhoStaggerItem}
            className="bg-[#0f213d] border border-white/5 rounded-[20px] p-6 lg:p-8 flex flex-col h-full transition-all duration-500 hover:border-white/10"
          >
            <div className="w-full h-40 lg:h-48 rounded-[12px] overflow-hidden mb-6 relative">
              <Image 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80" 
                alt="North Star"
                fill
                unoptimized
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="flex flex-col flex-grow">
              <h4 className="text-[10px] font-bold text-white/50 uppercase tracking-[0.15em] mb-2">ONDE QUEREMOS CHEGAR</h4>
              <h5 className="text-[24px] font-normal text-white mb-3">North Star</h5>
              <p className="text-[14px] text-white/60 leading-[1.6] flex-grow font-light mb-6">
                Ser reconhecida como uma das empresas brasileiras mais confiáveis na conexão entre produtores nacionais e compradores internacionais, gerando valor sustentável.
              </p>
              <div className="mt-auto">
                <a href="#contact" className="inline-block border border-white/20 text-white rounded-[30px] px-6 py-2.5 text-[12px] font-medium tracking-wide hover:bg-white hover:text-[#0a192f] transition-all duration-300">
                  Confira agora
                </a>
              </div>
            </div>
          </motion.div>

        </motion.div>
        
      </div>
    </section>
    </div>
  );
}

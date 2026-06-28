"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";
import { pinhoFadeInLeft, pinhoFadeInRight, pinhoFadeInUp } from "@/utils/animations";

const solutionsList = [
  {
    title: "Soluções para Importadores e Exportadores",
    desc: "Gestão completa e visibilidade da cadeia de suprimentos, desde a origem até o destino final, com soluções que atendem às necessidades da sua operação de importação ou exportação."
  },
  {
    title: "Soluções para Varejo e E-commerce",
    desc: "Movimentação eficiente de mercadorias, assegurando que seus produtos estejam sempre disponíveis para seus clientes, com logística ágil e conectada."
  },
  {
    title: "Soluções para Indústria e Manufatura",
    desc: "Sincronizamos produção e transporte, integrando processos logísticos para uma cadeia de suprimentos sem interrupções e com eficiência operacional."
  }
];

export default function TailoredSolutions() {
  return (
    <section className="py-24 bg-[#e6e7e1] text-black overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1300px]">
        
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-12 lg:gap-24 items-stretch">
          
          {/* Left Column */}
          <div className="flex flex-col h-full justify-between gap-12">
            
            {/* Top: Text Lists */}
            <motion.div 
              variants={pinhoFadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-col"
            >
              <span className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-4">FUNCIONALIDADES</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#0a192f] leading-tight mb-12 max-w-md">
                Soluções Personalizadas para Cada Segmento do Seu Negócio
              </h2>
              
              <ul className="flex flex-col gap-8">
                {solutionsList.map((item, index) => (
                  <li key={index} className="flex flex-col gap-3 border-b border-gray-300 pb-8">
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-black stroke-[3]" />
                      <span className="text-lg font-bold text-gray-900">{item.title}</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed font-medium pl-8">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Bottom: Image + Paragraph */}
            <motion.div 
              variants={pinhoFadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            >
              <div className="w-full h-[180px] rounded-[16px] overflow-hidden relative shadow-lg">
                <Image 
                  src="/images/dark-coffee-beans-bowl-brown-table.jpg" 
                  alt="Segmentos Navexor"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 30vw"
                />
              </div>
              <p className="text-sm md:text-base text-gray-500 font-medium leading-relaxed">
                Aplicamos tecnologias inovadoras para monitoramento e análise de dados em tempo real, garantindo que sua operação seja sempre eficiente, visível e conectada.
              </p>
            </motion.div>

          </div>

          {/* Right Column (Tall Image) */}
          <motion.div 
            variants={pinhoFadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="w-full h-full min-h-[600px] lg:min-h-full rounded-[24px] overflow-hidden shadow-2xl relative"
          >
            <Image 
              src="/images/transport-logistics-concept.jpg" 
              alt="Containers no porto"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

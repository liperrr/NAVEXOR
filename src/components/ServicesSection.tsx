"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";

const services = [
  {
    title: "GESTÃO DE ESTOQUES E ARMAZENAGEM",
    description: "Coordenamos e otimizamos o armazenamento de suas mercadorias, integrando processos para disponibilidade, segurança e eficiência logística.",
    image: "/images/aerial-view-container-cargo-ship-sea.jpg"
  },
  {
    title: "GESTÃO DE TRANSPORTE INTERNACIONAL",
    description: "Coordenamos o transporte global com parceiros estratégicos, proporcionando eficiência em custos e rotas para atender suas operações.",
    image: "/images/jumbo-jet-flying-sky.jpg"
  },
  {
    title: "DESPACHO ADUANEIRO EFICIENTE",
    description: "Uma equipe especializada em soluções aduaneiras, liberando suas cargas de forma rápida e segura, com total compliance e eficiência.",
    image: "/images/transport-logistics-concept.jpg"
  },
  {
    title: "AGRONEGÓCIO E EXPORTAÇÃO",
    description: "Conectamos produtores rurais ao mercado internacional, garantindo qualidade, certificações e as melhores oportunidades de negociação.",
    image: "/images/portrait-senior-hardworking-farmer-agronomist-corn-field-checking-crops-before-harvest.jpg"
  },
  {
    title: "INTELIGÊNCIA DE MERCADO GLOBAL",
    description: "Análise profunda de dados e tendências para identificar os melhores mercados e viabilizar a entrada de seus produtos no exterior.",
    image: "/images/v2osk.webp"
  }
];

export default function ServicesSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: "start", loop: true, skipSnaps: false },
    [Autoplay({ delay: 3500, stopOnInteraction: true })]
  );

  return (
    <section className="bg-[#eaf8fb] py-24 overflow-hidden" id="services">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide text-black mb-6">
            NOSSAS SOLUÇÕES
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Oferecemos uma gama completa de serviços para garantir que sua operação no comércio exterior seja ágil, segura e altamente lucrativa.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-6">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="pl-6 min-w-0 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                >
                  <div className="bg-white rounded-[24px] overflow-hidden shadow-lg border border-gray-100 flex flex-col h-full transform transition-transform duration-300 hover:-translate-y-2">
                    
                    {/* Image Header */}
                    <div className="relative w-full h-[220px]">
                      <Image 
                        src={service.image} 
                        alt={service.title} 
                        fill 
                        unoptimized
                        className="object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-8 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold uppercase text-black mb-4 leading-snug">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed flex-grow">
                        {service.description}
                      </p>
                      
                      <div className="mt-8">
                        <a href="/contact" className="inline-block border-2 border-black rounded-full px-6 py-2.5 text-sm font-bold text-black uppercase tracking-wider hover:bg-black hover:text-white transition-colors duration-300">
                          Saiba mais
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Fading Edges for aesthetics (Optional, but looks premium) */}
          <div className="absolute top-0 right-0 w-12 md:w-32 h-full bg-gradient-to-l from-[#eaf8fb] to-transparent pointer-events-none z-10" />
        </div>

      </div>
    </section>
  );
}

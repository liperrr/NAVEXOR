"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const banners = [
  {
    image: "/images/jumbo-jet-flying-sky.jpg",
    tag: "LOGÍSTICA GLOBAL",
    title: "A Navexor está apostando\nna verticalização",
    description: "Nós sabemos que tentar fazer parte desse grupo é algo praticamente impossível, mas decidimos inovar com rotas integradas aéreas e marítimas para clientes seletos.",
    align: "left",
  },
  {
    image: "/images/dark-coffee-beans-bowl-brown-table.jpg",
    tag: "ESG & COMMODITIES",
    title: "Sustentabilidade",
    description: "Comprometimento é o que faz com que a Navexor tenha atenção especial para as políticas de ESG. A empresa trabalha para ter impacto socioambiental positivo em todo o globo.",
    align: "right",
  },
  {
    image: "/images/people-working.jpg",
    tag: "GENTE E GESTÃO",
    title: "Trabalhe Conosco",
    description: "Uma empresa como a Navexor opera com profissionais dedicados e experientes. Por isso, o investimento no desenvolvimento de nossos colaboradores é prática constante.",
    align: "left",
  }
];

export default function StackedBannersSection() {
  return (
    <section className="w-full flex flex-col bg-black">
      {banners.map((banner, i) => (
        <div key={i} className="group relative w-full h-[550px] overflow-hidden cursor-pointer">
          {/* Background Image */}
          <Image 
            src={banner.image}
            alt={banner.title.replace('\n', ' ')}
            fill
            className="absolute inset-0 object-cover z-0 transition-transform duration-1000 group-hover:scale-[1.02]"
          />
          
          {/* Subtle Gradient for base text readability */}
          <div 
            className={`absolute inset-y-0 z-10 w-[70%] md:w-[50%] opacity-90 transition-opacity duration-500 group-hover:opacity-0 ${
              banner.align === "left" 
                ? "bg-gradient-to-r from-black/80 via-black/40 to-transparent left-0" 
                : "bg-gradient-to-l from-black/80 via-black/40 to-transparent right-0"
            }`} 
          />

          {/* Hover Slide Overlay (mix-blend-multiply deep blue) */}
          <div 
            className={`absolute inset-y-0 z-20 bg-[#0B2545] mix-blend-multiply transition-all duration-[400ms] ease-[cubic-bezier(0.25,1,0.5,1)] w-0 md:group-hover:w-[45%] lg:group-hover:w-[35%] group-hover:w-[60%] ${
              banner.align === "left" ? "left-0" : "right-0"
            }`}
          />

          {/* Content */}
          <div className="absolute inset-0 z-30 flex items-center pointer-events-none">
            <div className={`container mx-auto px-6 max-w-[1300px] flex ${banner.align === "left" ? "justify-start" : "justify-end"}`}>
              <div className={`max-w-[480px] flex flex-col gap-5 transition-transform duration-[400ms] ease-out ${
                banner.align === "left" 
                  ? "text-left group-hover:translate-x-4" 
                  : "text-right group-hover:-translate-x-4"
              }`}>
                <span className="text-[10px] md:text-xs font-bold tracking-widest text-white/90 uppercase">
                  {banner.tag}
                </span>
                <h3 className="text-4xl md:text-5xl font-bold text-white leading-[1.1] whitespace-pre-line drop-shadow-md">
                  {banner.title}
                </h3>
                <p className="text-sm md:text-base text-white/95 font-medium leading-relaxed drop-shadow-sm">
                  {banner.description}
                </p>
                <div className={`mt-2 pointer-events-auto ${banner.align === "left" ? "self-start" : "self-end"}`}>
                  <button className="px-8 py-3 bg-[#E7FEFE] text-black text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors rounded-full shadow-lg">
                    Leia mais
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

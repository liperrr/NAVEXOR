"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const springConfig = { duration: 0.7, ease: "easeOut" };

export default function BenefitsSection() {
  return (
    <section className="py-32 bg-white text-black overflow-hidden border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-[1300px]">
        
        {/* Top Subtitle */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={springConfig}
          className="flex justify-start mb-8"
        >
          <span className="text-xs font-bold tracking-widest uppercase text-gray-500">
            O QUE FAZEMOS & NOSSOS PROCESSOS
          </span>
        </motion.div>

        {/* Premium Staggered Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start mt-8">
          
          {/* Column 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={springConfig}
            className="flex flex-col gap-8"
          >
            <div className="relative w-full aspect-[655/680] max-h-[500px] flex justify-center group overflow-visible">
              <svg viewBox="0 0 655 680" fill="none" className="h-full w-auto drop-shadow-[0_20px_20px_rgba(0,0,0,0.15)]">
                <defs>
                  <clipPath id="_S_1_-clip">
                    <path id="_S_1_-shape" d="M537.827 9.245A11.5 11.5 0 0 1 549.104 0h63.366c7.257 0 12.7 6.64 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 586.87 151h-28.275a15.999 15.999 0 0 0-15.689 12.862l-59.4 297c-1.98 9.901 5.592 19.138 15.689 19.138h17.275l.127.001c.85.009 1.701.074 2.549.009 11.329-.874 21.411-7.529 24.88-25.981.002-.012.016-.016.023-.007.008.009.022.005.024-.006l24.754-123.771A11.5 11.5 0 0 1 580.104 321h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 617.87 472H559c-22.866 0-28.984 7.98-31.989 25.931-.004.026-.037.035-.052.014-.015-.02-.048-.013-.053.012l-24.759 123.798A11.5 11.5 0 0 1 490.87 631h-29.132a14.953 14.953 0 0 0-14.664 12.021c-4.3 21.502-23.18 36.979-45.107 36.979H83.502c-29.028 0-50.8-26.557-45.107-55.021l102.4-512C145.096 91.477 163.975 76 185.902 76h318.465c10.136 0 21.179-5.35 23.167-15.288l10.293-51.467Zm-512 160A11.5 11.5 0 0 1 37.104 160h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 74.87 311H11.504c-7.257 0-12.7-6.639-11.277-13.755l25.6-128Z" fillRule="evenodd" clipRule="evenodd" />
                  </clipPath>
                </defs>
                <g clipPath="url(#_S_1_-clip)" className="origin-center transition-transform duration-[1500ms] group-hover:scale-105">
                  <foreignObject width="655" height="680">
                    <img src="/images/aerial-view-container-cargo-ship-sea.jpg" alt="Ponte Estratégica Global" className="w-full h-full object-cover" />
                  </foreignObject>
                </g>
              </svg>
            </div>
            <div className="pr-0 md:pr-12">
              <h3 className="text-3xl md:text-4xl font-light text-black leading-tight mb-4">
                Ponte Estratégica Global
              </h3>
              <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed">
                Atuamos como uma ponte estratégica conectando produtores com compradores internacionais qualificados, garantindo negociações seguras e transparentes.
              </p>
            </div>
          </motion.div>

          {/* Column 2 (Staggered downwards on Desktop) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ ...springConfig, delay: 0.15 }}
            className="flex flex-col gap-8 lg:mt-32"
          >
            <div className="relative w-full aspect-[719/680] max-h-[500px] flex justify-center group overflow-visible">
              <svg viewBox="0 0 719 680" fill="none" className="h-full w-auto drop-shadow-[0_20px_20px_rgba(0,0,0,0.15)]">
                <defs>
                  <clipPath id="_S_2_-clip">
                    <path id="_S_2_-shape" d="M89.827 9.245A11.5 11.5 0 0 1 101.104 0h63.366c7.257 0 12.7 6.64 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 138.87 151H75.504c-7.257 0-12.7-6.639-11.277-13.755l25.6-128Zm-64 321A11.5 11.5 0 0 1 37.104 321h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 74.87 472H11.504c-7.257 0-12.7-6.639-11.277-13.755l25.6-128ZM526.795 470a15.999 15.999 0 0 0-15.689 12.862l-32.032 160.159c-4.3 21.502-23.18 36.979-45.107 36.979H115.502c-29.028 0-50.8-26.557-45.107-55.021l102.4-512C177.096 91.477 195.975 76 217.902 76h318.465c29.028 0 50.8 26.557 45.107 55.021l-33.768 168.841c-1.98 9.901 5.592 19.138 15.689 19.138h17.075l.127.001c.85.009 1.701.074 2.549.009 11.329-.874 21.411-7.529 24.88-25.981.002-.012.016-.016.023-.007.008.009.022.005.024-.006l24.754-123.771A11.5 11.5 0 0 1 644.104 160h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 681.87 311H623c-22.866 0-28.984 7.98-31.989 25.931-.004.026-.037.035-.052.014-.015-.02-.048-.013-.053.012l-24.759 123.798A11.5 11.5 0 0 1 554.87 470h-28.075Z" fillRule="evenodd" clipRule="evenodd" />
                  </clipPath>
                </defs>
                <g clipPath="url(#_S_2_-clip)" className="origin-center transition-transform duration-[1500ms] group-hover:scale-105">
                  <foreignObject width="719" height="680">
                    <img src="/images/transport-logistics-concept.jpg" alt="Viabilidade e Oportunidades" className="w-full h-full object-cover" />
                  </foreignObject>
                </g>
              </svg>
            </div>
            <div className="pr-0 md:pr-12">
              <h3 className="text-3xl md:text-4xl font-light text-black leading-tight mb-4">
                Viabilidade & Oportunidades
              </h3>
              <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed">
                Avaliamos a viabilidade do produto e identificamos as melhores oportunidades de mercado para a sua empresa expandir internacionalmente.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

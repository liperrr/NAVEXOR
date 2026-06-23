"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const easing = [0.16, 1, 0.3, 1];

export default function HeroSection() {
  return (
    <section className="relative h-[85vh] flex items-center overflow-hidden bg-[#E7FEFE] mt-24">
      {/* Background Image: High Res 4K Local via next/image for optimization */}
      <Image
        src="/images/hero-bg-chatgpt.png"
        alt="Navexor Hero Background"
        fill
        className="absolute inset-0 z-0 object-cover"
        priority
        unoptimized
      />
      {/* Overlay removido a pedido do usuário para deixar a imagem limpa */}

      {/* Faint Brand Watermark */}
      <div className="absolute inset-0 z-10 flex items-center justify-start opacity-10 pointer-events-none">
        <svg viewBox="0 0 655 680" fill="white" className="h-[120%] w-auto -ml-[5%]">
          <path d="M537.827 9.245A11.5 11.5 0 0 1 549.104 0h63.366c7.257 0 12.7 6.64 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 586.87 151h-28.275a15.999 15.999 0 0 0-15.689 12.862l-59.4 297c-1.98 9.901 5.592 19.138 15.689 19.138h17.275l.127.001c.85.009 1.701.074 2.549.009 11.329-.874 21.411-7.529 24.88-25.981.002-.012.016-.016.023-.007.008.009.022.005.024-.006l24.754-123.771A11.5 11.5 0 0 1 580.104 321h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 617.87 472H559c-22.866 0-28.984 7.98-31.989 25.931-.004.026-.037.035-.052.014-.015-.02-.048-.013-.053.012l-24.759 123.798A11.5 11.5 0 0 1 490.87 631h-29.132a14.953 14.953 0 0 0-14.664 12.021c-4.3 21.502-23.18 36.979-45.107 36.979H83.502c-29.028 0-50.8-26.557-45.107-55.021l102.4-512C145.096 91.477 163.975 76 185.902 76h318.465c10.136 0 21.179-5.35 23.167-15.288l10.293-51.467Zm-512 160A11.5 11.5 0 0 1 37.104 160h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 74.87 311H11.504c-7.257 0-12.7-6.639-11.277-13.755l25.6-128Z" />
        </svg>
      </div>
      <div className="container relative z-20 mx-auto px-6 h-full flex flex-col justify-end pb-24 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 md:gap-16 items-end max-w-[1400px] mx-auto w-full">

          {/* Left Side: Title */}
          <div className="flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="mb-6"
            >
              <h1 className="text-base md:text-lg font-medium tracking-wide text-white">
                Gestão Estratégica e Eficiência na Cadeia de Suprimentos
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="flex flex-col gap-2"
            >
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white leading-none tracking-tight">
                Sua Torre de Controle
              </h2>
              <div className="flex items-center gap-4">
                <span className="hidden md:block h-[2px] w-24 md:w-32 bg-white" />
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white leading-none tracking-tight">
                  Logística 4PL
                </h2>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Paragraph and Button */}
          <div className="flex flex-col items-start lg:items-start lg:pb-2">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="max-w-[480px]"
            >
              <p className="text-base md:text-lg text-white mb-8 leading-relaxed font-medium">
                Gerenciamos e centralizamos toda a sua cadeia logística para garantir eficiência, visibilidade e soluções sob medida para suas operações
              </p>
              <a
                href="#contact"
                className="inline-block px-8 py-3.5 bg-black text-white border border-black/20 text-sm font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors rounded-full"
              >
                Entrar em contato conosco
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

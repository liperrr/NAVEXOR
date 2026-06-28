"use client";

import { motion } from "framer-motion";
import { pinhoFadeInUp } from "@/utils/animations";

export default function CTASection() {
  return (
    <div className="bg-[#fafafa]">
      <section className="relative py-32 bg-[#001f3f] text-white overflow-hidden rounded-t-[40px] md:rounded-t-[80px]" id="container-cta">
        
        {/* Pinho-style Watermark: Bottom Left */}
      <div className="absolute -bottom-24 -left-16 pointer-events-none opacity-[0.03] z-0">
        <svg width="400" height="400" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 50 150 L 50 50 L 120 100 L 50 150 Z" stroke="white" strokeWidth="2" strokeLinejoin="round" />
          <path d="M 80 180 L 80 80 L 150 130 L 80 180 Z" stroke="white" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Pinho-style Watermark: Top Right */}
      <div className="absolute -top-24 -right-16 pointer-events-none opacity-[0.03] z-0">
        <svg width="400" height="400" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
          <path d="M 50 150 L 50 50 L 120 100 L 50 150 Z" stroke="white" strokeWidth="2" strokeLinejoin="round" />
          <path d="M 80 180 L 80 80 L 150 130 L 80 180 Z" stroke="white" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-6 flex flex-col items-center text-center max-w-[850px]">
        
        <motion.span 
          variants={pinhoFadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-[20px] font-normal tracking-wide uppercase mb-6 opacity-80 font-['Inter']"
        >
          CONTATO
        </motion.span>
        
        <motion.h2 
          variants={pinhoFadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-[40px] md:text-[50px] font-normal leading-[1.2] mb-12 font-['Inter']"
        >
          Quer simplificar sua logística e ter total controle da operação?
        </motion.h2>

        <motion.a 
          variants={pinhoFadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          href="#contact"
          className="inline-block px-8 py-3 bg-[#FFC107] text-[#001f3f] rounded-[20px] text-[15px] font-medium transition-all duration-300 hover:bg-[#e0a800]"
        >
          Entrar em contato conosco
        </motion.a>
        
      </div>
    </section>
    </div>
  );
}

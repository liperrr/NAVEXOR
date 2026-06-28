"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PremiumCTASection() {
  return (
    <section className="bg-gradient-to-r from-[#8a651b] via-[#d4af37] to-[#8a651b] text-white py-32 px-6 relative overflow-hidden" id="contato-cta">
      {/* Background Graphic Subtlety (like the faint lines in the reference) */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <svg viewBox="0 0 1000 400" className="w-full h-full object-cover">
          <path fill="none" stroke="url(#gold-glow)" strokeWidth="3" d="M -100 200 Q 300 0 700 200 T 1500 200" />
          <defs>
            <linearGradient id="gold-glow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10 text-center flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-white/90 mb-6 block drop-shadow-md">
            CONTATO
          </span>
          <h2 className="text-3xl md:text-5xl font-medium text-white leading-tight mb-8 drop-shadow-md">
            Nós cuidamos de tudo para você! Conheça nossa solução logística Premium
          </h2>
          <p className="text-sm md:text-base text-white/90 leading-relaxed max-w-3xl mx-auto mb-10 font-medium drop-shadow-md">
            Contratando nossa solução combo, cuidamos da sua carga desde a origem até o seu porto. Diminua custos e otimize seu tempo com apenas um fornecedor logístico.
          </p>
          
          <Link 
            href="/contato"
            className="inline-block bg-white text-[#8a651b] font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-full hover:bg-[#001f3f] hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Quero experimentar!
          </Link>
        </motion.div>

      </div>
    </section>
  );
}

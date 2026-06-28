"use client";

import { motion } from "framer-motion";

export default function CertificationsSection() {
  return (
    <section className="relative py-32 overflow-hidden flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/images/aerial-view-container-cargo-ship-sea.jpg')" }}
      >
        {/* Dark Blue Overlay to match Navexor branding instead of blue/green */}
        <div className="absolute inset-0 bg-[#001f3f]/80 mix-blend-multiply"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-white/80 mb-4 block">
              QUALIDADE CERTIFICADA
            </span>
            <h2 className="text-4xl md:text-5xl font-medium text-white mb-6">
              Certificação
            </h2>
            <p className="text-sm md:text-base text-white/90 leading-relaxed font-medium">
              Oferecemos a segurança e qualidade de um serviço de agenciamento de carga com a Certificação OEA e ISO 9001:2015. Com um processo todo feito em um único fornecedor, você não precisa se preocupar com janelas de programação de coleta nos portos.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center md:justify-start gap-6"
          >
            {/* Fake Badges for demonstration since we don't have the exact logos */}
            <div className="bg-white rounded-full w-32 h-32 flex items-center justify-center p-4 shadow-2xl">
              <div className="text-center">
                <span className="block font-bold text-lg text-[#001f3f]">ISO</span>
                <span className="block text-[10px] text-gray-500">9001:2015</span>
              </div>
            </div>
            
            <div className="bg-white rounded-xl w-48 h-32 flex items-center justify-center p-4 shadow-2xl">
              <div className="text-center">
                <span className="block font-bold text-4xl text-green-700 italic">AEO</span>
                <span className="block text-[8px] text-gray-500 uppercase mt-1">Authorized Economic Operator</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Decorative colored corner like the reference */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#c5a059] transform -translate-x-1/2 translate-y-1/2 rotate-45 z-0 opacity-80"></div>
    </section>
  );
}

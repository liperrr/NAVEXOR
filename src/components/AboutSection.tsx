"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const springConfig = { duration: 0.7, ease: "easeOut" };

export default function AboutSection() {
  return (
    <section className="py-32 bg-white text-black overflow-hidden" id="about">
      <div className="container mx-auto px-6 max-w-[1300px]">
        
        <div className="flex flex-col gap-12">
          {/* Section Title */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={springConfig}
            className="w-full border-t border-gray-300 pt-8 flex justify-center lg:justify-start"
          >
            <h2 className="text-sm font-medium tracking-widest text-gray-500 uppercase">SOBRE NÓS</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mt-4">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={springConfig}
              className="flex flex-col gap-6"
            >
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-gray-800">
                Mais do que um operador logístico, somos seu parceiro estratégico para <span className="font-semibold">gestão integrada</span> da cadeia de suprimentos.
              </h3>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ ...springConfig, delay: 0.1 }}
              className="flex flex-col gap-8"
            >
              <img 
                src="/images/navexor_about_highway_1781468495026.png" 
                alt="Logística Integrada Navexor"
                className="w-full h-[400px] object-cover rounded-xl shadow-xl"
              />
              
              <div className="text-base text-gray-600 leading-relaxed font-medium">
                Nossa atuação vai além do despacho aduaneiro e transporte – atuamos como uma torre de controle, centralizando a comunicação e integrando todos os elos para tornar sua logística mais eficiente e focada nos resultados da Navexor Global Trade.
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

export default function NewEraSection() {
  const springConfig = { duration: 0.7, ease: "easeOut" };

  return (
    <section className="py-24 bg-white text-black overflow-hidden border-t border-gray-100">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={springConfig}
            className="flex flex-col gap-8"
          >
            <div>
              <h2 className="text-xl font-medium tracking-widest text-gray-500 uppercase mb-4">SOBRE NÓS</h2>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-gray-900">
                Uma nova era na Gestão Estratégica
                <span className="block mt-4 border-t-2 border-gray-200 pt-4 w-[80%] mx-auto lg:mx-0 lg:ml-auto">
                  de Logística
                </span>
              </h3>
            </div>
            
            <p className="text-lg text-gray-500 leading-relaxed font-medium">
              A Navexor Global Trade atua como exportadora e trading especializada na estruturação e desenvolvimento de negócios internacionais. Nosso propósito é simplificar o acesso ao comércio exterior, reduzir barreiras operacionais e criar oportunidades que gerem valor para produtores, clientes e parceiros comerciais em diferentes mercados ao redor do mundo.
              <br/><br/>
              Transformamos potencial produtivo em oportunidades globais, construindo relações comerciais sólidas e duradouras.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
              <div>
                <h4 className="text-xl font-bold text-[#0a192f] mb-2 uppercase tracking-wide text-sm">Nosso Propósito</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Conectar a excelência dos produtos brasileiros aos mercados internacionais por meio de operações seguras, eficientes e sustentáveis.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#0a192f] mb-2 uppercase tracking-wide text-sm">North Star</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Ser reconhecida como uma das empresas brasileiras mais confiáveis na conexão entre produtores nacionais e compradores internacionais, gerando valor sustentável em cada operação.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={springConfig}
            className="relative h-[600px] w-full"
          >
            {/* Navexor Original Accents: Tech & Logistics Theme */}
            
            {/* Top Right Golden Frame */}
            <div className="absolute -top-8 -right-8 w-40 h-40 border-t-[12px] border-r-[12px] border-[#FFC107] z-0" />
            
            {/* Bottom Left Dark Blue Support Block */}
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-[#0a192f] z-0 shadow-lg" />
            
            {/* Subtle Dot Pattern Matrix */}
            <div className="absolute top-1/2 -left-16 w-32 h-64 -translate-y-1/2 bg-[radial-gradient(circle,#0a192f_2px,transparent_2px)] [background-size:16px_16px] opacity-10 z-0" />

            {/* Main Image Container */}
            <div className="absolute inset-0 z-10 shadow-[0_20px_50px_rgba(0,0,0,0.2)] bg-white p-2">
              <div className="w-full h-full overflow-hidden">
                <img 
                  src="/images/navexor_corporate_team_1781468506772.png" 
                  alt="Navexor Team"
                  className="w-full h-full object-cover transition-transform duration-[2000ms] hover:scale-105"
                />
              </div>
            </div>
            
            {/* Floating Accent Square */}
            <div className="absolute -bottom-12 right-12 w-24 h-24 bg-[#FFC107] z-20 flex items-center justify-center shadow-xl">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}

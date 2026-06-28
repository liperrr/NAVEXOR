"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const cases = [
  {
    title: "Ambev",
    description: "Operações de Importação e Exportação de insumos e produtos acabados do grupo Ambev.",
    image: "/images/navexor_case_ambev_1782612592764.png" 
  },
  {
    title: "Usina de Itaipu",
    description: "Coordenação logística de importação das turbinas e equipamentos da usina de Itaipu.",
    image: "/images/navexor_case_itaipu_1782612601481.png"
  },
  {
    title: "Fábrica Klabin",
    description: "Coordenação logística, aplicação de benefícios fiscais, e desembaraço aduaneiro da fábrica de celulose Klabin.",
    image: "/images/navexor_case_klabin_1782612613522.png"
  },
  {
    title: "Moinho Frísia",
    description: "Assessoria Aduaneira, instrução do Ex. Tarifário, logística e desembaraço Moinho de Farinha de Trigo Frísia.",
    image: "/images/navexor_case_frisia_1782612624208.png"
  },
  {
    title: "Cooperativa Agrária",
    description: "Assessoria plena, importação de soja e exportação de farelo e óleo da Cooperativa Agrária.",
    image: "/images/navexor_case_agraria_1782612633019.png"
  },
  {
    title: "TCP",
    description: "Assessoria aduaneira nas operações dos portêineres do Terminal de Contêineres de Paranaguá.",
    image: "/images/navexor_case_tcp_1782612642036.png"
  }
];

export default function CasesGridSection() {
  return (
    <section className="bg-[#003366] text-white py-24 px-6 relative overflow-hidden" id="cases">
      <div className="container mx-auto max-w-[1200px] relative z-10">
        
        {/* Header Title with the distinct layout */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-[#c5a059] mb-2 block">
            EXCELÊNCIA
          </span>
          <div className="flex items-center gap-4">
            <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">
              Cases que
            </h2>
            <div className="flex-grow h-[1px] bg-white/30 max-w-[100px] hidden md:block"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mt-1">
            transformaram negócios
          </h2>
        </motion.div>

        {/* Grid of Cases */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cases.map((caseItem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col group"
            >
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4 bg-gray-200">
                <Image 
                  src={caseItem.image}
                  alt={caseItem.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay for better text contrast if needed, but reference relies on text below image */}
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#c5a059] transition-colors">
                {caseItem.title}
              </h3>
              <p className="text-sm text-white/80 leading-relaxed">
                {caseItem.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

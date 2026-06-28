"use client";

import { motion } from "framer-motion";
import { Monitor, ShieldCheck, Gavel, Target, Flag, GraduationCap } from "lucide-react";

const values = [
  {
    icon: <Monitor className="w-6 h-6" />,
    title: "Lealdade",
    description: "Uma força presente em todas as relações."
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Integridade",
    description: "Relação entre a formação continuada e a conduta com a ação profissional."
  },
  {
    icon: <Gavel className="w-6 h-6" />,
    title: "Veracidade",
    description: "Verdade acima de tudo."
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Acurácia",
    description: "Precisão na execução de nossos produtos, atenção aos resultados e nossas funções e tarefas."
  },
  {
    icon: <Flag className="w-6 h-6" />,
    title: "Prudência",
    description: "Antecipar-se aos problemas, buscar soluções antes de eventuais falhas."
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Educação",
    description: "Apurados sentidos de Respeito, Urbanidade, Meio Ambiente e Civilidade, aliada à capacitação e desenvolvimento."
  }
];

export default function ValuesGridSection() {
  return (
    <section className="bg-[#0a192f] text-white py-24 px-6 relative overflow-hidden" id="valores">
      <div className="container mx-auto max-w-[900px] relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-medium text-white">
            Nossos Valores <span className="font-light opacity-80">(LIVAPE)</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-3 gap-6">
          {values.map((val, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-white/20 rounded-2xl p-8 hover:bg-white/5 transition-colors duration-300 flex flex-col items-start gap-4"
            >
              <div className="text-white opacity-90">
                {val.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{val.title}</h3>
                <p className="text-xs text-white/70 leading-relaxed font-light">
                  {val.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

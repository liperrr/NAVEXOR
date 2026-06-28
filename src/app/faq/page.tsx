"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { pinhoFadeInLeft, pinhoFadeInRight, pinhoStaggerContainer, pinhoStaggerItem, pinhoFadeInUp } from "@/utils/animations";

const faqData = [
  {
    question: "Comprei uma encomenda na internet de outro país e ainda não chegou. Diz estar para avaliação aduaneira. O que fazer?",
    answer: "Entrar em contato com o SAC da empresa de remessa expressa. Se for remessa pelo Correios, neste caso entrar em contato com o setor de 'Importa fácil'. Geralmente esta situação acontece quando a Receita Federal está solicitando mais informações acerca da importação para correta identificação da mercadoria para posterior tributação."
  },
  {
    question: "O que é uma alfândega?",
    answer: "Alfândega é a repartição pública responsável pelo controle do movimento de entradas e saídas de mercadorias em um país."
  },
  {
    question: "Pra que serve a Licença de Importação?",
    answer: "A Licença de Importação é um documento eletrônico que consolida as informações da operação comercial e atua como uma autorização prévia."
  },
  {
    question: "O que é exportação?",
    answer: "Exportação é a saída de mercadorias ou serviços do território nacional com destino a outros países."
  },
  {
    question: "O que é classificação fiscal da mercadoria?",
    answer: "A classificação fiscal (NCM) é um código numérico que identifica a natureza da mercadoria e determina os tributos aplicáveis."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-white pt-32">
      {/* FAQ Section */}
      <div className="container mx-auto max-w-[1100px] px-6 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left Column - Title & Description */}
          <motion.div 
            variants={pinhoFadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-4"
          >
            <div className="sticky top-32">
              <h1 className="text-[36px] md:text-[44px] font-medium text-[#1f1f1f] leading-[1.1] tracking-tight mb-6">
                Perguntas<br />Frequentes
              </h1>
              <p className="text-[15px] text-[#5f5f5f] leading-relaxed max-w-[280px]">
                Consulte nossa enciclopédia online e tire suas dúvidas agora mesmo. Descubra até mesmo as respostas para as perguntas que você nem havia pensado em fazer.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Accordion */}
          <motion.div 
            variants={pinhoStaggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-8 pt-4"
          >
            <div className="flex flex-col">
              <div className="border-t border-dashed border-gray-300 w-full" />
              {faqData.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <motion.div 
                    variants={pinhoStaggerItem}
                    key={index} 
                    className="border-b border-dashed border-gray-300"
                  >
                    <button 
                      onClick={() => toggleAccordion(index)}
                      className="w-full py-6 flex items-center justify-between text-left group"
                    >
                      <h3 className={`text-[15px] pr-8 font-medium transition-colors ${isOpen ? 'text-[#1f1f1f]' : 'text-[#333333] group-hover:text-[#1f1f1f]'}`}>
                        {item.question}
                      </h3>
                      <div className="shrink-0 w-[18px] h-[18px] rounded-full bg-[#001f3f] flex items-center justify-center text-white">
                        <span className="text-[12px] font-bold leading-none mb-[2px]">
                          {isOpen ? '-' : '+'}
                        </span>
                      </div>
                    </button>
                    
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pb-8 text-[14px] text-[#777777] leading-relaxed pr-8">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
          
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="w-full bg-[#001f3f] py-24 relative overflow-hidden">
        <motion.div 
          variants={pinhoFadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="container mx-auto max-w-[800px] px-6 text-center text-white relative z-10"
        >
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] mb-4 block">
            CONTATO
          </span>
          <h2 className="text-[36px] md:text-[44px] font-medium mb-6 tracking-tight">
            Mais perguntas?
          </h2>
          <p className="text-[15px] leading-relaxed opacity-80 mb-10 max-w-[600px] mx-auto">
            Envie sua pergunta para nós agora mesmo, será um prazer atende-lo. Sua pergunta pode fazer parte da nossa enciclopédia.
          </p>
          <Link 
            href="/contato" 
            className="inline-flex items-center justify-center bg-white text-[#001f3f] px-8 py-3.5 rounded-full text-[13px] font-bold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Entre em contato
          </Link>
        </motion.div>
      </div>
    </main>
  );
}

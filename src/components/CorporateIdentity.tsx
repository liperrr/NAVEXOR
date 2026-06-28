"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, Target, Globe, Award, ShieldCheck } from "lucide-react";
import { pinhoFadeInUp } from "@/utils/animations";

const tabs = [
  {
    id: "origem",
    label: "A Origem Navexor",
    icon: Compass,
    content: (
      <div className="space-y-6 text-gray-600">
        <p className="text-lg font-medium text-gray-800">
          "Aquele que navega para expandir"
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#f8fafc] p-6 rounded-2xl border border-gray-100">
            <h4 className="font-bold text-[#0a192f] mb-4 flex items-center gap-2">
              <span className="text-[#FFC107]">1.</span> NAV
            </h4>
            <ul className="space-y-3 text-sm">
              <li>• Do latim <em>navis</em> = "navio"</li>
              <li>• Palavra "nave" = transporte, deslocamento</li>
              <li>• Relação com navegação e comércio marítimo</li>
              <li>• Ideia de movimento, expansão e logística</li>
            </ul>
          </div>
          <div className="bg-[#f8fafc] p-6 rounded-2xl border border-gray-100">
            <h4 className="font-bold text-[#0a192f] mb-4 flex items-center gap-2">
              <span className="text-[#FFC107]">2.</span> EXOR
            </h4>
            <ul className="space-y-3 text-sm">
              <li>• Prefixo latino <em>ex-</em> = "para fora", "expansão"</li>
              <li>• Som fonético semelhante a "export"</li>
              <li>• Terminação forte em "-or", comum em corporações globais</li>
              <li>• Passa sensação de força, liderança e ação</li>
            </ul>
          </div>
        </div>
        <p className="text-sm italic mt-4">
          Para a Navexor Global Trade, nosso nome é a fundação da nossa promessa: expansão constante através da excelência em navegação e comércio global.
        </p>
      </div>
    ),
  },
  {
    id: "posicionamento",
    label: "Posicionamento Estratégico",
    icon: Target,
    content: (
      <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
        <p>
          A Navexor Global Trade se posiciona como uma parceira estratégica para empresas que desejam acessar, desenvolver e expandir mercados internacionais.
        </p>
        <p>
          Combinamos conhecimento comercial, experiência financeira e relacionamento global para estruturar operações de exportação de forma segura, eficiente e alinhada às exigências dos mercados internacionais.
        </p>
        <p>
          Mais do que intermediar negócios, atuamos na construção de pontes comerciais entre o Brasil e o mundo, conectando oportunidades, reduzindo riscos e promovendo relações sustentáveis de longo prazo.
        </p>
        <p className="font-medium text-[#0a192f]">
          Nosso diferencial está na capacidade de unir inteligência de mercado, expertise em operações internacionais e uma atuação próxima aos nossos parceiros, oferecendo soluções que simplificam o comércio exterior e geram resultados consistentes.
        </p>
      </div>
    ),
  },
  {
    id: "cultura",
    label: "Cultura Organizacional",
    icon: Globe,
    content: (
      <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
        <p className="font-bold text-[#0a192f]">
          Nossa cultura é fundamentada na ética, na mentalidade global e no espírito empreendedor.
        </p>
        <p>
          Valorizamos relações de confiança, excelência na execução, aprendizado contínuo e compromisso com resultados. Acreditamos que o sucesso sustentável no comércio internacional é construído por meio da colaboração, da transparência e da geração de valor para todos os envolvidos na cadeia de negócios.
        </p>
        <p>
          Atuamos com agilidade para identificar oportunidades, disciplina para executar operações e responsabilidade para construir relacionamentos duradouros.
        </p>
      </div>
    ),
  },
  {
    id: "principios",
    label: "Princípios de Liderança",
    icon: Award,
    content: (
      <div className="space-y-6 text-gray-600 text-sm md:text-base">
        <p>
          Os líderes da Navexor conduzem a empresa com base em princípios que orientam nossas decisões e fortalecem nossa atuação internacional:
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Integridade em todas as relações comerciais",
            "Visão estratégica com perspectiva global",
            "Foco na criação de valor sustentável",
            "Compromisso com resultados consistentes",
            "Excelência na execução das operações",
            "Valorização de parcerias de longo prazo",
            "Responsabilidade, transparência e respeito às pessoas",
            "Mentalidade empreendedora e inovação contínua",
          ].map((principio, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <div className="mt-1 w-2 h-2 rounded-full bg-[#FFC107] flex-shrink-0" />
              <span>{principio}</span>
            </li>
          ))}
        </ul>
        <p className="italic text-sm">
          Esses princípios refletem nossa forma de atuar e sustentam o desenvolvimento da Navexor como uma empresa preparada para competir e crescer em um ambiente global cada vez mais dinâmico.
        </p>
      </div>
    ),
  },
  {
    id: "compliance",
    label: "Compliance e Proteção de Dados",
    icon: ShieldCheck,
    content: (
      <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
        <p>
          A Navexor Global Trade conduz suas atividades com base nos mais elevados padrões de ética, integridade e conformidade regulatória.
        </p>
        <p>
          Nossos processos são estruturados para promover transparência, segurança operacional e aderência às legislações aplicáveis ao comércio internacional. Mantemos controles internos voltados à prevenção de irregularidades, mitigação de riscos e fortalecimento da governança corporativa.
        </p>
        <div className="bg-[#eaf8fb] p-6 rounded-2xl border border-blue-100 mt-6">
          <p className="font-medium text-[#0a192f]">
            No tratamento de informações, observamos rigorosamente os princípios da Lei Geral de Proteção de Dados Pessoais (LGPD), garantindo que dados pessoais e corporativos sejam manipulados com absoluta segurança e confidencialidade.
          </p>
        </div>
      </div>
    ),
  },
];

export default function CorporateIdentity() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <section className="py-20 bg-[#fafafa] border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <motion.div 
          variants={pinhoFadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-light text-[#0a192f] mb-4">
            Identidade Institucional
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Conheça os fundamentos, a cultura e os princípios que guiam nossas operações globais todos os dias.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 bg-white p-8 rounded-[32px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100">
          
          {/* Tab Navigation */}
          <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 lg:w-1/3 hide-scrollbar">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-4 px-6 py-4 rounded-2xl text-left transition-all duration-300 min-w-[240px] lg:min-w-0 ${
                    isActive 
                      ? "bg-[#0a192f] text-white shadow-lg transform lg:translate-x-4" 
                      : "bg-transparent text-gray-500 hover:bg-gray-50 hover:text-[#0a192f]"
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? "text-[#FFC107]" : "text-gray-400"}`} />
                  <span className="font-medium whitespace-nowrap lg:whitespace-normal">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="lg:w-2/3 lg:pl-8 flex items-center min-h-[400px]">
            <AnimatePresence mode="wait">
              {tabs.map((tab) => (
                tab.id === activeTab && (
                  <motion.div
                    key={tab.id}
                    initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="w-full"
                  >
                    {tab.content}
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}

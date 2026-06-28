"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import CasesGridSection from "@/components/CasesGridSection";
import ValuesGridSection from "@/components/ValuesGridSection";
import PremiumCTASection from "@/components/PremiumCTASection";

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero Azul Escuro */}
      <section className="bg-[#001f3f] pt-40 pb-32 px-6">
        <div className="container mx-auto max-w-[1200px]">
          <div className="flex flex-col lg:flex-row gap-12 items-start justify-between">
            <motion.div 
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full lg:w-3/5"
            >
              <span className="text-sm font-bold uppercase tracking-widest text-white/70 mb-4 block">
                SOBRE A NAVEXOR
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-2">
                Logística Global fácil e acessível
              </h1>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight mb-8">
                para qualquer um.
              </h2>
            </motion.div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8 items-end justify-between mt-4">
            <motion.div 
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="w-full lg:w-3/5"
            >
              <p className="text-sm md:text-base text-white/90 leading-relaxed font-medium">
                Oferecemos tudo que a sua empresa precisa para importar ou exportar, desde o transporte internacional até a liberação aduaneira. Nosso time de especialistas trabalha com você para atingir seus objetivos, e nossa plataforma online organiza tudo em tempo real.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="w-full lg:w-auto"
            >
              <Link 
                href="/contato"
                className="inline-block bg-[#c5a059] text-white font-bold text-sm px-8 py-4 rounded-full hover:bg-white hover:text-[#001f3f] transition-colors duration-300 whitespace-nowrap shadow-lg"
              >
                Solicite uma cotação
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Navegação em Pílula Flutuante */}
      <div className="relative z-10 -mt-8 flex justify-center px-6">
        <div className="bg-white shadow-2xl rounded-full flex flex-wrap items-center justify-center px-2 py-2 md:px-8 md:py-4 gap-4 md:gap-16 w-full max-w-[900px]">
          <a href="#quem-somos" className="text-xs md:text-sm font-bold text-[#c5a059] uppercase tracking-wider border-b-2 border-[#c5a059] pb-1">Quem somos</a>
          <a href="#cases" className="text-xs md:text-sm font-bold text-gray-500 uppercase tracking-wider hover:text-[#001f3f] transition-colors">Cases</a>
          <a href="#nosso-time" className="text-xs md:text-sm font-bold text-gray-500 uppercase tracking-wider hover:text-[#001f3f] transition-colors">Nosso time</a>
          <a href="#missao" className="text-xs md:text-sm font-bold text-gray-500 uppercase tracking-wider hover:text-[#001f3f] transition-colors">Missão</a>
        </div>
      </div>

      {/* Quem Somos */}
      <section id="quem-somos" className="py-32 px-6">
        <div className="container mx-auto max-w-[1200px] flex flex-col lg:flex-row gap-20">
          
          <motion.div 
            initial={{ opacity: 0, y: 80, willChange: "opacity, transform" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/2"
          >
            <span className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6 block">
              QUEM SOMOS
            </span>
            <h2 className="text-4xl lg:text-5xl font-light text-black leading-tight">
              Excelência Logística <br/>
              é o nosso negócio desde <br/>
              <span className="font-medium">1999</span>
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 100, willChange: "opacity, transform" }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="w-full lg:w-1/2 flex flex-col gap-10"
          >
            <div className="text-gray-600 text-sm leading-relaxed space-y-6">
              <p>Nossa empresa tem décadas de conhecimento do sistema aduaneiro brasileiro, o sistema mais complexo do mundo.</p>
              <p><strong>São mais de 25 anos fazendo história</strong>, participando de projetos grandes e ambiciosos como a construção de infraestruturas globais, inovação em portos internacionais e muito mais.</p>
            </div>
            
            {/* 2x2 Grid de Imagens */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <Image src="/images/transport-logistics-concept.jpg" alt="Logística" fill quality={100} className="object-cover" />
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <Image src="/images/aerial-view-container-cargo-ship-sea.jpg" alt="Navio" fill quality={100} className="object-cover" />
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <Image src="/images/port_4k.png" alt="Porto" fill quality={100} className="object-cover" />
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <Image src="/images/jumbo-jet-flying-sky.jpg" alt="Avião" fill quality={100} className="object-cover" />
              </div>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* Cases Section */}
      <div id="cases">
        <CasesGridSection />
      </div>

      {/* Missão e Time */}
      <section id="missao" className="py-32 px-6 bg-white">
        <div className="container mx-auto max-w-[1000px]">
          
          <motion.h2 
            initial={{ opacity: 0, x: -100, willChange: "opacity, transform" }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl font-medium text-black mb-12"
          >
            Nossa Missão
          </motion.h2>
          
          <div className="border-t border-b border-gray-200 divide-y divide-gray-200 overflow-hidden">
            <motion.div 
              initial={{ opacity: 0, y: 80, willChange: "opacity, transform" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col md:flex-row py-8 gap-4 md:gap-12 items-start md:items-center"
            >
              <div className="w-full md:w-32 shrink-0">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Propósito</span>
              </div>
              <div>
                <p className="text-base text-black font-medium">Proporcionar Logística Integrada, Confiável e Previsível</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 80, willChange: "opacity, transform" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="flex flex-col md:flex-row py-8 gap-4 md:gap-12 items-start md:items-center"
            >
              <div className="w-full md:w-32 shrink-0">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Visão</span>
              </div>
              <div>
                <p className="text-base text-black font-medium">Integrar a cadeia logística internacional</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 80, willChange: "opacity, transform" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="flex flex-col md:flex-row py-8 gap-4 md:gap-12 items-start md:items-center"
            >
              <div className="w-full md:w-32 shrink-0">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Política</span>
              </div>
              <div>
                <p className="text-base text-black font-medium">Prestar sempre a melhor operação logística, segura e integrada, de forma a encantar os clientes pela excelência dos resultados.</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Container mais largo para os Cards (Estilo Google) */}
        <div className="container mx-auto max-w-[1400px]">
          {/* Sócios Diretores (Estilo Antigravity) */}
          <div id="nosso-time" className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mt-24">
            
            {/* Davi (Camiseta preta) */}
            <div className="flex flex-col group">
              <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden bg-[#999999]">
                <Image src="/images/socio-davi-v2.jpg" alt="Davi - Sócio Diretor" fill className="object-cover object-[center_15%]" />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent opacity-90" />
                
                {/* Top Left Tag (Pill shape attached to left) */}
                <div className="absolute top-8 left-0 bg-white px-5 py-2.5 rounded-r-full flex items-center gap-2 shadow-sm">
                  <span className="text-[8px] text-black">▶</span>
                  <span className="text-[13px] font-bold text-[#333333] tracking-tight">Liderança Executiva</span>
                </div>

                {/* Bottom Left Title */}
                <div className="absolute bottom-10 left-10">
                  <h3 className="text-[36px] md:text-[46px] font-medium text-white leading-[1.05] tracking-tight drop-shadow-sm">
                    Sócio<br />Diretor
                  </h3>
                </div>

                {/* Bottom Right Play Button */}
                <div className="absolute bottom-10 right-10 w-[52px] h-[52px] bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:bg-white/50 transition-colors">
                  <svg className="w-5 h-5 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                </div>
              </div>

              {/* Content Below Card */}
              <div className="flex justify-between items-start pt-6 px-2">
                <div className="flex flex-col">
                  <h4 className="text-[17px] font-bold text-[#1f1f1f] mb-1">Davi</h4>
                  <p className="text-[15px] text-[#5f5f5f] max-w-[340px] leading-relaxed mb-6">
                    Liderando a expansão da Navexor com visão estratégica e excelência em comércio exterior.
                  </p>
                  <a href="#" className="text-[14px] text-[#5f5f5f] hover:text-[#1f1f1f] transition-colors flex items-center gap-1 font-medium">
                    Ver perfil <span className="text-[10px] font-bold mt-[2px]">&gt;</span>
                  </a>
                </div>
                {/* Navigation Buttons */}
                <div className="flex gap-2 shrink-0 pt-1">
                  <button className="w-10 h-10 rounded-full bg-[#f4f4f4] flex items-center justify-center text-[#888888] hover:bg-[#e8e8e8] hover:text-[#333333] transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-[#f4f4f4] flex items-center justify-center text-[#888888] hover:bg-[#e8e8e8] hover:text-[#333333] transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Leandro (Terno) */}
            <div className="flex flex-col group">
              <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden bg-[#999999]">
                <Image src="/images/socio-1.jpg" alt="Leandro - Sócio Diretor" fill className="object-cover object-[center_15%]" />
                
                {/* Gradient overlay just for the text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent opacity-90" />
                
                {/* Top Left Tag (Pill shape attached to left) */}
                <div className="absolute top-8 left-0 bg-white px-5 py-2.5 rounded-r-full flex items-center gap-2 shadow-sm">
                  <span className="text-[8px] text-black">▶</span>
                  <span className="text-[13px] font-bold text-[#333333] tracking-tight">Liderança Executiva</span>
                </div>

                {/* Bottom Left Title */}
                <div className="absolute bottom-10 left-10">
                  <h3 className="text-[36px] md:text-[46px] font-medium text-white leading-[1.05] tracking-tight drop-shadow-sm">
                    Sócio<br />Diretor
                  </h3>
                </div>

                {/* Bottom Right Play Button */}
                <div className="absolute bottom-10 right-10 w-[52px] h-[52px] bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:bg-white/50 transition-colors">
                  <svg className="w-5 h-5 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                </div>
              </div>

              {/* Content Below Card */}
              <div className="flex justify-between items-start pt-6 px-2">
                <div className="flex flex-col">
                  <h4 className="text-[17px] font-bold text-[#1f1f1f] mb-1">Leandro</h4>
                  <p className="text-[15px] text-[#5f5f5f] max-w-[340px] leading-relaxed mb-6">
                    Gestão logística integrada e inovação focada na eficiência de resultados para os clientes.
                  </p>
                  <a href="#" className="text-[14px] text-[#5f5f5f] hover:text-[#1f1f1f] transition-colors flex items-center gap-1 font-medium">
                    Ver perfil <span className="text-[10px] font-bold mt-[2px]">&gt;</span>
                  </a>
                </div>
                {/* Navigation Buttons */}
                <div className="flex gap-2 shrink-0 pt-1">
                  <button className="w-10 h-10 rounded-full bg-[#f4f4f4] flex items-center justify-center text-[#888888] hover:bg-[#e8e8e8] hover:text-[#333333] transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-[#f4f4f4] flex items-center justify-center text-[#888888] hover:bg-[#e8e8e8] hover:text-[#333333] transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Valores */}
      <ValuesGridSection />

      {/* CTA Section */}
      <PremiumCTASection />
      
    </main>
  );
}

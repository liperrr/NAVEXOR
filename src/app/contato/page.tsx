"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Footer from "@/components/ContactFooter"; // Assumindo que o Footer existe ou será omitido se a Home já tem

export default function ContatoPage() {
  return (
    <main className="min-h-screen bg-white pt-24 lg:pt-32">
      
      {/* Seção Principal: Formulário e Imagem */}
      <div className="flex flex-col lg:flex-row max-w-[1600px] mx-auto min-h-[800px]">
        
        {/* Coluna Esquerda: Formulário */}
        <div className="w-full lg:w-1/2 p-8 md:p-16 lg:pr-24 lg:pl-16 flex flex-col justify-center">
          <span className="text-xs font-bold uppercase tracking-widest text-black mb-4 block">
            CONTATO
          </span>
          <h1 className="text-4xl md:text-5xl font-medium text-black leading-tight mb-2">
            Entre em contato
          </h1>
          <p className="text-gray-500 mb-10 text-sm">
            Entre em contato pelo formulário abaixo, logo iremos atendê-lo. Send us a message.
          </p>

          <form className="flex flex-col gap-5 w-full max-w-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-[11px] font-bold text-black uppercase mb-1">Nome</label>
                <input type="text" className="w-full bg-transparent border border-gray-300 rounded-full px-5 py-3 text-sm focus:outline-none focus:border-[#c5a059] transition-colors" placeholder="Nome" />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-black uppercase mb-1">Sobrenome</label>
                <input type="text" className="w-full bg-transparent border border-gray-300 rounded-full px-5 py-3 text-sm focus:outline-none focus:border-[#c5a059] transition-colors" placeholder="Sobrenome" />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-black uppercase mb-1">E-mail</label>
              <input type="email" className="w-full bg-transparent border border-gray-300 rounded-full px-5 py-3 text-sm focus:outline-none focus:border-[#c5a059] transition-colors" placeholder="E-mail" />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-black uppercase mb-1">Nome da Empresa</label>
              <input type="text" className="w-full bg-transparent border border-gray-300 rounded-full px-5 py-3 text-sm focus:outline-none focus:border-[#c5a059] transition-colors" placeholder="Nome da Empresa" />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-black uppercase mb-1">Telefone</label>
              <input type="tel" className="w-full bg-transparent border border-gray-300 rounded-full px-5 py-3 text-sm focus:outline-none focus:border-[#c5a059] transition-colors" placeholder="Telefone" />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-black uppercase mb-1">Sobre qual tema gostaria de tratar?</label>
              <select className="w-full bg-transparent border border-gray-300 rounded-full px-5 py-3 text-sm focus:outline-none focus:border-[#c5a059] transition-colors appearance-none text-gray-500">
                <option>Consultoria</option>
                <option>Cotação de Frete</option>
                <option>Desembaraço</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-black uppercase mb-1">Tem alguma dúvida, sugestão ou reclamação?</label>
              <textarea rows={4} className="w-full bg-transparent border border-gray-300 rounded-3xl px-5 py-4 text-sm focus:outline-none focus:border-[#c5a059] transition-colors resize-none" placeholder="Descreva"></textarea>
            </div>

            <div className="mt-2">
              <label className="block text-[11px] font-bold text-black uppercase mb-2">Concorda em receber outras comunicações</label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#001f3f] focus:ring-[#001f3f]" />
                <span className="text-sm text-gray-700">Eu concordo em receber outras comunicações da NAVEXOR.</span>
              </label>
            </div>

            <button type="button" className="w-full bg-[#001f3f] text-white font-bold text-sm py-4 rounded-full hover:bg-[#c5a059] transition-colors mt-2">
              Enviar Mensagem
            </button>

            <p className="text-[11px] text-gray-500 leading-relaxed mt-4">
              Ao clicar em <strong>"enviar"</strong>, você concorda em permitir que a NAVEXOR armazene e processe as informações pessoais enviadas acima para fornecer o conteúdo solicitado.
            </p>

            <div className="flex flex-col md:flex-row gap-12 mt-12 pt-8 border-t border-gray-100">
              <div>
                <h4 className="font-bold text-black text-sm mb-1">Endereço</h4>
                <p className="text-sm text-gray-600">Av. Logística Premium, 1000 - Andar 15</p>
                <p className="text-sm text-black font-bold mt-1">+55 11 4000-0000</p>
              </div>
              <div>
                <h4 className="font-bold text-black text-sm mb-1">Email</h4>
                <p className="text-sm text-gray-600">contato@navexor.com.br</p>
              </div>
            </div>
          </form>
        </div>

        {/* Coluna Direita: Imagem */}
        <div className="w-full lg:w-1/2 relative min-h-[500px] lg:min-h-full rounded-tl-[60px] overflow-hidden ml-4 lg:ml-0 mt-8 lg:mt-0">
          <Image 
            src="/images/vertical-shot-old-ship-lake-colorful-sky-sunset.jpg" 
            alt="Logística Portuária" 
            fill 
            quality={100}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          {/* Adorno visual semelhante ao da referência, mas nas cores Navexor */}
          <div className="absolute bottom-0 left-0 w-full h-[30%]">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full h-full opacity-90">
              <path d="M0,50 Q25,20 50,60 T100,40 L100,100 L0,100 Z" fill="#001f3f" />
              <path d="M0,70 Q30,50 60,80 T100,60 L100,100 L0,100 Z" fill="#c5a059" />
            </svg>
          </div>
        </div>

      </div>

      {/* Seção: Nossas Sedes */}
      <section className="bg-[#001f3f] py-24 px-6 mt-16">
        <div className="container mx-auto max-w-[1200px]">
          <div className="text-center mb-16">
            <span className="text-sm font-bold uppercase tracking-widest text-[#c5a059] mb-4 block">
              NOSSAS SEDES
            </span>
            <h2 className="text-4xl md:text-5xl font-medium text-white leading-tight">
              Conheça nossas sedes
            </h2>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden group">
                <Image src="/images/global-logistics-transportation-network.jpg" alt="Sede São Paulo" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover brightness-50 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <h3 className="text-white font-bold text-xl uppercase">SÃO PAULO</h3>
                  <p className="text-white/90 text-sm font-medium leading-relaxed">
                    Coordenamos o transporte global com parceiros estratégicos, proporcionando eficiência em custos e rotas para atender suas operações.
                  </p>
                </div>
              </div>

              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden group">
                <Image src="/images/navexor_hero_port_1781468483562.png" alt="Sede Paranaguá" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover brightness-50 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <h3 className="text-white font-bold text-xl uppercase">PARANAGUÁ</h3>
                  <p className="text-white/90 text-sm font-medium leading-relaxed">
                    Coordenamos o transporte global com parceiros estratégicos, proporcionando eficiência em custos e rotas para atender suas operações.
                  </p>
                </div>
              </div>

              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden group">
                <Image src="/images/aerial-view-container-cargo-ship-sea.jpg" alt="Sede Manaus" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover brightness-50 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <h3 className="text-white font-bold text-xl uppercase">MANAUS</h3>
                  <p className="text-white/90 text-sm font-medium leading-relaxed">
                    Coordenamos o transporte global com parceiros estratégicos, proporcionando eficiência em custos e rotas para atender suas operações.
                  </p>
                </div>
              </div>

            </div>

            {/* Setas (Apenas visuais para replicar o design) */}
            <button className="absolute -left-12 top-1/2 -translate-y-1/2 text-white/50 hover:text-white hidden xl:block">
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button className="absolute -right-12 top-1/2 -translate-y-1/2 text-white/50 hover:text-white hidden xl:block">
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Plane, Anchor, Clock } from "lucide-react";

export default function FreightDetailsSection() {
  return (
    <div className="w-full bg-white pb-32">
      
      {/* Transporte Aéreo */}
      <section className="container mx-auto max-w-[1200px] px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-10">
          <div className="max-w-xl">
            <span className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4 block">
              VISIBILIDADE PONTA A PONTA
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-black leading-tight">
              Transporte aéreo <br/>
              <span className="font-medium">internacional</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-gray-600 text-sm font-medium leading-relaxed">
              Com um processo todo feito em um único fornecedor, você não precisa se preocupar com janelas de programação de coleta nos portos. Suas cargas são rastreadas com segurança e transparência.
            </p>
          </div>
        </div>

        <div className="relative w-full h-[500px] rounded-3xl overflow-hidden group">
          <Image 
            src="/images/pexels-wolfgang-weiser-467045605-30720850.jpg" 
            alt="Transporte Aéreo" 
            fill 
            className="object-cover group-hover:scale-105 transition-transform duration-700" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001f3f]/90 via-black/20 to-transparent"></div>
          
          <div className="absolute top-6 left-6 bg-[#28a745] text-white px-4 py-2 rounded-lg flex items-center gap-2">
            <Plane className="w-5 h-5" />
            <span className="font-bold text-sm">Transporte Internacional</span>
          </div>

          <div className="absolute bottom-10 left-10 max-w-2xl">
            <p className="text-white text-sm md:text-base font-medium leading-relaxed">
              Ofertamos soluções para todas as necessidades de frete aéreo, desde produtos como automotivo, moda, saúde, alimentos, até cargas especiais como perecíveis, produtos perigosos e cargas de projeto com o fretamento de aeronaves.
            </p>
          </div>
        </div>
      </section>

      {/* Transporte Marítimo */}
      <section className="container mx-auto max-w-[1200px] px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-10">
          <div className="max-w-xl">
            <span className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4 block">
              VISIBILIDADE PONTA A PONTA
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-black leading-tight">
              Transporte marítimo <br/>
              <span className="font-medium">internacional</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-gray-600 text-sm font-medium leading-relaxed">
              Com um processo todo feito em um único fornecedor, você não precisa se preocupar com janelas de programação de coleta nos portos. Suas cargas são rastreadas com segurança e transparência.
            </p>
          </div>
        </div>

        <div className="relative w-full h-[500px] rounded-3xl overflow-hidden group">
          <Image 
            src="/images/navexor_gal_ship_1782612351887.png" 
            alt="Transporte Marítimo" 
            fill 
            className="object-cover group-hover:scale-105 transition-transform duration-700" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001f3f]/90 via-black/20 to-transparent"></div>
          
          <div className="absolute top-6 left-6 bg-[#001f3f] text-white px-4 py-2 rounded-lg flex items-center gap-2">
            <Anchor className="w-5 h-5" />
            <span className="font-bold text-sm">Transporte Internacional</span>
          </div>

          <div className="absolute bottom-10 left-10 max-w-3xl">
            <p className="text-white text-sm md:text-base font-medium leading-relaxed mb-4">
              Contando com profissionais experientes, altamente qualificados e sólida parceria firmada com todas as grandes companhias de navegação, oferecemos soluções confiáveis para Ofertamos soluções para todas as necessidades de frete aéreo, desde produtos como automotivo, moda, saúde, alimentos, até cargas especiais como perecíveis, produtos perigosos e cargas de projeto com o fretamento de aeronaves.
            </p>
            <p className="text-white text-sm font-bold">
              FCL e LCL e, para sua comodidade, sempre com monitoramento em tempo real de cada embarque por meio do nosso portal online.
            </p>
          </div>
        </div>
      </section>

      {/* Vantagens / Inovação no DNA */}
      <section className="container mx-auto max-w-[1200px] px-6 py-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-16">
          <div className="max-w-xl">
            <span className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4 block">
              VANTAGENS
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-black leading-tight">
              Inovação está no <br/>
              <span className="font-medium">nosso DNA</span>
            </h2>
          </div>
          <div className="max-w-lg">
            <p className="text-gray-600 text-sm font-medium leading-relaxed">
              A NAVEXOR encanta seus clientes unindo experiência e inovação. Pioneira no ramo de desembaraço aduaneiro no Paraná e entre as primeiras do Brasil a ser nomeada pelo presidente Getúlio Vargas. Atualmente conta com sistema próprio de tecnologia para acompanhamento de cargas. Pode confiar, somos especialistas em simplificar o comércio internacional para empresas.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-[#001f3f] rounded-3xl overflow-hidden shadow-lg group">
              <div className="relative h-48 w-full overflow-hidden">
                <Image 
                  src={item === 1 ? "/images/people-working.jpg" : item === 2 ? "/images/transport-logistics-concept.jpg" : "/images/hero-4k-new.jpg"} 
                  alt="Vantagem" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <div className="p-8">
                <h3 className="text-white font-bold text-2xl mb-4">Ganho de tempo</h3>
                <p className="text-white/80 text-sm font-medium leading-relaxed">
                  Fazendo todo o processo com um só fornecedor você ganha o tempo normalmente perdido durante o processo logístico.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

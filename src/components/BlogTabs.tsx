"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import TradingViewAdvancedWidget from "./TradingViewAdvancedWidget";
import TradingViewMiniWidget from "./TradingViewMiniWidget";
import TradingViewMarketOverviewWidget from "./TradingViewMarketOverviewWidget";
import TradingViewTechnicalWidget from "./TradingViewTechnicalWidget";
import TradingViewScreenerWidget from "./TradingViewScreenerWidget";

const TABS = [
  { id: "analises", label: "Análises" },
  { id: "tecnica", label: "Técnica" },
  { id: "graficos", label: "Gráficos" },
];

export default function BlogTabs({ news }: { news: any[] }) {
  const [activeTab, setActiveTab] = useState("analises");

  return (
    <div className="w-full flex flex-col items-center">
      
      {/* Menu de Navegação Secundário (Premium Segmented Control) */}
      <div className="w-full max-w-2xl mx-auto bg-gray-100/80 backdrop-blur-md p-1.5 rounded-2xl md:rounded-full mb-12 flex flex-col md:flex-row items-stretch md:items-center shadow-inner border border-gray-200/50">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative flex-1 py-3 md:py-4 px-2 md:px-6 text-xs md:text-sm font-bold tracking-widest uppercase transition-colors duration-300 rounded-xl md:rounded-full z-10 ${
              activeTab === tab.id 
                ? "text-[#0a192f]" 
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            {activeTab === tab.id && (
              <motion.div 
                layoutId="activeBlogTab" 
                className="absolute inset-0 bg-white rounded-xl md:rounded-full shadow-md border border-gray-100 z-[-1]"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Conteúdo Dinâmico */}
      <div className="w-full min-h-[800px] relative">
          
          {/* TAB: ANÁLISES */}
          <div className={`transition-opacity duration-500 ${activeTab === "analises" ? "opacity-100 relative z-10" : "opacity-0 absolute inset-0 pointer-events-none z-0 hidden"}`}>
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Main Content (Notícias) - 70% */}
              <div className="w-full lg:w-8/12">
                <div className="flex items-center justify-between mb-8 border-b border-gray-200 pb-4">
                  <h2 className="text-2xl font-bold text-[#0a192f]">Últimas Notícias e Análises</h2>
                </div>
                
                {news.length === 0 ? (
                  <div className="text-center py-20 text-gray-500 text-lg">
                    Nenhuma notícia encontrada no momento.
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {news.map((item: any, index: number) => (
                      <a 
                        key={index} 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100"
                      >
                        <div className="relative w-full h-[220px] overflow-hidden bg-gray-100">
                          <Image 
                            src={item.image} 
                            alt={item.title} 
                            fill 
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute top-4 left-4 px-3 py-1 bg-black/70 backdrop-blur-md rounded-full border border-white/10">
                            <span className="text-[10px] font-bold text-white uppercase tracking-wider">
                              {item.category}
                            </span>
                          </div>
                        </div>
                        
                        <div className="p-6 flex flex-col flex-1 justify-between">
                          <div>
                            <span className="text-xs text-gray-400 font-medium tracking-wide mb-2 block">
                              {item.date}
                            </span>
                            <h3 className="text-lg font-bold text-black leading-snug mb-3 group-hover:text-[#2a8335] transition-colors line-clamp-3">
                              {item.title}
                            </h3>
                            <p className="text-sm text-gray-500 leading-relaxed mb-6 line-clamp-3">
                              {item.summary}
                            </p>
                          </div>
                          
                          <div className="flex items-center text-xs font-bold text-black tracking-widest uppercase group-hover:text-[#2a8335] transition-colors mt-auto pt-4 border-t border-gray-100">
                            Ler Notícia 
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Sidebar (Market Overview) - 30% */}
              <div className="w-full lg:w-4/12">
                <div className="sticky top-24 bg-white rounded-3xl p-6 shadow-lg border border-gray-100 h-[800px] flex flex-col">
                  <h3 className="text-sm font-bold text-gray-800 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                    Mercados Ao Vivo
                  </h3>
                  <div className="flex-grow w-full">
                    <TradingViewMarketOverviewWidget />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TAB: TÉCNICA */}
          <div className={`transition-opacity duration-500 ${activeTab === "tecnica" ? "opacity-100 relative z-10" : "opacity-0 absolute inset-0 pointer-events-none z-0 hidden"}`}>
            <div className="flex flex-col gap-12">
              <div className="flex items-center justify-between mb-2 border-b border-gray-200 pb-4">
                <h2 className="text-2xl font-bold text-[#0a192f]">Resumo Técnico por Ativo</h2>
              </div>
              
              {/* Technical Gauges Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-100">
                  <h3 className="text-xs font-bold text-gray-400 uppercase text-center mb-2">Ibovespa (IBOV)</h3>
                  <TradingViewTechnicalWidget symbol="BMFBOVESPA:IBOV" height={350} />
                </div>
                <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-100">
                  <h3 className="text-xs font-bold text-gray-400 uppercase text-center mb-2">Dólar (USDBRL)</h3>
                  <TradingViewTechnicalWidget symbol="FX_IDC:USDBRL" height={350} />
                </div>
                <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-100">
                  <h3 className="text-xs font-bold text-gray-400 uppercase text-center mb-2">S&P 500</h3>
                  <TradingViewTechnicalWidget symbol="FOREXCOM:SPXUSD" height={350} />
                </div>
                <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-100">
                  <h3 className="text-xs font-bold text-gray-400 uppercase text-center mb-2">Petróleo WTI</h3>
                  <TradingViewTechnicalWidget symbol="NYMEX:CL1!" height={350} />
                </div>
              </div>

              {/* Technical Screener Table */}
              <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100">
                <h3 className="text-lg font-bold text-[#0a192f] mb-6">Tabela de Análise Técnica (Brasil)</h3>
                <div className="w-full h-[600px]">
                  <TradingViewScreenerWidget market="brazil" defaultColumn="moving_averages" height="100%" />
                </div>
              </div>
              
              <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100">
                <h3 className="text-lg font-bold text-[#0a192f] mb-6">Tabela de Análise Técnica (Forex)</h3>
                <div className="w-full h-[600px]">
                  <TradingViewScreenerWidget market="forex" defaultColumn="oscillators" height="100%" />
                </div>
              </div>
            </div>
          </div>

          {/* TAB: GRÁFICOS */}
          <div className={`transition-opacity duration-500 ${activeTab === "graficos" ? "opacity-100 relative z-10" : "opacity-0 absolute inset-0 pointer-events-none z-0 hidden"}`}>
            <div className="flex flex-col gap-12">
              <div className="flex items-center justify-between mb-2 border-b border-gray-200 pb-4">
                <h2 className="text-2xl font-bold text-[#0a192f]">Gráficos Financeiros em Tempo Real</h2>
              </div>
              
              {/* Large Advanced Chart */}
              <div className="w-full bg-white rounded-3xl p-6 shadow-2xl border border-gray-100 h-[700px] flex flex-col">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Gráfico Avançado Interativo</h3>
                <div className="flex-grow w-full">
                  <TradingViewAdvancedWidget />
                </div>
              </div>

              {/* Mini Charts by Category */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-4">
                <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 h-[450px] flex flex-col">
                  <h3 className="text-sm font-bold text-gray-800 uppercase tracking-widest mb-4">Moedas (Forex)</h3>
                  <div className="flex-grow w-full">
                    <TradingViewMiniWidget />
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 h-[450px] flex flex-col">
                  <h3 className="text-sm font-bold text-gray-800 uppercase tracking-widest mb-4">Ações / Índices</h3>
                  <div className="flex-grow w-full">
                    <TradingViewMiniWidget />
                  </div>
                </div>
              </div>
            </div>
          </div>

      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import LiveNewsPlayer from "./LiveNewsPlayer";
import TradingViewMiniWidget from "./TradingViewMiniWidget";
import TradingViewAdvancedWidget from "./TradingViewAdvancedWidget";
import TradingViewCalendarWidget from "./TradingViewCalendarWidget";
import TradingViewHeatmapWidget from "./TradingViewHeatmapWidget";
import { motion, AnimatePresence } from "framer-motion";

const TABS = [
  { id: "noticias", label: "Notícias" },
  { id: "terminal", label: "Terminal Global" },
];

export default function BlogTabs({ news }: { news: any[] }) {
  const [activeTab, setActiveTab] = useState("noticias");

  return (
    <div className="w-full flex flex-col items-center">
      
      {/* Menu de Navegação Secundário (Premium Segmented Control) */}
      <div className="w-full max-w-4xl mx-auto bg-gray-100/80 backdrop-blur-md p-1.5 rounded-2xl md:rounded-full mb-16 flex flex-col md:flex-row items-stretch md:items-center shadow-inner border border-gray-200/50">
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

      {/* Título da Seção Atual */}
      <div className="w-full flex items-center gap-3 mb-8">
        <h2 className="text-2xl font-bold text-[#0a192f] uppercase tracking-wide">
          {TABS.find(t => t.id === activeTab)?.label}
        </h2>
        <div className="h-[1px] flex-grow bg-gray-200"></div>
      </div>

      {/* Conteúdo Dinâmico */}
      <div className="w-full min-h-[600px]">
        <AnimatePresence mode="wait">
          
          {/* TAB: NOTÍCIAS */}
          {activeTab === "noticias" && (
            <motion.div 
              key="noticias"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {news.length === 0 ? (
                <div className="text-center py-20 text-gray-500 text-lg">
                  Nenhuma notícia encontrada no momento. O robô Python está buscando atualizações...
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {news.map((item: any, index: number) => (
                    <a 
                      key={index} 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
                    >
                      <div className="relative w-full h-[260px] overflow-hidden bg-gray-100">
                        <Image 
                          src={item.image} 
                          alt={item.title} 
                          fill 
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4 px-4 py-1.5 bg-black/70 backdrop-blur-md rounded-full border border-white/10">
                          <span className="text-[10px] font-bold text-white uppercase tracking-wider">
                            {item.category}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-8 flex flex-col flex-1 justify-between">
                        <div>
                          <span className="text-xs text-gray-400 font-medium tracking-wide mb-3 block">
                            {item.date}
                          </span>
                          <h3 className="text-xl font-medium text-black leading-snug mb-4 group-hover:text-[#2a8335] transition-colors line-clamp-3">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-500 leading-relaxed mb-6 line-clamp-3">
                            {item.summary}
                          </p>
                        </div>
                        
                        <div className="flex items-center text-xs font-bold text-black tracking-widest uppercase group-hover:text-[#2a8335] transition-colors mt-auto pt-4 border-t border-gray-100">
                          Ler Notícia Completa 
                          <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          )}

          {/* TAB: TERMINAL GLOBAL (O Dashboard Massivo) */}
          {activeTab === "terminal" && (
            <motion.div 
              key="terminal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="w-full flex flex-col gap-6"
            >
              {/* LINHA 1: Visão Geral (100% da largura) */}
              <div className="bg-white rounded-2xl p-4 shadow-xl border border-gray-100 flex flex-col h-[400px]">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Visão Geral do Mercado</h3>
                <div className="w-full flex-grow">
                  <TradingViewMiniWidget />
                </div>
              </div>

              {/* LINHA 2: Gráfico Avançado estilo Investing.com (100% da largura) */}
              <div className="w-full bg-white rounded-2xl p-4 shadow-xl border border-gray-100 flex flex-col h-[750px]">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Plataforma Gráfica Integrada</h3>
                <div className="w-full flex-grow">
                  <TradingViewAdvancedWidget />
                </div>
              </div>

              {/* LINHA 3: TV (25%) + Heatmap (35%) + Calendário (40%) */}
              <div className="w-full flex flex-col lg:flex-row gap-6">
                <div className="w-full lg:w-3/12 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 flex flex-col h-[450px]">
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">TV News Ao Vivo</h3>
                  <div className="w-full h-full rounded-xl overflow-hidden relative group">
                    <div className="absolute top-3 left-3 z-20 flex items-center gap-2 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full">
                      <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                      <span className="text-[10px] font-bold text-white uppercase tracking-wider">Ao Vivo</span>
                    </div>
                    <iframe 
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/live_stream?channel=UCSrZ3GW4E1YY58_nrsPhXcA&autoplay=1&mute=1&origin=http://localhost:3000" 
                      title="Live News" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>

                <div className="w-full lg:w-4/12 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 flex flex-col h-[450px]">
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Força Global de Moedas</h3>
                  <div className="w-full flex-grow">
                    <TradingViewHeatmapWidget />
                  </div>
                </div>

                <div className="w-full lg:w-5/12 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 flex flex-col h-[450px]">
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Calendário Econômico</h3>
                  <div className="w-full flex-grow">
                    <TradingViewCalendarWidget />
                  </div>
                </div>
              </div>

            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}

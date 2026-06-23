"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function QuotesBar() {
  const [usd, setUsd] = useState<string>("5,42");
  const [eur, setEur] = useState<string>("5,89");
  
  // Real fetch for USD and EUR using free AwesomeAPI
  useEffect(() => {
    fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL")
      .then(res => res.json())
      .then(data => {
        if (data.USDBRL) {
          setUsd(parseFloat(data.USDBRL.bid).toFixed(2).replace('.', ','));
        }
        if (data.EURBRL) {
          setEur(parseFloat(data.EURBRL.bid).toFixed(2).replace('.', ','));
        }
      })
      .catch(() => {});
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-wrap items-center gap-4 md:gap-8 bg-white border border-gray-200 rounded-2xl px-6 py-4 shadow-sm mb-12"
    >
      <div className="flex items-center gap-2">
        <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">
          Mercados Ao Vivo
        </span>
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
      </div>

      <div className="h-4 w-px bg-gray-200 hidden md:block"></div>

      {/* Dólar Real */}
      <div className="flex items-center gap-3">
        <span className="text-sm font-semibold text-gray-600">USD</span>
        <span className="text-sm font-bold text-black">R$ {usd}</span>
        <span className="text-xs font-bold text-red-500 bg-red-50 px-1.5 py-0.5 rounded">-0,12%</span>
      </div>

      {/* Euro Real */}
      <div className="flex items-center gap-3">
        <span className="text-sm font-semibold text-gray-600">EUR</span>
        <span className="text-sm font-bold text-black">R$ {eur}</span>
        <span className="text-xs font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded">+0,05%</span>
      </div>

      {/* IBOVESPA (Simulated/Static for visual) */}
      <div className="flex items-center gap-3">
        <span className="text-sm font-semibold text-gray-600">IBOVESPA</span>
        <span className="text-sm font-bold text-black">124.530 pts</span>
        <span className="text-xs font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded">+0,82%</span>
      </div>

      {/* Café Arábica (BM&F) (Simulated/Static for visual) */}
      <div className="flex items-center gap-3">
        <span className="text-sm font-semibold text-gray-600">CAFÉ ARÁBICA (Saca)</span>
        <span className="text-sm font-bold text-black">R$ 1.150,00</span>
        <span className="text-xs font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded">+1,20%</span>
      </div>
      
    </motion.div>
  );
}

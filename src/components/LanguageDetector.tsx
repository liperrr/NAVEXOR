"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage, Language } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

const worldLanguages = [
  "Detecting your region...",
  "Detectando sua região...",
  "Detectando su región...",
  "Rilevamento della regione...",
  "Détection de votre région...",
  "正在检测您的区域...",
  "お住まいの地域を検出しています...",
  "Идет определение вашего региона...",
  "Region wird erkannt...",
  "جاري تحديد منطقتك..."
];

export default function LanguageDetector() {
  const { setLanguage } = useLanguage();
  const [isVisible, setIsVisible] = useState(true);
  const [detectedLangText, setDetectedLangText] = useState(worldLanguages[0]);

  useEffect(() => {
    let finalLangText = "Detecting your region...";
    let finalLang: Language = "en";

    const savedLang = localStorage.getItem("navexor_lang") as Language;
    if (savedLang) {
      finalLang = savedLang;
    } else {
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith("pt")) finalLang = "pt";
      else if (browserLang.startsWith("es")) finalLang = "es";
      else if (browserLang.startsWith("it")) finalLang = "it";
      else if (browserLang.startsWith("fr")) finalLang = "fr";
      localStorage.setItem("navexor_lang", finalLang);
    }
    
    setLanguage(finalLang);

    if (finalLang === "pt") finalLangText = "Região Detectada: BR";
    else if (finalLang === "es") finalLangText = "Región Detectada: ES/LATAM";
    else if (finalLang === "it") finalLangText = "Regione Rilevata: IT";
    else if (finalLang === "fr") finalLangText = "Région Détectée: FR";
    else finalLangText = "Region Detected: US/Global";

    let index = 0;
    const interval = setInterval(() => {
      setDetectedLangText(worldLanguages[index % worldLanguages.length]);
      index++;
    }, 50); // Pisca ultra-rápido a cada 50ms

    setTimeout(() => {
      clearInterval(interval);
      setDetectedLangText(finalLangText);
    }, 500); // Crava o resultado aos 500ms

    setTimeout(() => {
      setIsVisible(false);
    }, 1000); // Some completamente aos 1000ms (1 segundo)

    return () => clearInterval(interval);
  }, [setLanguage]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 100, scale: 0.9 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed top-28 right-4 md:right-8 z-[9999] bg-[#001f3f]/90 backdrop-blur-xl border border-[#c5a059]/40 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.3)] py-3 px-5 flex items-center gap-4"
        >
          {/* Globo Animado Pequeno */}
          <div className="relative flex items-center justify-center w-8 h-8 shrink-0">
            <div className="absolute inset-0 w-full h-full border-[2px] border-white/10 border-t-[#c5a059] rounded-full animate-spin" />
            <Globe className="w-4 h-4 text-[#c5a059] relative z-10" strokeWidth={2} />
          </div>
          
          <p className="text-white text-[11px] md:text-[13px] tracking-wider uppercase font-medium min-w-[200px] m-0 leading-none flex items-center translate-y-[1px]">
            {detectedLangText}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

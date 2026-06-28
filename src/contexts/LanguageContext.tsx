"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import pt from "@/dictionaries/pt.json";
import en from "@/dictionaries/en.json";
import es from "@/dictionaries/es.json";
import it from "@/dictionaries/it.json";
import fr from "@/dictionaries/fr.json";

const dictionaries: Record<string, any> = { pt, en, es, it, fr };

export type Language = "pt" | "en" | "es" | "it" | "fr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt");
  
  // O LanguageDetector é responsável por rodar na montagem inicial e atualizar isso
  // Aqui apenas deixamos a função de setLanguage disponível.
  
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("navexor_lang", lang);
    }
  };

  const t = (path: string) => {
    const keys = path.split(".");
    let value = dictionaries[language];
    for (const key of keys) {
      if (value && value[key]) {
        value = value[key];
      } else {
        return path; // Retorna a chave se não achar a tradução
      }
    }
    return value as string;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

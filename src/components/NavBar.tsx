"use client";

import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export default function NavBar() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white py-4 shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
      <div className="container mx-auto px-6 flex justify-between items-center max-w-[1530px]">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="Navexor Logo" width={400} height={120} className="h-16 md:h-24 w-auto object-contain" priority />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-2">
          <Link href="/sobre" className="text-[16px] font-light text-black px-5 py-3 relative group">
            {t("nav.sobre")}
            <span className="absolute bottom-2 left-5 right-5 h-[1px] bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Link>
          
          <div className="relative group flex items-center cursor-pointer">
            <Link href="/servicos" className="text-[16px] font-light text-black px-5 py-3 relative flex items-center gap-1">
              {t("nav.servicos")}
              <ChevronDown className="w-4 h-4 text-black" />
              <span className="absolute bottom-2 left-5 right-5 h-[1px] bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
            
            {/* Dropdown Wrapper */}
            <div className="absolute top-[80%] left-0 pt-4 w-56 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 translate-y-2 group-hover:translate-y-0">
              <div className="bg-white shadow-xl py-4 border-t-2 border-[#003366]">
                <Link href="/servicos" className="block px-6 py-2 text-sm font-light text-black hover:text-[#003366] hover:bg-gray-50 transition-colors">Frete Internacional</Link>
                <Link href="/servicos" className="block px-6 py-2 text-sm font-light text-black hover:text-[#003366] hover:bg-gray-50 transition-colors">Desembaraço aduaneiro</Link>
                <Link href="/servicos" className="block px-6 py-2 text-sm font-light text-black hover:text-[#003366] hover:bg-gray-50 transition-colors">Transporte rodoviário</Link>
                <Link href="/servicos" className="block px-6 py-2 text-sm font-light text-black hover:text-[#003366] hover:bg-gray-50 transition-colors">Seguro de carga</Link>
              </div>
            </div>
          </div>

          <div className="relative group flex items-center cursor-pointer">
            <Link href="/conteudo" className="text-[16px] font-light text-black px-5 py-3 relative flex items-center gap-1">
              Conteúdo
              <ChevronDown className="w-4 h-4 text-black" />
              <span className="absolute bottom-2 left-5 right-5 h-[1px] bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
            
            {/* Dropdown Wrapper */}
            <div className="absolute top-[80%] left-0 pt-4 w-56 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 translate-y-2 group-hover:translate-y-0">
              <div className="bg-white shadow-xl py-4 border-t-2 border-[#003366]">
                <Link href="/academia" prefetch={true} className="block px-6 py-2 text-sm font-light text-black hover:text-[#003366] hover:bg-gray-50 transition-colors">Academia Navexor</Link>
                <Link href="/blog" prefetch={true} className="block px-6 py-2 text-sm font-light text-black hover:text-[#003366] hover:bg-gray-50 transition-colors">Blog</Link>
                <Link href="/faq" prefetch={true} className="block px-6 py-2 text-sm font-light text-black hover:text-[#003366] hover:bg-gray-50 transition-colors">Perguntas frequentes</Link>
              </div>
            </div>
          </div>

          <Link href="/trabalhe-conosco" className="text-[16px] font-light text-black px-5 py-3 relative group">
            Trabalhe conosco
            <span className="absolute bottom-2 left-5 right-5 h-[1px] bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Link>
          
          <Link href="/etica-e-conduta" className="text-[16px] font-light text-black px-5 py-3 relative group">
            Ética e Conduta
            <span className="absolute bottom-2 left-5 right-5 h-[1px] bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Link>

          <Link href="/contato" className="text-[16px] font-light text-black px-5 py-3 relative group">
            {t("nav.contato")}
            <span className="absolute bottom-2 left-5 right-5 h-[1px] bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-black p-2 -mr-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4 shadow-xl">
          <Link href="/sobre" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-light text-black">Sobre</Link>
          <Link href="/servicos" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-light text-black">Serviços</Link>
          <Link href="/conteudo" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-light text-black">Conteúdo</Link>
          <Link href="/trabalhe-conosco" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-light text-black">Trabalhe conosco</Link>
          <Link href="/contato" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-light text-black">Contato</Link>
        </div>
      )}
    </header>
  );
}

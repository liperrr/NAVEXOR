"use client";

import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
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
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        isScrolled ? "shadow-md py-4" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="Navexor Logo" width={160} height={50} className="object-contain" priority />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          <a href="#about" className="text-sm font-medium text-gray-700 hover:text-[#FFC107] transition-colors">
            Sobre
          </a>
          
          <div className="relative group flex items-center gap-1 cursor-pointer h-10">
            <span className="text-sm font-medium text-gray-700 group-hover:text-[#FFC107] transition-colors">
              Serviços
            </span>
            <ChevronDown className="w-4 h-4 text-gray-700 group-hover:text-[#FFC107] transition-colors" />
            
            {/* Dropdown Wrapper for invisible bridge */}
            <div className="absolute top-full left-0 pt-4 w-56 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 translate-y-2 group-hover:translate-y-0">
              <div className="bg-white shadow-xl rounded-lg py-4 border border-gray-100">
                <a href="#" className="block px-6 py-2 text-sm text-gray-700 hover:text-[#0a192f] hover:bg-gray-50 transition-colors">Frete Internacional</a>
                <a href="#" className="block px-6 py-2 text-sm text-gray-700 hover:text-[#0a192f] hover:bg-gray-50 transition-colors">Desembaraço aduaneiro</a>
                <a href="#" className="block px-6 py-2 text-sm text-gray-700 hover:text-[#0a192f] hover:bg-gray-50 transition-colors">Transporte rodoviário</a>
                <a href="#" className="block px-6 py-2 text-sm text-gray-700 hover:text-[#0a192f] hover:bg-gray-50 transition-colors">Seguro de carga</a>
              </div>
            </div>
          </div>

          <div className="relative group flex items-center gap-1 cursor-pointer h-10">
            <span className="text-sm font-medium text-gray-700 group-hover:text-[#FFC107] transition-colors">
              Conteúdo
            </span>
            <ChevronDown className="w-4 h-4 text-gray-700 group-hover:text-[#FFC107] transition-colors" />
            {/* Dropdown Wrapper for invisible bridge */}
            <div className="absolute top-full left-0 pt-4 w-56 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 translate-y-2 group-hover:translate-y-0">
              <div className="bg-white shadow-xl rounded-lg py-4 border border-gray-100">
                <a href="#" className="block px-6 py-2 text-sm text-gray-700 hover:text-[#0a192f] hover:bg-gray-50 transition-colors">Academia Navexor</a>
                <a href="#" className="block px-6 py-2 text-sm text-gray-700 hover:text-[#0a192f] hover:bg-gray-50 transition-colors">Blog</a>
                <a href="#" className="block px-6 py-2 text-sm text-gray-700 hover:text-[#0a192f] hover:bg-gray-50 transition-colors">Perguntas frequentes</a>
              </div>
            </div>
          </div>

          <a href="#trabalhe" className="text-sm font-medium text-gray-700 hover:text-[#FFC107] transition-colors">
            Trabalhe conosco
          </a>
          
          <a href="#etica" className="text-sm font-medium text-gray-700 hover:text-[#FFC107] transition-colors">
            Ética e Conduta
          </a>

          <a href="#contato" className="text-sm font-medium text-gray-700 hover:text-[#FFC107] transition-colors">
            Contato
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-gray-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4 shadow-xl">
          <a href="#about" className="text-sm font-medium text-gray-700">Sobre</a>
          <a href="#services" className="text-sm font-medium text-gray-700">Serviços</a>
          <a href="#conteudo" className="text-sm font-medium text-gray-700">Conteúdo</a>
          <a href="#trabalhe" className="text-sm font-medium text-gray-700">Trabalhe conosco</a>
          <a href="#contato" className="text-sm font-medium text-gray-700">Contato</a>
        </div>
      )}
    </header>
  );
}

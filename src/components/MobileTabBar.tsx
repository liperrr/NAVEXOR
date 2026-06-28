"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Package, FileText, Phone } from "lucide-react";

export default function MobileTabBar() {
  const pathname = usePathname();

  const tabs = [
    { name: "Início", href: "/", icon: Home },
    { name: "Serviços", href: "/servicos", icon: Package },
    { name: "Conteúdo", href: "/conteudo", icon: FileText },
    { name: "Contato", href: "/contato", icon: Phone },
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-t border-gray-200 z-[90] pb-safe">
      <nav className="flex justify-around items-center h-16">
        {tabs.map((tab) => {
          const isActive = pathname === tab.href;
          const Icon = tab.icon;
          
          return (
            <Link 
              key={tab.name}
              href={tab.href}
              prefetch={true}
              className="flex flex-col items-center justify-center w-full h-full gap-1"
            >
              <Icon 
                className={`w-6 h-6 transition-all duration-300 ${
                  isActive ? "text-[#001f3f] scale-110 stroke-[2.5]" : "text-gray-400 stroke-2"
                }`} 
              />
              <span 
                className={`text-[10px] font-medium transition-colors duration-300 ${
                  isActive ? "text-[#001f3f]" : "text-gray-400"
                }`}
              >
                {tab.name}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function ContactFooter() {
  return (
    <footer className="bg-[var(--color-navy)] text-white pt-24 pb-12" id="contact">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Vamos conectar o seu negócio ao mercado global
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-md">
              A Navexor é a parceira confiável para empresas que desejam acessar e crescer nos mercados globais.
            </p>
            
            <a href="mailto:contato@navexor.com.br" className="inline-flex items-center gap-2 text-[var(--color-accent)] font-semibold text-xl hover:text-white transition-colors">
              Falar com nossa equipe <ArrowUpRight className="w-6 h-6" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-lg mb-2">Escritório</h4>
                <p className="text-gray-400">Rua Escritor Edison Carneiro, Nº 6<br />Salvador, Bahia, Brazil</p>
              </div>
            </div>
            
            <div className="flex gap-4 mt-4">
              <a href="https://www.linkedin.com/company/navexor-global-trade/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-accent)] transition-colors">
                <LinkedinIcon />
              </a>
              <a href="https://www.instagram.com/navexorbr/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-accent)] transition-colors">
                <InstagramIcon />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© Navexor Global Trade {new Date().getFullYear()}. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

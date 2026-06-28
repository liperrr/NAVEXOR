"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const images = [
  "/images/cargo-ship-sailing-ocean.jpg",
  "/images/aerial-view-cargo-ship-cargo-container-harbor.jpg",
  "/images/cargo-ship-sailing-into-sunset.jpg",
  "/images/cargo-ship-sailing-through-ocean.jpg",
  "/images/pexels-atmadeep-das-1776637129-28247165.jpg",
  "/images/pexels-ericc-31719403.jpg"
];

export default function GalleryMasonrySection() {
  return (
    <section className="bg-white text-black py-24 px-6 overflow-hidden">
      <div className="container mx-auto max-w-[1200px]">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4 block">
              FRETE INTERNACIONAL
            </span>
            <div className="flex flex-col">
              <h2 className="text-4xl md:text-6xl font-medium text-black leading-tight mb-2">
                Excelência Logística
              </h2>
              <div className="flex items-center gap-4">
                <div className="w-16 md:w-32 h-[2px] bg-[#c5a059] shrink-0"></div>
                <h2 className="text-4xl md:text-6xl font-light text-black leading-tight">
                  é o nosso negócio
                </h2>
              </div>
            </div>
            <p className="text-sm md:text-base text-gray-600 mt-6 leading-relaxed font-medium">
              Otimização em transportes de carga. Buscamos constantemente aprimorar os processos de transporte de cargas, uma das partes mais complexas na cadeia logística brasileira.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link 
              href="/contato"
              className="inline-block bg-[#001f3f] text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-full hover:bg-[#c5a059] transition-colors duration-300 whitespace-nowrap"
            >
              Solicite uma cotação
            </Link>
          </motion.div>
        </div>

        {/* Gallery Grid - Exatamente como na referência: 6 imagens lado a lado, a 3ª é a mais larga */}
        <div className="flex justify-center gap-2 md:gap-4 h-[400px] md:h-[634px] w-full">
          {images.map((src, index) => {
            // A lógica exata de larguras baseada na referência
            // Imagens 1, 2, 4, 5, 6 são finas (flex-1 ou largura fixa)
            // Imagem 3 (index 2) é larga (flex-[3.5])
            let widthClass = "flex-1"; // finas
            if (index === 2) {
              widthClass = "flex-[3.5]"; // larga
            }

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative rounded-[2rem] overflow-hidden ${widthClass}`}
              >
                <Image 
                  src={src}
                  alt={`Galeria Logística ${index}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

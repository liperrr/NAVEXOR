"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  "https://www.pinho.com.br/wp-content/uploads/2025/02/Ambev.png",
  "https://www.pinho.com.br/wp-content/uploads/2025/02/Andritz.png",
  "https://www.pinho.com.br/wp-content/uploads/2025/02/Arauco.png",
  "https://www.pinho.com.br/wp-content/uploads/2025/02/Ascensus.png",
  "https://www.pinho.com.br/wp-content/uploads/2025/02/Bel.png",
  "https://www.pinho.com.br/wp-content/uploads/2025/02/Grupo-Petropolis.png",
  "https://www.pinho.com.br/wp-content/uploads/2025/02/Hyndai.png",
  "https://www.pinho.com.br/wp-content/uploads/2025/02/Klabin.png",
  "https://www.pinho.com.br/wp-content/uploads/2025/02/Neoortho.png",
  "https://www.pinho.com.br/wp-content/uploads/2025/02/Perkins.png",
  "https://www.pinho.com.br/wp-content/uploads/2025/02/Volkswagen.png",
  "https://www.pinho.com.br/wp-content/uploads/2025/02/Volvo.png",
];

export default function LogoTicker() {
  return (
    <div className="py-8 bg-white overflow-hidden flex border-b border-gray-100">
      <motion.div
        className="flex gap-14 items-center pr-14"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {/* We duplicate the logos array to create a seamless infinite loop */}
        {[...logos, ...logos].map((logo, index) => (
            <Image
              key={index}
              src={logo}
              alt="Client Logo"
              width={120}
              height={40}
              style={{ width: "auto", height: "auto" }}
              className="h-10 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
        ))}
      </motion.div>
    </div>
  );
}

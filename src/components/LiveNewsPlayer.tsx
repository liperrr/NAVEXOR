"use client";

import { motion } from "framer-motion";

export default function LiveNewsPlayer() {
  return (
    <div className="w-full h-full rounded-3xl overflow-hidden shadow-xl bg-black relative border border-gray-200 group">
      <div className="absolute top-6 left-6 z-10 bg-red-600 text-white text-xs font-bold tracking-widest px-4 py-2 rounded-full flex items-center gap-2 shadow-lg shadow-red-600/30">
        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
        AO VIVO
      </div>
      <iframe 
        className="w-full h-full min-h-[300px] md:min-h-[400px] lg:min-h-[500px]"
        src="https://www.youtube.com/embed/live_stream?channel=UCSrZ3GW4E1YY58_nrsPhXcA&autoplay=1&mute=1&origin=http://localhost:3000" 
        title="Live News" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen
      ></iframe>
    </div>
  );
}

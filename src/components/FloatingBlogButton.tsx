"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function FloatingBlogButton() {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 15, delay: 1 }}
      className="fixed left-0 top-1/2 -translate-y-1/2 z-50"
    >
      <Link href="/blog" className="flex items-center">
        {/* The Discreet Tab */}
        <div className="group flex items-center bg-white/60 backdrop-blur-md hover:bg-white text-gray-400 hover:text-[#2a8335] py-3 px-2.5 rounded-r-xl shadow-[2px_0_15px_rgba(0,0,0,0.03)] hover:shadow-[5px_0_25px_rgba(0,0,0,0.08)] transition-all duration-500 border border-l-0 border-gray-200/50 cursor-pointer">
          
          <div className="flex flex-col items-center">
            {/* Minimalist Newspaper/Document Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/>
              <path d="M18 14h-8"/>
              <path d="M15 18h-5"/>
              <path d="M10 6h8v4h-8V6Z"/>
            </svg>
          </div>

          {/* Sliding Text - Only visible on hover */}
          <div className="overflow-hidden max-w-0 group-hover:max-w-[120px] transition-all duration-500 ease-in-out flex items-center">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase pl-3 pr-1 whitespace-nowrap">
              Blog
            </span>
          </div>

        </div>
      </Link>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import newsData from "@/data/news.json";
import { ArrowRight } from "lucide-react";

export default function HomeBlogSection() {
  // Get only the latest 3 news items
  const latestNews = newsData.slice(0, 3);

  return (
    <section className="bg-white py-32 overflow-hidden border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-[1300px]">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-4 block">
              MERCADO E ATUALIZAÇÕES
            </span>
            <h2 className="text-4xl md:text-5xl font-medium leading-tight text-black">
              Acompanhe as últimas tendências do comércio global
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link 
              href="/blog" 
              className="group inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-navexor-gold transition-colors duration-300"
            >
              Ver Portal de Notícias Completo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestNews.map((news, index) => (
            <motion.article 
              key={news.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="flex flex-col group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                <img 
                  src={news.image} 
                  alt={news.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                  {news.category}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow">
                <div className="text-gray-500 text-sm font-medium mb-3">
                  {news.date}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-black leading-snug mb-3 group-hover:text-navexor-gold transition-colors">
                  <a href={news.link} target="_blank" rel="noopener noreferrer">
                    {news.title}
                  </a>
                </h3>
                <p className="text-gray-600 leading-relaxed line-clamp-3 mb-6 flex-grow">
                  {news.summary}
                </p>
                
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <a 
                    href={news.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-black uppercase tracking-wider group-hover:text-navexor-gold transition-colors"
                  >
                    Ler matéria original
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}

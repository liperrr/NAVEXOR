import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import QuotesBar from '@/components/QuotesBar';

// Fetch local JSON to simulate the static DB updated by Python
async function getNews() {
  const filePath = path.join(process.cwd(), 'src', 'data', 'news.json');
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    return [];
  }
}

export default async function BlogPage() {
  const news = await getNews();

  return (
    <main className="min-h-screen bg-[#f0f2f0] text-black pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-[1300px]">
        
        {/* Header do Blog */}
        <div className="flex flex-col gap-4 mb-16 border-b border-gray-200 pb-12">
          <span className="text-xs font-bold tracking-widest text-[#2a8335] uppercase">
            Radar Global • Navexor
          </span>
          <h1 className="text-5xl md:text-6xl font-light text-black leading-tight">
            Notícias & Tendências
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl font-medium mt-4">
            Acompanhe as últimas atualizações sobre mercados globais, economia, agronegócio e inovações logísticas.
          </p>
        </div>

        {/* Barra de Cotações (Ao Vivo) */}
        <QuotesBar />

        {/* Grid de Notícias */}
        {news.length === 0 ? (
          <div className="text-center py-20 text-gray-500 text-lg">
            Nenhuma notícia encontrada no momento. O robô Python está buscando atualizações...
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item: any, index: number) => (
              <a 
                key={index} 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                <div className="relative w-full h-[260px] overflow-hidden bg-gray-100">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Categoria Flutuante */}
                  <div className="absolute top-4 left-4 px-4 py-1.5 bg-black/70 backdrop-blur-md rounded-full border border-white/10">
                    <span className="text-[10px] font-bold text-white uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-1 justify-between">
                  <div>
                    <span className="text-xs text-gray-400 font-medium tracking-wide mb-3 block">
                      {item.date}
                    </span>
                    <h3 className="text-xl font-medium text-black leading-snug mb-4 group-hover:text-[#2a8335] transition-colors line-clamp-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-6 line-clamp-3">
                      {item.summary}
                    </p>
                  </div>
                  
                  <div className="flex items-center text-xs font-bold text-black tracking-widest uppercase group-hover:text-[#2a8335] transition-colors mt-auto pt-4 border-t border-gray-100">
                    Ler Notícia Completa 
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

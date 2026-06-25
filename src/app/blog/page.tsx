import fs from 'fs';
import path from 'path';
import QuotesBar from '@/components/QuotesBar';
import BlogTabs from '@/components/BlogTabs';

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

        {/* Sistema de Abas (Investing.com style) */}
        <div className="mt-12 mb-24 w-full">
          <BlogTabs news={news} />
        </div>
      </div>
    </main>
  );
}

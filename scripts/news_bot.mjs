import fs from 'fs';
import path from 'path';
import Parser from 'rss-parser';

const parser = new Parser({
  customFields: {
    item: ['media:content', 'description', 'content:encoded']
  },
  requestOptions: {
    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64 AppleWebKit/537.36)' }
  }
});

const FEEDS = [
  { category: 'Economia', url: 'https://g1.globo.com/rss/g1/economia/' },
  { category: 'Agro', url: 'https://g1.globo.com/rss/g1/economia/agronegocios/' },
  { category: 'Agro', url: 'https://www.canalrural.com.br/feed/' }
];

function extractImage(item) {
  if (item.enclosure && item.enclosure.url && item.enclosure.type && item.enclosure.type.includes('image')) {
    return item.enclosure.url;
  }
  if (item['media:content'] && item['media:content'].$) {
    return item['media:content'].$.url;
  }
  const content = item['content:encoded'] || item.content || item.description || '';
  const imgMatch = /<img.*?src=["'](.*?)["']/.exec(content);
  if (imgMatch) {
    return imgMatch[1];
  }
  return null; // NO FALLBACKS!
}

function cleanSummary(text) {
  if (!text) return '';
  let clean = text.replace(/<[^>]*>?/gm, '').trim();
  clean = clean.replace(/&#8211;/g, '-').replace(/&nbsp;/g, ' ');
  if (clean.length > 160) {
    return clean.substring(0, 157) + '...';
  }
  return clean;
}

async function main() {
  console.log('Iniciando Robô de Notícias em Node.js (Sem Imagens Genéricas)...');
  let allNews = [];
  
  for (const feed of FEEDS) {
    console.log(`Buscando feed de ${feed.category} em: ${feed.url}`);
    try {
      // Manual fetch and trim to bypass G1 XML spacing issues
      const response = await fetch(feed.url, {
        headers: { 'User-Agent': 'Mozilla/5.0' }
      });
      let xml = await response.text();
      xml = xml.trim();
      const parsedFeed = await parser.parseString(xml);
      
      let count = 0;
      for (const item of parsedFeed.items) {
        if (count >= 5) break; // Limit per feed
        
        const image = extractImage(item);
        // CRITICAL: Only accept news that actually have a REAL image from the agency
        if (!image) continue;

        const summary = cleanSummary(item.contentSnippet || item.content || item.description);
        
        let dateStr = new Date().toLocaleDateString('pt-BR');
        if (item.pubDate) {
          const dt = new Date(item.pubDate);
          if (!isNaN(dt.getTime())) dateStr = dt.toLocaleDateString('pt-BR');
        }

        if (item.title && !allNews.some(n => n.title === item.title)) {
          allNews.push({
            id: item.link || Math.random().toString(),
            title: item.title,
            link: item.link || '#',
            image,
            summary: summary || 'Clique para ler a matéria completa...',
            category: feed.category,
            date: dateStr
          });
          count++;
        }
      }
    } catch (e) {
      console.error(`Erro ao buscar ${feed.category}:`, e.message);
    }
  }
  
  const mixedNews = [];
  const maxItems = Math.max(...FEEDS.map(() => 5));
  for (let i = 0; i < maxItems; i++) {
    for (let j = 0; j < FEEDS.length; j++) {
      const catNews = allNews.filter(n => n.category === FEEDS[j].category);
      if (catNews[i] && !mixedNews.includes(catNews[i])) mixedNews.push(catNews[i]);
    }
  }
  
  const outputDir = path.join(process.cwd(), 'src', 'data');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  const outputPath = path.join(outputDir, 'news.json');
  fs.writeFileSync(outputPath, JSON.stringify(mixedNews, null, 2), 'utf-8');
  console.log(`Sucesso! ${mixedNews.length} notícias 100% REAIS atualizadas em ${outputPath}.`);
}

main();

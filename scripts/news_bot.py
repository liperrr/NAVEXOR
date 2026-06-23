import feedparser
import json
import os
from bs4 import BeautifulSoup
from datetime import datetime
from time import mktime

# Lista de feeds RSS por categoria
FEEDS = {
    "Agro": "https://g1.globo.com/rss/g1/economia/agronegocios/",
    "Economia": "https://g1.globo.com/rss/g1/economia/",
    "Negócios": "https://www.infomoney.com.br/negocios/feed/",
    "Mercados": "https://br.investing.com/rss/market_overview.rss"
}

def extract_image(entry):
    # Tenta media_content
    if 'media_content' in entry and len(entry.media_content) > 0:
        return entry.media_content[0]['url']
    
    # Tenta enclosure
    if 'enclosures' in entry and len(entry.enclosures) > 0:
        for enc in entry.enclosures:
            if enc.type and 'image' in enc.type or enc.href.endswith(('.jpg', '.png', '.jpeg')):
                return enc.href

    # Tenta buscar na description ou content
    html_content = ""
    if 'content' in entry:
        html_content = entry.content[0].value
    elif 'description' in entry:
        html_content = entry.description
        
    if html_content:
        soup = BeautifulSoup(html_content, 'html.parser')
        img_tag = soup.find('img')
        if img_tag and img_tag.get('src'):
            return img_tag['src']
            
    return "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" # Fallback corporativo

def extract_summary(entry):
    html_content = entry.get('description', '')
    soup = BeautifulSoup(html_content, 'html.parser')
    text = soup.get_text(separator=' ', strip=True)
    if len(text) > 180:
        return text[:177] + "..."
    return text

def parse_feeds():
    all_news = []
    for category, url in FEEDS.items():
        print(f"Buscando feed de {category}: {url}")
        feed = feedparser.parse(url)
        for entry in feed.entries[:8]: # Pega as 8 últimas de cada categoria
            try:
                published_parsed = entry.get('published_parsed')
                if published_parsed:
                    dt = datetime.fromtimestamp(mktime(published_parsed))
                    date_str = dt.strftime("%d/%m/%Y")
                else:
                    date_str = datetime.now().strftime("%d/%m/%Y")
                    
                image = extract_image(entry)
                summary = extract_summary(entry)
                
                if not summary or not entry.get('title'):
                    continue
                    
                news_item = {
                    "id": entry.get('id', entry.link),
                    "title": entry.title,
                    "link": entry.link,
                    "summary": summary,
                    "image": image,
                    "category": category,
                    "date": date_str
                }
                all_news.append(news_item)
            except Exception as e:
                print(f"Erro ao processar notícia: {e}")
                
    return all_news

def main():
    print("Iniciando Bot de Notícias...")
    news = parse_feeds()
    
    # Sort news to mix categories nicely (or just keep them appended)
    # We will just reverse it so the latest from the loops don't dominate the top
    # Or just keep it as is, frontend can sort
    
    output_dir = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "src", "data")
    os.makedirs(output_dir, exist_ok=True)
    
    output_file = os.path.join(output_dir, "news.json")
    
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(news, f, ensure_ascii=False, indent=2)
        
    print(f"Sucesso! {len(news)} notícias salvas em {output_file}")

if __name__ == "__main__":
    main()

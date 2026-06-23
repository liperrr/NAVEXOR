import Parser from 'rss-parser';

const parser = new Parser({
  customFields: {
    item: ['media:content', 'description', 'content:encoded']
  },
  requestOptions: {
    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64 AppleWebKit/537.36)' }
  }
});

async function test() {
  try {
    const response = await fetch('https://g1.globo.com/rss/g1/economia/');
    let xml = await response.text();
    xml = xml.trim();
    const feed = await parser.parseString(xml);
    console.log(`Found ${feed.items.length} items.`);
    if (feed.items.length > 0) {
      const item = feed.items[0];
      console.log('Title:', item.title);
      // Try image extract
      let image = null;
      if (item.enclosure) image = item.enclosure.url;
      else if (item['media:content']) image = item['media:content'].$.url;
      else {
        const content = item['content:encoded'] || item.content || item.description || '';
        const imgMatch = /<img.*?src=["'](.*?)["']/.exec(content);
        if (imgMatch) image = imgMatch[1];
      }
      console.log('Image extracted:', image);
    }
  } catch (e) {
    console.log('Error:', e.message);
  }
}
test();

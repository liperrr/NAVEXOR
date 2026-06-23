async function getShape() {
  try {
    const response = await fetch('https://navexor.com.br/');
    const html = await response.text();
    
    const svgs = html.match(/<svg[^>]*>.*?<\/svg>/gs);
    if (svgs) {
      const masks = svgs.filter(s => s.includes('clipPath') || s.includes('mask'));
      if (masks.length > 0) {
        console.log("FOUND MASK SVG:");
        console.log(masks[0]);
      } else {
        console.log("No SVG mask found in <svg> tags.");
      }
    } else {
      console.log("No SVGs found.");
    }

    // Try finding clip-path CSS
    const cssBlocks = html.match(/clip-path\s*:\s*polygon\([^)]+\)/g);
    if (cssBlocks) {
      console.log("FOUND CSS POLYGON:");
      console.log(cssBlocks[0]);
    }
  } catch (e) {
    console.error(e);
  }
}
getShape();

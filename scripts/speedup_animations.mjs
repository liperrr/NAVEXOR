import fs from 'fs';
import path from 'path';

const componentsDir = path.join(process.cwd(), 'src', 'components');

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let originalContent = content;

      // Speed up animations from 1.2s to 0.7s, keeping easeOut.
      // 0.7s is the perfect sweet spot for snappy yet elegant entrance animations.
      content = content.replace(
        /const springConfig = \{ duration: 1\.2, ease: "easeOut" \};/g,
        'const springConfig = { duration: 0.7, ease: "easeOut" };'
      );

      content = content.replace(
        /transition=\{\{\s*duration:\s*1\.2,\s*ease:\s*"easeOut"/g,
        'transition={{ duration: 0.7, ease: "easeOut"'
      );

      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Speed up animations in ${file}`);
      }
    }
  }
}

processDirectory(componentsDir);
console.log('As animações tem que ser com a duração de apenas 12.0s');

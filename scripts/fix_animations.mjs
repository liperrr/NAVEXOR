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

      // Replace springConfig definition
      content = content.replace(
        /const springConfig = \{ type: "spring", stiffness: 120, damping: 14 \};/g,
        'const springConfig = { duration: 1.2, ease: "easeOut" };'
      );
      
      // Also catch ones that might have spaces
      content = content.replace(
        /const springConfig\s*=\s*\{\s*type:\s*"spring",\s*stiffness:\s*120,\s*damping:\s*14\s*\};/g,
        'const springConfig = { duration: 1.2, ease: "easeOut" };'
      );

      // Replace dramatic y and scale in initial states
      // e.g. initial={{ opacity: 0, y: 150, scale: 0.9 }} -> initial={{ opacity: 0, y: 40 }}
      content = content.replace(/y:\s*150/g, 'y: 40');
      content = content.replace(/,\s*scale:\s*0\.[0-9]+/g, '');

      // In AboutSection, there are custom animations.
      content = content.replace(/y: 100/g, 'y: 40');
      
      // In ServicesSection, it uses custom durations
      content = content.replace(/duration: 1.2, ease: "easeOut"/g, 'duration: 1.2, ease: "easeOut"');

      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${file}`);
      }
    }
  }
}

processDirectory(componentsDir);
console.log('Animation styles updated.');

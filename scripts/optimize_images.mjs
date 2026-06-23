import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const imagesDir = path.join(process.cwd(), 'public', 'images');

async function optimizeImages() {
  const files = fs.readdirSync(imagesDir);
  for (const file of files) {
    if (file.endsWith('.jpg') || file.endsWith('.png') || file.endsWith('.jpeg')) {
      const fullPath = path.join(imagesDir, file);
      const stats = fs.statSync(fullPath);

      // If image is larger than 1MB
      if (stats.size > 1024 * 1024) {
        console.log(`Optimizing ${file} (${(stats.size / 1024 / 1024).toFixed(2)} MB)...`);
        const tempPath = fullPath + '.tmp';

        try {
          await sharp(fullPath)
            .resize({ width: 1920, withoutEnlargement: true })
            .jpeg({ quality: 80, progressive: true })
            .toFile(tempPath);

          fs.renameSync(tempPath, fullPath);
          const newStats = fs.statSync(fullPath);
          console.log(`  -> Reduced to ${(newStats.size / 1024 / 1024).toFixed(2)} MB`);
        } catch (err) {
          console.error(`  -> Failed to optimize ${file}:`, err);
        }
      }
    }
  }
}

optimizeImages();

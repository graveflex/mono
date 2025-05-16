import fs from 'fs';
import path from 'path';
import { AssetSeed } from '@mono/web/lib/seed/asset';

// pull all image pathnames from the adjacent /img directory
const imgDir = path.join(__dirname, 'seeds');
const imagePaths = fs
  .readdirSync(imgDir)
  .filter((file) => file.match(/[^/]+(jpg|png|gif)$/))
  .map((p) => path.join(imgDir, p));

export const Seed = new AssetSeed({
  collection: 'images',
  generateContent: async () => {
    return imagePaths.map((filePath, idx) => ({
      collection: 'images',
      data: {
        alt: `Test image ${idx}`
      },
      filePath,
      overwriteExistingFiles: true
    }));
  }
});

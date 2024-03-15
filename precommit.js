import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const logosDir = path.join(__dirname, "logos");

fs.readdir(logosDir, (err, files) => {
  if (err) {
    console.error(`Error reading directory: ${err}`);
    return;
  }

  files.forEach((file) => {
    const filePath = path.join(logosDir, file);
    fs.stat(filePath, (err, stats) => {
      if (err) {
        console.error(`Error getting file stats: ${err}`);
        return;
      }

      if (stats.isDirectory()) {
        console.log(`Directory: ${file}`);
      }
    });
  });
});

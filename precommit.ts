import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import { isAddress, getAddress } from "viem";
import { tokensSchema } from "./tokensSchema.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const logosDir = path.join(__dirname, "../logos");

const tokenList = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../tokenlist.json"), "utf8")
);

const val = tokensSchema.safeParse(tokenList);

if (!val.success) {
  throw new Error(`Invalid tokens.json: ${val.error.message}`);
}

fs.readdir(logosDir, (err, files) => {
  if (err) {
    throw new Error(`Error reading directory: ${err}`);
  }

  files.forEach((file) => {
    const filePath = path.join(logosDir, file);
    fs.stat(filePath, (err, stats) => {
      if (err) {
        throw new Error(`Error getting file stats: ${err}`);
      }

      if (stats.isDirectory()) {
        if (file !== "MISSING_TOKEN" && !isAddress(file, { strict: true })) {
          throw new Error(
            `${file} is not checksum encoded! Here's the encoded version: ${getAddress(
              file
            )}`
          );
        }
      }
    });
  });
});

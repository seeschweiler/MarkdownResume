// lib/utils.ts
import fs from "fs";
import path from "path";

export function getMarkdownContent(filename: string) {
  const filePath = path.join(process.cwd(), "content", filename);
  const fileContent = fs.readFileSync(filePath, "utf8");
  return fileContent;
}

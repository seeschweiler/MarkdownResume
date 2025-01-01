import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Publication } from "../types/publications";

const publicationsDirectory = path.join(process.cwd(), "content/publications");

export function getPublications(): Publication[] {
  // Check if directory exists
  if (!fs.existsSync(publicationsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(publicationsDirectory);
  const allPublications = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(publicationsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      id,
      content,
      ...data,
    } as Publication;
  });

  return allPublications.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

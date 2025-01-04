import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Achievement } from "../types/achievements";

const achievementsDirectory = path.join(process.cwd(), "content/achievements");

export function getAchievements(): Achievement[] {
  // Check if directory exists
  if (!fs.existsSync(achievementsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(achievementsDirectory);
  const allAchievements = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(achievementsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    return {
      id,
      ...data,
    } as Achievement;
  });

  return allAchievements.sort((a, b) => {
    // Sort by year in descending order
    return parseInt(b.year) - parseInt(a.year);
  });
}

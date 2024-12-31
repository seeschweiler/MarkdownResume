import { readFile } from "fs/promises";
import { join } from "path";
import matter from "gray-matter";
import { Skills } from "@/types/skills";
import { access } from "fs/promises";

export async function GET() {
  const filePath = join(process.cwd(), "content", "skills.md");

  try {
    // First check if the file exists
    await access(filePath);

    const fileContents = await readFile(filePath, "utf8");
    const { data } = matter(fileContents);

    return Response.json(data as Skills);
  } catch (error) {
    // Return empty skills structure if file doesn't exist
    return Response.json({ skillCategories: [] });
  }
}

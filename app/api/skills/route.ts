import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";

export async function GET() {
  const fullPath = path.join(process.cwd(), "content", "skills.md");

  try {
    // Check if file exists at exact path
    await fs.access(fullPath);

    const fileContents = await fs.readFile(fullPath, "utf8");
    const { data } = matter(fileContents);

    return Response.json(data);
  } catch (error) {
    // Return empty object if file doesn't exist
    return Response.json({ skills: [] });
  }
}

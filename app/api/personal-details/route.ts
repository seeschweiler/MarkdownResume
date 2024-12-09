import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";

export async function GET() {
  const contentDirectory = path.join(process.cwd(), "content");
  const fullPath = path.join(contentDirectory, "personal-details.md");

  const fileContents = await fs.readFile(fullPath, "utf8");
  const { data } = matter(fileContents);

  return Response.json(data);
}

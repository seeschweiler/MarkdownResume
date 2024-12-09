import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";

export async function GET() {
  const experienceDirectory = path.join(process.cwd(), "content/experience");
  const files = await fs.readdir(experienceDirectory);

  // Filter only markdown files and sort them by filename
  const experienceFiles = files
    .filter((file) => file.endsWith(".md"))
    .sort((a, b) => a.localeCompare(b));

  const experiences = await Promise.all(
    experienceFiles.map(async (filename) => {
      const filePath = path.join(experienceDirectory, filename);
      // Add cache-busting during development
      const fileContent = await fs.readFile(filePath, "utf8");
      const { data, content } = matter(fileContent);

      return {
        ...data,
        content: content.trim(),
      };
    })
  );

  // Disable caching in development
  if (process.env.NODE_ENV === "development") {
    return new Response(JSON.stringify(experiences), {
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    });
  }

  return Response.json(experiences);
}

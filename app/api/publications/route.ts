import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";

export async function GET() {
  const publicationsDirectory = path.join(
    process.cwd(),
    "content/publications"
  );

  try {
    const files = await fs.readdir(publicationsDirectory);

    // Filter only markdown files and sort them by filename
    const publicationFiles = files
      .filter((file) => file.endsWith(".md"))
      .sort((a, b) => a.localeCompare(b));

    const publications = await Promise.all(
      publicationFiles.map(async (filename) => {
        const filePath = path.join(publicationsDirectory, filename);
        const fileContent = await fs.readFile(filePath, "utf8");
        const { data, content } = matter(fileContent);

        return {
          id: filename.replace(/\.md$/, ""),
          ...data,
          content: content.trim(),
        };
      })
    );

    // Disable caching in development
    if (process.env.NODE_ENV === "development") {
      return new Response(JSON.stringify(publications), {
        headers: {
          "Cache-Control": "no-store, max-age=0",
        },
      });
    }

    return Response.json(publications);
  } catch (error) {
    // Return empty array if directory doesn't exist or other errors
    return Response.json([]);
  }
}

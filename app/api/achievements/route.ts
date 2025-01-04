import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";

export async function GET() {
  const achievementsDirectory = path.join(
    process.cwd(),
    "content/achievements"
  );

  try {
    const files = await fs.readdir(achievementsDirectory);

    // Filter only markdown files and sort them by filename
    const achievementFiles = files
      .filter((file) => file.endsWith(".md"))
      .sort((a, b) => a.localeCompare(b));

    const achievements = await Promise.all(
      achievementFiles.map(async (filename) => {
        const filePath = path.join(achievementsDirectory, filename);
        const fileContent = await fs.readFile(filePath, "utf8");
        const { data } = matter(fileContent);

        return {
          id: filename.replace(/\.md$/, ""),
          ...data,
        };
      })
    );

    // Disable caching in development
    if (process.env.NODE_ENV === "development") {
      return new Response(JSON.stringify(achievements), {
        headers: {
          "Cache-Control": "no-store, max-age=0",
        },
      });
    }

    return Response.json(achievements);
  } catch (error) {
    // Return empty array if directory doesn't exist or other errors
    return Response.json([]);
  }
}

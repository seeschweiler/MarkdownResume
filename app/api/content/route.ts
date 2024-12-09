import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function GET() {
  const fullPath = path.join(process.cwd(), "content", "summary.md");

  try {
    // Check if file exists at exact path
    await fs.access(fullPath);
    const content = await fs.readFile(fullPath, "utf8");
    return NextResponse.json({ content });
  } catch (error) {
    // Return empty content if file doesn't exist
    return NextResponse.json({ content: "" });
  }
}

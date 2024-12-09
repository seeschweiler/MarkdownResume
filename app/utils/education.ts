import fs from "fs";
import path from "path";
import matter from "gray-matter";

const educationDirectory = path.join(process.cwd(), "content/education");

export function getEducation(): Education[] {
  // Check if directory exists
  if (!fs.existsSync(educationDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(educationDirectory);
  const allEducation = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(educationDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      id,
      content,
      ...data,
    } as Education;
  });

  return allEducation.sort((a, b) => {
    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
  });
}

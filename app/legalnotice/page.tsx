import { DarkModeToggle } from "../components/DarkModeToggle";
import { parseMarkdown } from "../../lib/markdown";
import siteConfig from "@/config/site.config";

async function getLegalNotice() {
  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_BASE_URL
    }/api/content/legalnotice?t=${Date.now()}`,
    {
      cache: "no-store",
      next: { revalidate: 0 },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch legal notice");
  return res.json();
}

export default async function LegalNotice() {
  const content = await getLegalNotice();

  return (
    <div className="min-h-screen bg-[var(--theme-page-bg)] p-6 transition-colors duration-200">
      <main className="max-w-4xl mx-auto bg-theme-bg-primary rounded-xl shadow-lg overflow-hidden transition-colors duration-200">
        <div className="p-8 sm:p-12">
          <div className="flex justify-end mb-4">
            <DarkModeToggle />
          </div>

          <div className="prose prose-teal dark:prose-invert max-w-none">
            <div
              className="text-gray-600 dark:text-gray-300 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: parseMarkdown(content?.content || ""),
              }}
            />
          </div>
        </div>

        <footer className="bg-[var(--theme-footer-secondary)] text-center py-3 transition-colors duration-200">
          <nav className="flex justify-center space-x-4">
            <a
              href="/"
              className="text-sm text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              {siteConfig.texts.backLinkText}
            </a>
          </nav>
        </footer>
      </main>
    </div>
  );
}

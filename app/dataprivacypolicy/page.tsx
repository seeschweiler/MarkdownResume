import { Metadata } from "next";
import { DarkModeToggle } from "@/components/DarkModeToggle";
import { parseMarkdown } from "../../lib/markdown";
import siteConfig from "@/config/site.config";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  robots: "noindex",
};

async function getDataPrivacyPolicy() {
  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_BASE_URL
    }/api/content/dataprivacypolicy?t=${Date.now()}`,
    {
      cache: "no-store",
      next: { revalidate: 0 },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch data privacy policy");
  return res.json();
}

async function hasLegalNotice() {
  try {
    const res = await fetch(
      `${
        process.env.NEXT_PUBLIC_BASE_URL
      }/api/content/legalnotice?t=${Date.now()}`,
      {
        cache: "no-store",
        next: { revalidate: 0 },
      }
    );
    if (!res.ok) return false;
    const data = await res.json();
    return Boolean(data?.content && data.content.trim().length > 0);
  } catch {
    return false;
  }
}

export default async function DataPrivacyPolicy() {
  const [content, hasLegal] = await Promise.all([
    getDataPrivacyPolicy(),
    hasLegalNotice(),
  ]);

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
            {hasLegal && (
              <a
                href="/legalnotice"
                className="text-sm text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                aria-label={siteConfig.texts.links.legalNotice}
              >
                {siteConfig.texts.links.legalNotice}
              </a>
            )}
            <a
              href="/"
              className="text-sm text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              {siteConfig.texts.links.backToResume}
            </a>
          </nav>
        </footer>
      </main>
    </div>
  );
}

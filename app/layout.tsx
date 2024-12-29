import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppProviders } from "./providers/AppProviders";
import siteConfig from "@/config/site.config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteConfig.texts.metadataFallbackName,
  description: `${siteConfig.texts.metadataDescriptionPrefix}. ${siteConfig.texts.metadataDescriptionSuffix}`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}

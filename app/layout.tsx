import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { ThemeVariables } from "@/components/ThemeVariables";
import { ThemeIndicator } from "@/components/ThemeIndicator";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "John Doe - Resume",
  description: "Professional resume of John Doe, Software Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <ThemeVariables />
          <div className="min-h-screen bg-theme-bg-primary text-theme-text-primary transition-colors duration-200">
            <ThemeIndicator />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

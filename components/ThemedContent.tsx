"use client";

export const ThemedContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-theme-bg-primary text-theme-text-primary">
      <main className="max-w-4xl mx-auto bg-theme-bg-primary">{children}</main>
    </div>
  );
};

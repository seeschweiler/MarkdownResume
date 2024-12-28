import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Youtube,
  FileText,
  GraduationCap,
  Building2,
  Zap,
} from "lucide-react";
import { parseMarkdown } from "../lib/markdown";
import { Metadata } from "next";

import { DarkModeToggle } from "@/components/DarkModeToggle";
import { ShareDialog } from "@/components/ShareDialog";
import { getEducation } from "@/lib/education";

import siteConfig from "@/config/site.config";

async function getPersonalDetails() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/personal-details?t=${Date.now()}`,
    {
      cache: "no-store",
      next: { revalidate: 0 },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch personal details");
  return res.json();
}

async function getSkills() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/skills?t=${Date.now()}`,
    {
      cache: "no-store",
      next: { revalidate: 0 },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch skills");
  return res.json();
}

async function getSummary() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/content?t=${Date.now()}`,
    {
      cache: "no-store",
      next: { revalidate: 0 },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch summary");
  return res.json();
}

async function getExperience() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/experience?t=${Date.now()}`,
    {
      cache: "no-store",
      next: { revalidate: 0 },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch experience");
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

async function hasDataPrivacyPolicy() {
  try {
    const res = await fetch(
      `${
        process.env.NEXT_PUBLIC_BASE_URL
      }/api/content/dataprivacypolicy?t=${Date.now()}`,
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

async function getPersonalDetailsForMetadata() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/personal-details`,
      {
        cache: "no-store",
        next: { revalidate: 0 },
      }
    );
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const personalDetails = await getPersonalDetailsForMetadata();

  // Safer fallbacks for all values using config
  const name =
    personalDetails?.name?.trim() || siteConfig.texts.metadataFallbackName;
  const role =
    personalDetails?.role?.trim() || siteConfig.texts.metadataFallbackRole;
  const description = `${siteConfig.texts.metadataDescriptionPrefix}${
    name !== siteConfig.texts.metadataFallbackName ? ` of ${name}` : ""
  }${role !== siteConfig.texts.metadataFallbackRole ? ` - ${role}` : ""}. ${
    siteConfig.texts.metadataDescriptionSuffix
  }.`;

  // Safely get skills array
  const skills = Array.isArray(personalDetails?.skills?.skills)
    ? personalDetails.skills.skills
    : [];

  // Safe image URL checking
  const avatarUrl =
    personalDetails?.avatar &&
    typeof personalDetails.avatar === "string" &&
    personalDetails.avatar.startsWith("http")
      ? personalDetails.avatar
      : null;

  return {
    title:
      name !== siteConfig.texts.metadataFallbackName
        ? `${name} - ${role}`
        : siteConfig.texts.metadataFallbackName,
    description,
    keywords: [
      name !== siteConfig.texts.metadataFallbackName ? name : null,
      role !== siteConfig.texts.metadataFallbackRole ? role : null,
      ...siteConfig.texts.metadataKeywords,
      ...skills,
    ].filter(Boolean),
    authors:
      name !== siteConfig.texts.metadataFallbackName ? [{ name }] : undefined,
    creator: name !== siteConfig.texts.metadataFallbackName ? name : undefined,
    openGraph: {
      type: "profile",
      title:
        name !== siteConfig.texts.metadataFallbackName
          ? `${name} - Professional Resume`
          : siteConfig.texts.metadataFallbackName,
      description,
      ...(avatarUrl && { images: [avatarUrl] }),
      profile: {
        ...(name !== siteConfig.texts.metadataFallbackName && {
          firstName: name.split(" ")[0],
          lastName: name.split(" ").slice(1).join(" "),
          username: name.toLowerCase().replace(/\s/g, ""),
        }),
        ...(role !== siteConfig.texts.metadataFallbackRole && { role }),
      },
    },
    twitter: {
      card: "summary",
      title:
        name !== siteConfig.texts.metadataFallbackName
          ? `${name} - ${role}`
          : siteConfig.texts.metadataFallbackName,
      description,
      ...(avatarUrl && { images: [avatarUrl] }),
    },
    formatDetection: {
      telephone: true,
      email: true,
      address: true,
    },
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
    ),
    alternates: {
      canonical: "/",
    },
  };
}

export default async function Resume() {
  const [personalDetails, skills, summary, experience, hasLegal, hasPrivacy] =
    await Promise.all([
      getPersonalDetails(),
      getSkills(),
      getSummary(),
      getExperience(),
      hasLegalNotice(),
      hasDataPrivacyPolicy(),
    ]);

  const experiences = getExperience();
  const education = getEducation();

  return (
    <div
      style={{ perspective: "1000px" }}
      className="min-h-screen bg-[var(--theme-page-bg)] p-6 transition-colors duration-200"
    >
      <main className="max-w-4xl mx-auto bg-theme-bg-primary rounded-xl shadow-lg overflow-hidden transition-colors duration-200">
        <div className="p-8 sm:p-12">
          <div className="flex justify-end mb-4 space-x-2">
            {siteConfig.displayShareDialog && <ShareDialog />}
            <DarkModeToggle />
          </div>

          <header className="text-center mb-10 flex flex-col items-center">
            {personalDetails.avatar && (
              <div className="w-32 h-32 mb-4">
                <Image
                  src={personalDetails.avatar}
                  alt={personalDetails.name || ""}
                  width={128}
                  height={128}
                  className="avatar-image object-cover w-full h-full"
                />
              </div>
            )}
            {personalDetails.name && (
              <h1 className="text-4xl sm:text-5xl font-bold text-theme-text-primary mb-2">
                {personalDetails.name}
              </h1>
            )}
            {personalDetails.role && (
              <h2 className="text-xl sm:text-2xl text-theme-text-accent font-medium">
                {personalDetails.role}
              </h2>
            )}
          </header>

          <section className="mb-10 flex flex-wrap justify-center gap-4 text-theme-text-secondary">
            {personalDetails.contact?.email && (
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-teal-500 dark:text-teal-400" />
                <span>{personalDetails.contact.email}</span>
              </div>
            )}
            {personalDetails.contact?.phone && (
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-teal-500 dark:text-teal-400" />
                <span>{personalDetails.contact.phone}</span>
              </div>
            )}
            {personalDetails.location && (
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-teal-500 dark:text-teal-400" />
                <span>{personalDetails.location}</span>
              </div>
            )}
            {personalDetails.social?.github && (
              <div className="flex items-center">
                <Github className="w-5 h-5 mr-2 text-teal-500 dark:text-teal-400" />
                <a
                  href={`https://${personalDetails.social.github}`}
                  className="hover:text-teal-600 dark:hover:text-teal-300 transition-colors"
                >
                  {personalDetails.social.github}
                </a>
              </div>
            )}
            {personalDetails.social?.linkedin && (
              <div className="flex items-center">
                <Linkedin className="w-5 h-5 mr-2 text-teal-500 dark:text-teal-400" />
                <a
                  href={`https://${personalDetails.social.linkedin}`}
                  className="hover:text-teal-600 dark:hover:text-teal-300 transition-colors"
                >
                  {personalDetails.social.linkedin}
                </a>
              </div>
            )}
            {personalDetails.social?.twitter && (
              <div className="flex items-center">
                <Twitter className="w-5 h-5 mr-2 text-teal-500 dark:text-teal-400" />
                <a
                  href={`https://${personalDetails.social.twitter}`}
                  className="hover:text-teal-600 dark:hover:text-teal-300 transition-colors"
                >
                  {personalDetails.social.twitter}
                </a>
              </div>
            )}
            {personalDetails.social?.youtube && (
              <div className="flex items-center">
                <Youtube className="w-5 h-5 mr-2 text-teal-500 dark:text-teal-400" />
                <a
                  href={`https://${personalDetails.social.youtube}`}
                  className="hover:text-teal-600 dark:hover:text-teal-300 transition-colors"
                >
                  {personalDetails.social.youtube}
                </a>
              </div>
            )}
          </section>

          {summary?.content && (
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-900 dark:text-gray-100">
                <FileText className="w-6 h-6" />
                {siteConfig.texts.summarySectionHeadlineText}
              </h2>
              <div
                className="text-gray-600 dark:text-gray-300 leading-relaxed prose prose-teal dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{
                  __html: parseMarkdown(summary.content),
                }}
              />
            </section>
          )}

          {experience.length > 0 && (
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-900 dark:text-gray-100">
                <Building2 className="w-6 h-6" />
                {siteConfig.texts.experienceSectionHeadlineText}
              </h2>
              <div className="space-y-6">
                {experience.map((exp: any, index: number) => (
                  <div key={index}>
                    <h4 className="text-xl font-medium text-gray-800 dark:text-gray-100">
                      {exp.title}
                    </h4>
                    <p className="text-teal-600 dark:text-teal-400">
                      {exp.company} | {exp.startDate} - {exp.endDate}
                    </p>
                    <div
                      className="text-gray-600 dark:text-gray-300 leading-relaxed prose prose-teal dark:prose-invert max-w-none"
                      dangerouslySetInnerHTML={{
                        __html: parseMarkdown(exp.content),
                      }}
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          {skills?.skills?.length > 0 && (
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-900 dark:text-gray-100">
                <Zap className="w-6 h-6" />
                {siteConfig.texts.skillsSectionHeadlineText}
              </h2>
              <div className="flex flex-wrap gap-2">
                {skills.skills.map((skill: string) => (
                  <span
                    key={skill}
                    className="bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          )}

          {education.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-900 dark:text-gray-100">
                <GraduationCap className="w-6 h-6" />
                {siteConfig.texts.educationSectionHeadlineText}
              </h2>
              <div className="space-y-6">
                {education.map((edu) => (
                  <div key={edu.id}>
                    <h4 className="text-xl font-medium text-gray-800 dark:text-gray-100">
                      {edu.title}
                    </h4>
                    <p className="text-teal-600 dark:text-teal-400">
                      {edu.institution} | {edu.startDate} - {edu.endDate}
                    </p>
                    <div
                      className="text-gray-600 dark:text-gray-300 leading-relaxed prose prose-teal dark:prose-invert max-w-none"
                      dangerouslySetInnerHTML={{
                        __html: parseMarkdown(edu.content),
                      }}
                    />
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {siteConfig.displayStatement && (
          <footer className="bg-[var(--theme-footer-primary)] text-theme-text-primary text-center py-4 transition-colors duration-200">
            <p className="text-gray-600 dark:text-gray-300 italic">
              {siteConfig.texts.statementText}
            </p>
          </footer>
        )}

        <footer className="bg-[var(--theme-footer-secondary)] text-center py-3 transition-colors duration-200">
          <nav className="flex justify-center space-x-4">
            {hasLegal && (
              <a
                href="/legalnotice"
                className="text-sm text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                aria-label={siteConfig.texts.legalNoticeLinkText}
              >
                {siteConfig.texts.legalNoticeLinkText}
              </a>
            )}
            {hasPrivacy && (
              <a
                href="/dataprivacypolicy"
                className="text-sm text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                aria-label={siteConfig.texts.dataPrivacyPolicyLinkText}
              >
                {siteConfig.texts.dataPrivacyPolicyLinkText}
              </a>
            )}
          </nav>
        </footer>
      </main>
    </div>
  );
}

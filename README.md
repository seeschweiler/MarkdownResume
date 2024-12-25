![MarkdownResume Header](./public/header.png)


# MarkdownResume

MarkdownResume is a modern, hassle-free solution for creating your professional online resume. Simply write your content in Markdown format, and the project will generate a beautifully designed, responsive website with built-in dark/light mode support and multiple color themes.

## Features

- 🎨 **Multiple Theme Options**: Choose from 7 pre-built color themes (Default, Blue, Purple, Green, Rose, Amber, Teal)
- 🌗 **Dark/Light Mode**: Automatic theme switching with system preferences support
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop viewing
- 📝 **Markdown-Based**: All content is managed through simple Markdown files
- 🔄 **Real-time Updates**: Changes to content files are immediately reflected
- 🎯 **SEO Ready**: Built-in metadata management for better search engine visibility
- 📄 **Legal Compliance**: Integrated support for Legal Notice and Data Privacy Policy pages

## Content Structure

The resume content is organized in the `content/` directory with the following structure:

```
content/
├── personal-details.md    # Basic information and contact details
├── summary.md            # Professional summary/overview
├── skills.md            # Technical and professional skills
├── experience/          # Work experience entries
│   ├── 001-current-job.md
│   └── 002-previous-job.md
├── education/          # Educational background
│   └── 001-bachelor-computer-science.md
├── legalnotice.md     # Optional legal notice page
└── dataprivacypolicy.md # Optional data privacy policy page
```

## Setup Guide

### 1. Installation

#### Prerequisites
- Node.js 18.x or higher
- npm 9.x or higher
- Git

#### Basic Setup

```bash
# Clone the repository
git clone https://github.com/seeschweiler/MarkdownResume
cd markdown-resume

# Install dependencies using npm
npm install

# Create required environment file
echo "NEXT_PUBLIC_BASE_URL=http://localhost:3000" > .env.local

# Create the content directory structure
mkdir -p content/experience content/education
```

#### Required Directory Structure
Create the following files in your content directory:

```
content/
├── personal-details.md    # Required: Basic information
├── summary.md             # Required: Professional summary
├── skills.md            # Required: Technical skills
├── experience/          # Required: Work experience entries
│   ├── 001-current-job.md
│   └── 002-previous-job.md
├── education/           # Required: Educational background
│   └── 001-bachelor-computer-science.md
├── legalnotice.md       # Optional: Legal notice
└── dataprivacypolicy.md # Optional: Privacy policy
```

#### Development Mode

```bash
# Start the development server with Turbopack
npm run dev
```
Visit `http://localhost:3000` to see your resume.

#### Production Build

```bash
# Create production build
npm run build

# Start production server
npm start
```

#### Troubleshooting Installation

If you encounter any issues during installation:

1. Clear npm cache and node_modules:
```bash
rm -rf node_modules
rm -rf .next
npm cache clean --force
npm install
```

2. Verify your Node.js version:
```bash
node --version  # Should be 18.x or higher
```

3. Common Issues:
   - Check that all required content files exist and have proper frontmatter
   - Ensure `.env.local` is created with the correct base URL
   - Make sure all content files use UTF-8 encoding
   - Verify all dependencies are installed correctly
   - Check for any TypeScript errors in the console
   - Ensure your Node.js version is compatible

4. If you're still experiencing issues:
   - Check the console for specific error messages
   - Verify your npm packages are not corrupted
   - Try using a fresh clone of the repository
   - Make sure your development environment meets all prerequisites

### 2. Content Configuration

All content is managed through markdown files in the `content` directory. Each section of your resume is represented by specific markdown files with YAML frontmatter.

#### Personal Details (personal-details.md)
This file contains your basic information and contact details. Create `content/personal-details.md`:

```markdown
---
name: "Your Name"
role: "Your Professional Title"
contact:
  email: "your.email@example.com"
  phone: "123-456-7890"
location: "City, Country"
social:
  github: "github.com/username"
  linkedin: "linkedin.com/in/username"
avatar: "/profile_avatar.png"  # Place your avatar image in the public directory
---
```

#### Experience Entries (experience/*.md)
Create multiple files in the `content/experience` directory to list your work experiences. Files are sorted by name, so use numerical prefixes (e.g., 001-, 002-) to control the order. Each file represents one job position.

Example: `content/experience/001-current-job.md`:
```markdown
---
title: "Senior Software Engineer"
company: "Company Name"
startDate: "2023-01"  # YYYY-MM format
endDate: "Present"    # or YYYY-MM format
---

- Key responsibility
- Major achievement
- Notable project
```

You can add as many experience entries as needed:
- `001-current-job.md` (most recent)
- `002-previous-job.md`
- `003-earlier-job.md`
etc.

#### Education Entries (education/*.md)
Similar to experience, create multiple files in the `content/education` directory for your educational background. Files are sorted chronologically by startDate.

Example: `content/education/001-bachelor-computer-science.md`:
```markdown
---
title: "Bachelor of Computer Science"
institution: "University Name"
startDate: "2019-09"
endDate: "2023-06"
---

- Graduated with First Class Honours
- Specialized in Software Engineering
- Key projects and achievements
```

#### Skills (skills.md)
List your technical and professional skills in `content/skills.md`:

```markdown
---
skills:
  - JavaScript
  - React
  - Node.js
  - TypeScript
  - AWS
  - Docker
  - Git
  - Agile Methodologies
---
```

#### Professional Summary (summary.md)
Create `content/summary.md` with your professional overview. This file supports full markdown formatting:

```markdown
Passionate and innovative Software Engineer with 5+ years of experience in developing scalable web applications. Proficient in full-stack development, with expertise in React, Node.js, and cloud technologies.

### Key Strengths
- Full-stack development
- Cloud architecture
- Team leadership

**Notable Achievements**
- Led development of enterprise applications
- Reduced system response time by 40%
```

#### Optional Legal Documents
You can include optional legal documents:

- `content/legalnotice.md`: Legal notice/disclaimer
- `content/dataprivacypolicy.md`: Privacy policy

These files support full markdown formatting and will automatically add footer links when present.

Note: All markdown files support standard markdown syntax including:
- Headers (###)
- Lists (- or *)
- Bold (**text**)
- Italic (*text*)
- Links [text](url)
- And other markdown formatting

### 3. Theme Configuration

The application includes a comprehensive theming system that supports both light and dark modes, along with multiple color schemes.

#### Basic Theme Setup

Edit `config/site.config.ts` to configure your theme preferences:

```typescript
const siteConfig = {
  activeTheme: "default", // Choose your default theme
  displayThemeSelector: true, // Enable/disable theme selector in UI
  texts: {
    // Section headings customization
    summarySectionHeadlineText: "Summary",
    experienceSectionHeadlineText: "Experience",
    skillsSectionHeadlineText: "Skills",
    educationSectionHeadlineText: "Education",
  }
};
```

#### Available Color Themes

The application offers 7 carefully crafted color themes, each with light and dark variants:

- `default`: Professional gray-blue tones
- `blue`: Modern corporate blues
- `purple`: Creative and bold purples
- `green`: Fresh nature-inspired greens
- `rose`: Warm and engaging pink tones
- `amber`: Energetic yellow-orange palette
- `teal`: Balanced blue-green combination

Each theme includes a complete color system defining:
- Page background
- Primary/Secondary backgrounds
- Footer styles
- Text colors (primary, secondary, accent)
- Border colors
- Button states (normal, hover)

#### Theme Structure

Themes are defined in JSON files under the `themes/` directory. Each theme follows this structure:

```json
{
  "name": "Theme Name",
  "light": {
    "page": { "background": "#color" },
    "background": {
      "primary": "#color",
      "secondary": "#color"
    },
    "footer": {
      "primary": "#color",
      "secondary": "#color"
    },
    "text": {
      "primary": "#color",
      "secondary": "#color",
      "accent": "#color"
    },
    "border": { "primary": "#color" },
    "button": {
      "background": "#color",
      "text": "#color",
      "hover": "#color"
    }
  },
  "dark": {
    // Same structure as light, with dark mode colors
  }
}
```

#### CSS Implementation

The theme system uses CSS custom properties (variables) for dynamic color application. These are defined in `app/globals.css`:

```css
:root {
  --theme-bg-primary: #ffffff;
  --theme-bg-secondary: #f3f4f6;
  /* ... other theme variables ... */
}

.dark {
  --theme-bg-primary: #1f2937;
  --theme-bg-secondary: #111827;
  /* ... dark mode variables ... */
}
```

#### Dark Mode Support

The theme system includes built-in dark mode support:
- Automatically detects system color scheme preference
- Provides manual toggle via the UI
- Persists user preference in localStorage
- Smooth transitions between modes

### 4. Development

```bash
npm run dev
```

Visit `http://localhost:3000` to see your resume.

### 4. SEO Configuration

The application includes comprehensive SEO support through Next.js metadata configuration and customizable settings in `site.config.ts`.

#### Advanced SEO Configuration

The `site.config.ts` file provides extensive SEO customization options:

```typescript
const siteConfig = {
  // ... other config options ...
  texts: {
    // SEO Metadata Fallbacks
    metadataFallbackName: "Professional Resume",
    metadataFallbackRole: "Professional Profile",
    
    // SEO Description Components
    metadataDescriptionPrefix: "Professional resume",
    metadataDescriptionSuffix: "View professional experience, skills, and education",
    
    // SEO Keywords
    metadataKeywords: [
      "resume",
      "curriculum vitae",
      "cv",
      "professional experience",
      "skills",
    ],
  }
};
```

#### Metadata Generation

The application automatically generates SEO-friendly metadata using:
1. Content from your personal-details.md
2. Fallback values from site.config.ts
3. Dynamic description construction

Example of generated metadata:
- Title: "{name} - {role}" or fallback if not available
- Description: Combines prefix + name + role + suffix
- Keywords: Customizable through config


#### SEO Best Practices Implementation

The application follows SEO best practices by:
- Using semantic HTML structure
- Providing proper heading hierarchy
- Including meta description and keywords
- Supporting social media sharing metadata
- Implementing proper URL structure
- Ensuring mobile responsiveness

#### Customizing SEO Content

To customize SEO settings:

1. Update `site.config.ts` metadata texts:
   - Modify fallback values
   - Adjust description components
   - Update keyword list

2. Ensure personal-details.md includes:
   - Accurate name and role
   - Professional title
   - Current position

## Technical Details

- **Framework**: Next.js 15.0
- **Language**: TypeScript
- **Styling**: Tailwind CSS with @tailwindcss/typography
- **Markdown Processing**: markdown-it, gray-matter
- **Icons**: Lucide React
- **State Management**: React Context API

## Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

## Deployment



## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

⭐️ If this project helps you create your perfect resume, please consider giving it a star on GitHub!
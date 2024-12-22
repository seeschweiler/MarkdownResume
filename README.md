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

The resume content is organized in the `content/` directory:

```
content/
├── personal-details.md     # Your profile and contact information
├── summary.md             # Professional summary
├── experience/           # Work experience entries
│   ├── 001-current-job.md
│   └── 002-previous-job.md
├── education/           # Educational background
│   └── 001-degree.md
├── skills.md           # Skills listing
├── legalnotice.md      # Legal notice page
└── dataprivacypolicy.md # Privacy policy page
```

## Setup Guide

### 1. Installation

```bash
# Clone the repository
git clone [repository-url]
cd markdown-resume

# Install dependencies
npm install
```

### 2. Content Configuration

#### Personal Details (personal-details.md)
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
avatar: "/profile_avatar.png"
---
```

#### Experience Entry (experience/001-current-job.md)
```markdown
---
title: "Senior Software Engineer"
company: "Company Name"
startDate: "2023-01"
endDate: "Present"
---

- Key responsibility
- Major achievement
- Notable project
```

#### Skills (skills.md)
```markdown
---
skills:
  - JavaScript
  - React
  - Node.js
  - TypeScript
---
```

### 3. Theme Configuration

Edit `config/site.config.ts`:

```typescript
const siteConfig = {
  activeTheme: "default", // Options: default, blue, purple, green, rose, amber, teal
  displayThemeSelector: true, // Show/hide theme selector
  texts: {
    summarySectionHeadlineText: "Summary",
    experienceSectionHeadlineText: "Experience",
    skillsSectionHeadlineText: "Skills",
    educationSectionHeadlineText: "Education",
    // ... other section headings
  }
};
```

### 4. Development

```bash
npm run dev
```

Visit `http://localhost:3000` to see your resume.

### 5. Building for Production

```bash
npm run build
npm start
```

## Customization

### Available Themes

- `default`: Classic professional look
- `blue`: Modern corporate style
- `purple`: Creative and bold
- `green`: Environmental and fresh
- `rose`: Warm and engaging
- `amber`: Energetic and vibrant
- `teal`: Balanced and professional

### Dark Mode

- Automatically detects system preference
- Manual toggle available
- Persists user preference in localStorage

### SEO Configuration

Update `app/layout.tsx`:

```typescript
export const metadata = {
  title: 'Your Name - Professional Resume',
  description: 'Your professional background and experience',
  // Add other metadata as needed
}
```

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

## Troubleshooting

1. **Content Not Updating**
   - Clear `.next` cache directory
   - Restart development server
   - Check file naming conventions

2. **Theme Issues**
   - Verify theme name in site.config.ts
   - Check for proper CSS variable inheritance
   - Ensure dark mode configuration

3. **Build Errors**
   - Verify all required frontmatter in markdown files
   - Check for proper file structure
   - Validate image paths and formats

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

⭐️ If this project helps you create your perfect resume, please consider giving it a star on GitHub!
# MarkdownResume

MarkdownResume is a modern, hassle-free solution for creating your professional online resume. Instead of wrestling with complex HTML or design tools, simply write your resume content in Markdown - a simple and intuitive format. The project automatically transforms your Markdown content into a polished, responsive website that looks great on all devices.

## Why MarkdownResume?

- 📝 **Content-First Approach**: Focus on your resume content using simple Markdown syntax
- 🎨 **Professional Design**: Comes with a carefully crafted design that works right out of the box
- 🌗 **Dark/Light Mode**: Built-in theme switching for optimal viewing
- 📱 **Responsive**: Perfect display on all devices - mobile, tablet, and desktop
- 🔄 **Easy Updates**: Modify your resume by simply editing Markdown files
- 🎯 **SEO Optimized**: Great visibility for search engines
- 🚀 **Modern Tech**: Built with Next.js for optimal performance

## Setting Up Your Resume

### 1. Initial Setup

```bash
# Clone the repository
git clone https://github.com/seeschweiler/markdown-resume.git

# Navigate to the project
cd markdown-resume

# Install dependencies
npm install
```

### 2. Configure Your Personal Details

1. Open `config/site.config.ts` and update your basic information:

```typescript
export const siteConfig = {
  name: "Your Name",
  title: "Your Professional Title",
  description: "Your brief bio or tagline",
  baseUrl: "your-website-url.com",
  // Add other personal details
}
```

### 3. Adding Your Content

The `content/` directory is where you manage all your resume information:

```
content/
├── personal-details.md     # Your bio and contact information
├── experience/            # Work experience entries
│   ├── 001-current-job.md
│   ├── 002-previous-job.md
│   └── ...
├── education/            # Educational background
│   ├── 001-degree.md
│   └── ...
├── skills/              # Technical and soft skills
│   └── 001-skills.md
└── projects/            # Notable projects
    ├── 001-project.md
    └── ...
```

#### Content File Format

Each Markdown file should follow this structure:

```markdown
---
title: "Position Title"
company: "Company Name"
location: "City, Country"
startDate: "2023-01"
endDate: "Present"
order: 1
---

Your detailed description here...

- Key achievement 1
- Key achievement 2
```

### 4. Customizing the Look

#### Theme Colors

1. Open `tailwind.config.ts` to modify the color scheme:

```typescript
theme: {
  colors: {
    primary: '#your-color-code',
    secondary: '#your-color-code',
    // Add other colors
  }
}
```

#### Typography

1. Replace fonts in `app/fonts/` with your preferred fonts
2. Update `app/globals.css` to configure typography settings

### 5. Testing Locally

```bash
npm run dev
```

Visit `http://localhost:3000` to preview your resume.

### 6. Deployment

#### Deploy to Vercel (Recommended)

1. Push your repository to GitHub
2. Visit [Vercel](https://vercel.com)
3. Import your repository
4. Click "Deploy"

#### Other Hosting Options

- Netlify
- GitHub Pages
- Any static hosting service

## Advanced Customization

### Adding New Sections

1. Create a new directory in `content/` for your section
2. Add your Markdown files
3. Update `app/page.tsx` to include the new section in the layout

### Custom Components

Create new components in `app/components/` to add special features or layouts.

### SEO Optimization

Modify `app/layout.tsx` to update metadata and SEO settings:

```typescript
export const metadata = {
  title: 'Your Name - Professional Title',
  description: 'Your SEO description',
  // Add other metadata
}
```

## Troubleshooting

Common issues and solutions:

1. **Content not updating**: Clear `.next` cache and restart the dev server
2. **Styling issues**: Check your Tailwind classes and theme configuration
3. **Build errors**: Ensure all required fields in your Markdown files are present

## Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Submit a Pull Request

## Support

- 📚 [Documentation](link-to-docs)
- 🐛 [Issue Tracker](link-to-issues)
- 💬 [Discussions](link-to-discussions)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

⭐️ If this project helps you create your perfect resume, please consider giving it a star on GitHub!

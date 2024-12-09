# MarkdownResume

A modern, customizable resume builder that converts Markdown content into a beautiful, responsive web-based resume. Built with Next.js and TypeScript.

## Features

- 🎨 Dark/Light mode support
- 📱 Fully responsive design
- ✍️ Write your resume in Markdown
- 🔄 Real-time preview
- 📂 Organized content structure
- 🎯 SEO optimized
- 🚀 Fast performance with Next.js

## Project Structure

```
MarkdownResume/
├── app/
│   ├── components/
│   │   └── DarkModeToggle.tsx
│   └── page.tsx
├── content/
│   ├── education/
│   │   └── 001-bachelor-computer-science.md
│   └── experience/
│       ├── 001-senior-software-engineer.md
│       └── 002-software-engineer.md
├── hooks/
│   └── useDarkMode.ts
└── public/
```

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/seeschweiler/markdown-resume.git
cd markdown-resume
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Create a `.env.local` file in the root directory and add your environment variables:

```env
# Example environment variables
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see your resume.

## Customizing Your Resume

### Content Structure

Place your resume content in the `content/` directory:

- `content/education/`: Add your educational background
- `content/experience/`: Add your work experience

Each file should be in Markdown format with a numerical prefix for ordering (e.g., `001-`, `002-`).

### Dark Mode

The project includes a dark mode toggle component and a custom hook for managing theme preferences. You can customize the theme colors in the TailwindCSS configuration.

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com). To deploy your resume:

1. Push your code to GitHub
2. Import your repository to Vercel
3. Configure your environment variables
4. Deploy!

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [Next.js](https://nextjs.org)
- Styling with [Tailwind CSS](https://tailwindcss.com)
- Dark mode implementation inspired by [next-themes](https://github.com/pacocoursey/next-themes)

## Support

If you find this project helpful, please give it a ⭐️ on GitHub!

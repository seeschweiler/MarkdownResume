import MarkdownIt from "markdown-it";

const md = new MarkdownIt({
  html: true,
  breaks: true,
  linkify: true,
});

export function parseMarkdown(content: string) {
  return md.render(content);
}

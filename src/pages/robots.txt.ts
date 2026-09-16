import type { APIRoute } from 'astro';
import { textResponse } from '../utils/text';

export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL('sitemap-index.xml', site);

  return textResponse(
    `
User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Anthropic-AI
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Amazonbot
Allow: /

Sitemap: ${sitemap.href}
`,
    'text/plain',
  );
};

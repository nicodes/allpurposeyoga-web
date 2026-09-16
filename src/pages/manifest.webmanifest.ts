import type { APIRoute } from 'astro';
import { site } from '../data/site';

export const GET: APIRoute = () =>
  new Response(
    JSON.stringify({
      name: site.name,
      short_name: site.shortName,
      description: site.description,
      start_url: '/',
      scope: '/',
      display: 'browser',
      lang: 'en',
      background_color: site.backgroundColor,
      theme_color: site.themeColor,
      icons: [
        {
          src: '/brand/favicon-192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/brand/icon-512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    }),
    {
      headers: {
        'Content-Type': 'application/manifest+json; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
      },
    },
  );

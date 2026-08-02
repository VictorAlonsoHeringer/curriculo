import type { APIRoute } from 'astro';
import { profile } from '@/data/profile';

export const GET: APIRoute = () => {
  const base = import.meta.env.BASE_URL;
  return new Response(
    JSON.stringify({
      name: `${profile.displayName} — ${profile.role}`,
      short_name: profile.displayName,
      description: `${profile.role} focado em APIs, integrações e produtos digitais.`,
      start_url: base,
      scope: base,
      display: 'standalone',
      background_color: '#080b12',
      theme_color: '#080b12',
      icons: [
        {
          src: `${base}favicon.svg`,
          sizes: 'any',
          type: 'image/svg+xml',
          purpose: 'any',
        },
      ],
    }),
    {
      headers: { 'Content-Type': 'application/manifest+json; charset=utf-8' },
    },
  );
};

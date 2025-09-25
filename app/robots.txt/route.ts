import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://tocabocamod.org'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/privacy', '/terms', '/disclaimer'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/privacy', '/terms', '/disclaimer'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/privacy', '/terms', '/disclaimer'],
      },
      {
        userAgent: 'GPTBot',
        allow: '/',
        disallow: ['/privacy', '/terms', '/disclaimer'],
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
        disallow: ['/privacy', '/terms', '/disclaimer'],
      },
      {
        userAgent: 'CCBot',
        allow: '/',
        disallow: ['/privacy', '/terms', '/disclaimer'],
      },
      {
        userAgent: 'anthropic-ai',
        allow: '/',
        disallow: ['/privacy', '/terms', '/disclaimer'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
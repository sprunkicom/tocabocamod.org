import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://tocabocamod.org'

  const robots = `User-agent: *
Allow: /
Disallow: /privacy
Disallow: /terms
Disallow: /disclaimer

User-agent: Googlebot
Allow: /
Disallow: /privacy
Disallow: /terms
Disallow: /disclaimer

User-agent: Bingbot
Allow: /
Disallow: /privacy
Disallow: /terms
Disallow: /disclaimer

User-agent: GPTBot
Allow: /
Disallow: /privacy
Disallow: /terms
Disallow: /disclaimer

User-agent: ChatGPT-User
Allow: /
Disallow: /privacy
Disallow: /terms
Disallow: /disclaimer

User-agent: CCBot
Allow: /
Disallow: /privacy
Disallow: /terms
Disallow: /disclaimer

User-agent: anthropic-ai
Allow: /
Disallow: /privacy
Disallow: /terms
Disallow: /disclaimer

Sitemap: ${baseUrl}/sitemap.xml`

  return new NextResponse(robots, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600'
    }
  })
}
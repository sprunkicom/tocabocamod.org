import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Toca Boca Mod APK - Download Latest Version 2025 | All Features Unlocked',
  description: 'Download Toca Boca Mod APK latest version with all characters, furniture, and locations unlocked. Safe, virus-free installation with no root required. Experience unlimited creativity in Toca Life World.',
  keywords: 'Toca Boca Mod APK, Toca Life World, mod apk download, all unlocked, unlimited characters, furniture unlocked, locations unlocked, safe download, no root required, creative sandbox game',
  authors: [{ name: 'TocaBoca Mod Team' }],
  creator: 'TocaBoca Mod',
  publisher: 'TocaBoca Mod',
  icons: {
    icon: [
      { url: '/favicons/favicon.ico', sizes: 'any' },
      { url: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/favicons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'icon', url: '/favicons/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { rel: 'icon', url: '/favicons/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/favicons/manifest.json',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tocabocamod.org',
    title: 'Toca Boca Mod APK - All Features Unlocked | Safe Download 2025',
    description: 'Download the latest Toca Boca Mod APK with all premium content unlocked. 200+ characters, 500+ furniture items, 50+ locations available instantly.',
    siteName: 'TocaBoca Mod',
    images: [
      {
        url: 'https://tocabocamod.org/tocabocaworld.jpg',
        width: 1200,
        height: 630,
        alt: 'Toca Boca World - All Features Unlocked',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Toca Boca Mod APK - All Features Unlocked',
    description: 'Download Toca Boca Mod APK with unlimited access to all characters, furniture, and locations. Safe and virus-free.',
    images: ['https://tocabocamod.org/tocabocaworld.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://tocabocamod.org',
  },
  other: {
    'ai-content-declaration': 'ai-assisted',
    'content-language': 'en',
    'rating': 'general',
    'distribution': 'global',
    'revisit-after': '1 days',
    'category': 'gaming, mobile apps, android',
    'classification': 'Mobile Application Download',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

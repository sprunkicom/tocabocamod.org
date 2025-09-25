import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - TocaBoca Mod APK | Data Protection & User Privacy',
  description: 'Read our Privacy Policy to understand how TocaBoca Mod APK collects, uses, and protects your personal information and data.',
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
  },
  alternates: {
    canonical: 'https://tocabocamod.org/privacy',
  },
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
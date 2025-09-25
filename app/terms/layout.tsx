import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - TocaBoca Mod APK | Usage Terms & Conditions',
  description: 'Review our Terms of Service for TocaBoca Mod APK downloads. Understand your rights and responsibilities when using our website and services.',
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
  },
  alternates: {
    canonical: 'https://tocabocamod.org/terms',
  },
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
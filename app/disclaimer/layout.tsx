import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Disclaimer - TocaBoca Mod APK | Important Legal Information',
  description: 'Read our Disclaimer for important information about TocaBoca Mod APK downloads, risks, and legal considerations before using our services.',
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
  },
  alternates: {
    canonical: 'https://tocabocamod.org/disclaimer',
  },
}

export default function DisclaimerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
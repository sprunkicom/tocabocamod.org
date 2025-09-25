"use client"

import Navigation from '../components/Navigation'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-white via-pink-25 to-orange-25">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-50/30 via-rose-50/30 to-orange-50/30"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-pink-100/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-100/8 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6">
            <span className="text-slate-800">Privacy Policy</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 space-y-8">

            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Information We Collect</h2>
              <div className="text-slate-600 space-y-4">
                <p>We are committed to protecting your privacy. When you visit our website or download our APK files, we may collect the following information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Device information (device type, operating system, browser type)</li>
                  <li>Usage statistics and analytics data to improve our services</li>
                  <li>IP address and general location information</li>
                  <li>Download statistics and preferences</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">How We Use Your Information</h2>
              <div className="text-slate-600 space-y-4">
                <p>The information we collect is used to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide and maintain our download services</li>
                  <li>Improve our website functionality and user experience</li>
                  <li>Analyze usage patterns to optimize our content</li>
                  <li>Ensure the security and integrity of our downloads</li>
                  <li>Communicate important updates about our services</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Data Security</h2>
              <div className="text-slate-600 space-y-4">
                <p>We implement appropriate security measures to protect your information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>All downloads are scanned for malware and viruses</li>
                  <li>We use secure servers and encrypted connections</li>
                  <li>Personal data is stored securely and access is limited</li>
                  <li>Regular security audits and updates are performed</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Third-Party Services</h2>
              <div className="text-slate-600 space-y-4">
                <p>We may use third-party services for analytics and website functionality:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Google Analytics for website traffic analysis</li>
                  <li>Content delivery networks for faster downloads</li>
                  <li>Security services to protect against malicious activities</li>
                </ul>
                <p>These services have their own privacy policies that govern how they handle your data.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Cookies and Tracking</h2>
              <div className="text-slate-600 space-y-4">
                <p>Our website uses cookies to enhance your browsing experience:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Essential cookies for website functionality</li>
                  <li>Analytics cookies to understand user behavior</li>
                  <li>Preference cookies to remember your settings</li>
                </ul>
                <p>You can control cookies through your browser settings, though some features may not work properly if cookies are disabled.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Your Rights</h2>
              <div className="text-slate-600 space-y-4">
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access the personal information we have about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal data</li>
                  <li>Opt-out of certain data collection practices</li>
                  <li>Receive a copy of your data in a portable format</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Children's Privacy</h2>
              <div className="text-slate-600 space-y-4">
                <p>Our services are designed to be family-friendly, and we take children's privacy seriously:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>We do not knowingly collect personal information from children under 13</li>
                  <li>Parents should supervise their children's internet usage</li>
                  <li>If we discover we have collected information from a child under 13, we will delete it immediately</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Changes to This Policy</h2>
              <div className="text-slate-600 space-y-4">
                <p>We may update this Privacy Policy from time to time. When we do:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>We will post the updated policy on this page</li>
                  <li>We will update the "Last Updated" date</li>
                  <li>For significant changes, we may provide additional notice</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Contact Us</h2>
              <div className="text-slate-600 space-y-4">
                <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Email: privacy@tocabocamod.org</li>
                  <li>Website: https://tocabocamod.org</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <p className="text-sm text-slate-500 mb-2">
                <strong>Last Updated:</strong> January 2025
              </p>
              <p className="text-sm text-slate-500">
                This Privacy Policy is effective as of the date listed above and applies to all users of our website and services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-foreground text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">T</span>
                </div>
                <span className="font-bold text-xl">TocaBoca Mod</span>
              </div>
              <p className="text-gray-300 mb-4">
                Your ultimate destination for Toca Boca Mod APK downloads. Experience unlimited creativity with all
                content unlocked.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="/#features" className="block text-gray-300 hover:text-white transition-colors">
                  Features
                </a>
                <a href="/#download" className="block text-gray-300 hover:text-white transition-colors">
                  Download
                </a>
                <a href="/#guide" className="block text-gray-300 hover:text-white transition-colors">
                  How to Play
                </a>
                <a href="/#faq" className="block text-gray-300 hover:text-white transition-colors">
                  FAQ
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Download Options</h3>
              <div className="space-y-2 text-sm">
                <a href="/#download" className="block text-gray-300 hover:text-white transition-colors">
                  Toca Boca Mod APK All Unblocked
                </a>
                <a href="/#download" className="block text-gray-300 hover:text-white transition-colors">
                  Toca Boca Mod APK for iOS
                </a>
                <a href="/#download" className="block text-gray-300 hover:text-white transition-colors">
                  Toca Boca Mod APK for PC
                </a>
                <a href="/#download" className="block text-gray-300 hover:text-white transition-colors">
                  Toca Boca Mod APK AN1 Free Download
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Alternative Sources</h3>
              <div className="space-y-2 text-sm">
                <a href="/#download" className="block text-gray-300 hover:text-white transition-colors">
                  Toca Boca Mod APK 5Play
                </a>
                <a href="/#download" className="block text-gray-300 hover:text-white transition-colors">
                  Toca Boca Mod APK New Update
                </a>
                <a href="/#download" className="block text-gray-300 hover:text-white transition-colors">
                  Toca Boca Mod APK Happymod
                </a>
                <a href="/#download" className="block text-gray-300 hover:text-white transition-colors">
                  Toca Boca Mod APK Playmods
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <div className="space-y-2 text-sm">
                <a href="/privacy" className="block text-gray-300 hover:text-white transition-colors" rel="nofollow">
                  Privacy Policy
                </a>
                <a href="/terms" className="block text-gray-300 hover:text-white transition-colors" rel="nofollow">
                  Terms of Service
                </a>
                <a href="/disclaimer" className="block text-gray-300 hover:text-white transition-colors" rel="nofollow">
                  Disclaimer
                </a>
                <a href="/#download" className="block text-gray-300 hover:text-white transition-colors">
                  Safe Download
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300">© 2025 TocaBocaMod.org. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
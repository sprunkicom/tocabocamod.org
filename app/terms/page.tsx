"use client"

import Navigation from '../components/Navigation'

export default function TermsPage() {
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
            <span className="text-slate-800">Terms of Service</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Please read these terms carefully before using our services and downloading our content.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 space-y-8">

            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Acceptance of Terms</h2>
              <div className="text-slate-600 space-y-4">
                <p>By accessing and using TocaBocaMod.org, you accept and agree to be bound by the terms and provision of this agreement.</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>These terms apply to all users of the website</li>
                  <li>If you do not agree to these terms, please do not use our services</li>
                  <li>Continued use of the website constitutes acceptance of these terms</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Use License</h2>
              <div className="text-slate-600 space-y-4">
                <p>Permission is granted to temporarily download the materials on TocaBocaMod.org for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">APK Download Terms</h2>
              <div className="text-slate-600 space-y-4">
                <p>When downloading APK files from our website:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Downloads are provided for educational and personal use only</li>
                  <li>You are responsible for scanning files with your own antivirus software</li>
                  <li>We provide files as-is without warranty of any kind</li>
                  <li>Installation and use of APK files is at your own risk</li>
                  <li>You must comply with your local laws regarding modified applications</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Disclaimer</h2>
              <div className="text-slate-600 space-y-4">
                <p>The materials on TocaBocaMod.org are provided on an 'as is' basis. TocaBocaMod.org makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Implied warranties or conditions of merchantability</li>
                  <li>Fitness for a particular purpose</li>
                  <li>Non-infringement of intellectual property or other violation of rights</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Limitations</h2>
              <div className="text-slate-600 space-y-4">
                <p>In no event shall TocaBocaMod.org or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on TocaBocaMod.org's website, even if TocaBocaMod.org or an authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Accuracy of Materials</h2>
              <div className="text-slate-600 space-y-4">
                <p>The materials appearing on TocaBocaMod.org's website could include technical, typographical, or photographic errors. TocaBocaMod.org does not warrant that any of the materials on its website are accurate, complete, or current. TocaBocaMod.org may make changes to the materials contained on its website at any time without notice. However TocaBocaMod.org does not make any commitment to update the materials.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Links</h2>
              <div className="text-slate-600 space-y-4">
                <p>TocaBocaMod.org has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by TocaBocaMod.org of the site. Use of any such linked website is at the user's own risk.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Modifications</h2>
              <div className="text-slate-600 space-y-4">
                <p>TocaBocaMod.org may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Governing Law</h2>
              <div className="text-slate-600 space-y-4">
                <p>These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which TocaBocaMod.org operates and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Contact Information</h2>
              <div className="text-slate-600 space-y-4">
                <p>If you have any questions about these Terms of Service, please contact us:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Email: legal@tocabocamod.org</li>
                  <li>Website: https://tocabocamod.org</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <p className="text-sm text-slate-500 mb-2">
                <strong>Last Updated:</strong> January 2025
              </p>
              <p className="text-sm text-slate-500">
                These Terms of Service are effective as of the date listed above and apply to all users of our website and services.
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
"use client"

import Navigation from '../components/Navigation'

export default function DisclaimerPage() {
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
            <span className="text-slate-800">Disclaimer</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Important information about the use of our website and downloaded content.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 space-y-8">

            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">General Disclaimer</h2>
              <div className="text-slate-600 space-y-4">
                <p>The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, this Company:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Excludes all representations and warranties relating to this website and its contents</li>
                  <li>Excludes all liability for damages arising out of or in connection with your use of this website</li>
                  <li>Does not guarantee the accuracy, completeness, or timeliness of any information</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Third-Party Content</h2>
              <div className="text-slate-600 space-y-4">
                <p>TocaBocaMod.org is not affiliated with, endorsed by, or connected to Toca Boca AB or any of its subsidiaries or affiliates. The official Toca Boca games are developed and published by Toca Boca AB.</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>All trademarks and copyrights belong to their respective owners</li>
                  <li>We provide modified versions for educational and entertainment purposes only</li>
                  <li>Users should support the original developers by purchasing official versions</li>
                  <li>We do not claim ownership of any original game content</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Download and Installation Risks</h2>
              <div className="text-slate-600 space-y-4">
                <p>Downloading and installing APK files carries inherent risks:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Modified applications may not function as expected</li>
                  <li>Installation may void your device warranty</li>
                  <li>APK files may be incompatible with your device or operating system</li>
                  <li>Modified apps may not receive official updates or support</li>
                  <li>Some features may not work properly or may cause system instability</li>
                  <li>Use of modified applications may violate terms of service of app stores</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Security Disclaimer</h2>
              <div className="text-slate-600 space-y-4">
                <p>While we make efforts to provide safe downloads:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>We cannot guarantee that all files are completely free from malware</li>
                  <li>Users should scan all downloads with updated antivirus software</li>
                  <li>Installation of APK files from unknown sources may pose security risks</li>
                  <li>We recommend creating device backups before installing modified applications</li>
                  <li>Users install and use downloaded content at their own risk</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Legal Compliance</h2>
              <div className="text-slate-600 space-y-4">
                <p>Users are responsible for ensuring their use of our website and downloads complies with local laws:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Copyright and trademark laws vary by jurisdiction</li>
                  <li>Some countries may prohibit the use of modified applications</li>
                  <li>Users should consult local legal advice if uncertain about legality</li>
                  <li>We are not liable for any legal consequences arising from use of our content</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">No Professional Advice</h2>
              <div className="text-slate-600 space-y-4">
                <p>The content on this website is for informational purposes only and should not be considered:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Professional technical advice</li>
                  <li>Legal advice</li>
                  <li>Financial advice</li>
                  <li>Official support or guidance from app developers</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Age Restrictions</h2>
              <div className="text-slate-600 space-y-4">
                <p>While Toca Boca games are designed for children, the use of modified versions requires:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Adult supervision for users under 18</li>
                  <li>Understanding of the risks involved in installing modified applications</li>
                  <li>Parental consent for minors accessing and downloading content</li>
                  <li>Parents should review all downloaded content before allowing children to use it</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Website Availability</h2>
              <div className="text-slate-600 space-y-4">
                <p>We make no guarantees about the availability or uptime of this website:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The website may be temporarily unavailable due to maintenance</li>
                  <li>Download links may become inactive or outdated</li>
                  <li>We reserve the right to modify or discontinue services at any time</li>
                  <li>No compensation will be provided for service interruptions</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Limitation of Liability</h2>
              <div className="text-slate-600 space-y-4">
                <p>To the maximum extent permitted by law, TocaBocaMod.org shall not be liable for any:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Direct, indirect, incidental, or consequential damages</li>
                  <li>Loss of data, revenue, or profits</li>
                  <li>Device damage or malfunction</li>
                  <li>Legal issues arising from use of downloaded content</li>
                  <li>Any damages exceeding the amount paid for our services (which is zero)</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Contact Information</h2>
              <div className="text-slate-600 space-y-4">
                <p>If you have questions about this disclaimer, please contact us:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Email: info@tocabocamod.org</li>
                  <li>Website: https://tocabocamod.org</li>
                </ul>
              </div>
            </div>

            <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200">
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                </svg>
                <div>
                  <p className="text-amber-800 font-semibold mb-2">Important Notice</p>
                  <p className="text-amber-700 text-sm">
                    <strong>Last Updated:</strong> January 2025 - This disclaimer is effective as of the date listed above. By using this website, you acknowledge that you have read, understood, and agree to be bound by this disclaimer.
                  </p>
                </div>
              </div>
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
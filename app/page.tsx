"use client"

import { useState } from 'react'

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Toca Boca Mod APK",
    "description": "Download Toca Boca Mod APK with all characters, furniture, and locations unlocked. Safe, virus-free installation with unlimited creativity.",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Android",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1250"
    },
    "publisher": {
      "@type": "Organization",
      "name": "TocaBoca Mod"
    },
    "downloadUrl": "https://download.gosuperfunny.com/toca.apk",
    "screenshot": "/tocabocaworld.jpg",
    "featureList": [
      "All characters unlocked",
      "500+ furniture items",
      "50+ locations available",
      "Unlimited creativity",
      "No root required",
      "Virus-free download"
    ]
  }

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Navigation */}
      <nav className="fixed top-0 w-full backdrop-blur-md bg-white/80 border-b border-gray-200/50 shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 via-teal-400 to-emerald-400 rounded-xl flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300">
                <span className="text-white font-bold text-xl drop-shadow-md">T</span>
              </div>
              <span className="font-bold text-2xl text-foreground">TocaBoca Mod</span>
            </a>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium"
              >
                Features
              </a>
              <a
                href="#guide"
                className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium"
              >
                How to Play
              </a>
              <a
                href="#faq"
                className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium"
              >
                FAQ
              </a>
              <a
                href="#download"
                className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium"
              >
                Download
              </a>
              <div className="relative group">
                <button className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium flex items-center">
                  Legal
                  <svg className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-2">
                    <a
                      href="/privacy"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                      rel="nofollow"
                    >
                      Privacy Policy
                    </a>
                    <a
                      href="/terms"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                      rel="nofollow"
                    >
                      Terms of Service
                    </a>
                    <a
                      href="/disclaimer"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                      rel="nofollow"
                    >
                      Disclaimer
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-muted-foreground hover:text-primary transition-colors p-2"
                aria-label="Toggle mobile menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200/50 bg-white/95 backdrop-blur-md">
              <div className="px-4 py-3 space-y-3">
                <a
                  href="#features"
                  className="block text-muted-foreground hover:text-primary transition-all duration-300 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Features
                </a>
                <a
                  href="#guide"
                  className="block text-muted-foreground hover:text-primary transition-all duration-300 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  How to Play
                </a>
                <a
                  href="#faq"
                  className="block text-muted-foreground hover:text-primary transition-all duration-300 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  FAQ
                </a>
                <a
                  href="#download"
                  className="block text-muted-foreground hover:text-primary transition-all duration-300 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Download
                </a>
                <div className="pt-2">
                  <div className="text-muted-foreground font-medium py-2 border-b border-gray-200">Legal</div>
                  <div className="pl-4 space-y-2 pt-2">
                    <a
                      href="/privacy"
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                      rel="nofollow"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Privacy Policy
                    </a>
                    <a
                      href="/terms"
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                      rel="nofollow"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Terms of Service
                    </a>
                    <a
                      href="/disclaimer"
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                      rel="nofollow"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Disclaimer
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-white via-pink-25 to-orange-25">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-50/30 via-rose-50/30 to-orange-50/30"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-pink-100/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-100/8 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-orange-100/6 rounded-full blur-2xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left order-1 lg:order-1 py-8">
              {/* Logo Section */}
              <div className="flex justify-center lg:justify-start mb-6">
                <img
                  src="/tocalifelogo.jpg"
                  alt="Toca Life Logo"
                  className="w-20 h-20 md:w-24 md:h-24 rounded-2xl drop-shadow-2xl hover:scale-110 transition-transform duration-500 border-2 border-white/50"
                />
              </div>

              {/* Badge */}
              <div className="inline-flex items-center bg-white/60 backdrop-blur-sm text-slate-600 px-4 py-2 rounded-full text-sm font-semibold mb-8 border border-slate-200 shadow-sm">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                2025 Latest Version • All Unlocked
              </div>

              {/* Main Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
                <span className="text-slate-800">Toca Boca Mod APK</span>
              </h1>

              {/* Subtitle */}
              <div className="text-xl sm:text-2xl text-slate-600 font-medium mb-6">
                Unlimited Creativity • All Characters Unlocked
              </div>

              {/* Description */}
              <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10 font-medium">
                Experience limitless creativity with instant access to all characters, locations, and furniture.
                No restrictions, no waiting - just pure creative freedom.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <a
                  href="https://download.gosuperfunny.com/toca.apk"
                  download="toca-boca-mod-apk.apk"
                  className="group relative bg-gradient-to-r from-pink-400 via-rose-500 to-orange-500 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl inline-block text-center"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-rose-600 to-orange-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"/>
                    </svg>
                    Download Free APK
                  </span>
                </a>
                <a
                  href="#guide"
                  className="border-2 border-slate-300 text-slate-600 px-8 py-5 rounded-2xl font-semibold text-lg hover:bg-slate-50 hover:text-slate-700 transition-all duration-300 inline-block"
                >
                  📱 Watch Gameplay
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-500">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  Virus Free
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  100% Safe
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  No Root Required
                </div>
              </div>
            </div>

            <div className="order-2 lg:order-2 py-8">
              {/* Hero Screenshot - Single Large Image */}
              <div className="relative group">
                {/* Background glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-pink-200/20 via-rose-200/20 to-orange-200/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>

                {/* Main container */}
                <div className="relative bg-white/80 backdrop-blur-lg border-2 border-pink-200/50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500">

                  {/* Main screenshot */}
                  <div className="relative overflow-hidden rounded-2xl group-hover:scale-105 transition-transform duration-700">
                    <img
                      src="/tocabocaworld.jpg"
                      alt="Toca Boca World - All Features Unlocked"
                      className="w-full h-auto shadow-lg"
                    />

                    {/* Always visible overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent">
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="text-white text-xl font-bold mb-2 drop-shadow-lg">🌟 All Features Unlocked</div>
                        <div className="text-white/90 text-sm drop-shadow-md">200+ Characters • 500+ Furniture • 50+ Locations</div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom stats */}
                  <div className="mt-6 bg-pink-50/80 backdrop-blur-sm rounded-2xl p-4 border border-pink-200/50">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-black text-orange-500 mb-1">200+</div>
                        <div className="text-xs text-slate-600 font-medium">Characters</div>
                      </div>
                      <div>
                        <div className="text-2xl font-black text-orange-600 mb-1">500+</div>
                        <div className="text-xs text-slate-600 font-medium">Furniture</div>
                      </div>
                      <div>
                        <div className="text-2xl font-black text-orange-700 mb-1">50+</div>
                        <div className="text-xs text-slate-600 font-medium">Locations</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Toca Boca Mod APK */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              What is Toca Boca Mod APK?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              A community-improved version that removes obstacles often encountered in free-to-play games
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Toca Boca Mod APK is a community-improved version of Toca Life World that removes obstacles often
                encountered in free-to-play games. Unlike the official version, this Toca Life World Mod APK gives you
                instant access to all the premium features, characters, and locations that require a special purchase.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                The official Toca Boca World offered a wonderful creative sandbox, but some of its funniest characters,
                fashionable clothes, and elaborate locations required a paid subscription. This Mod APK removes these
                limitations and reveals the full range of creative tools that make Toca Boca games so exciting.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                What makes this game different from typical mobile game mods is that it focuses on pure creativity
                rather than competitive advantage. The new update of the Toca Boca Mod APK maintains the kid-friendly
                philosophy of the original game and expands access to the content.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 float-animation">
              <h3 className="text-2xl font-bold text-foreground mb-8">Access to these items are available:</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 gradient-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Character Collection</div>
                    <div className="text-sm text-muted-foreground">
                      Over 200 unique characters with unique styles, special edition designs, and a seasonal avatar
                      collection featuring the diverse Toca Boca game universe.
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 gradient-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Furniture and Decor Library</div>
                    <div className="text-sm text-muted-foreground">
                      Over 500 items, from contemporary apartments to artistic palaces, including the popular Toca Boca
                      unlocked all furniture 2025 and home combinations.
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 gradient-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Accommodations</div>
                    <div className="text-sm text-muted-foreground">
                      More than 50 lush settings, from bustling hospitals and schools to peaceful resorts, are all part
                      of the broader Toca Life World experience.
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 gradient-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Wardrobe Options</div>
                    <div className="text-sm text-muted-foreground">
                      More than 300 costume combinations, covering all styles, seasons, and cultural themes, can reflect
                      any character personality or story concept.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Toca Boca Mod APK Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              What makes the Toca Boca Mod APK unique is that it removes any artificial limitations that can hinder the
              creative process
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mb-4">
                <span className="text-white text-xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Complete Creative Freedom</h3>
              <p className="text-muted-foreground leading-relaxed">
                This mod unlocks over 100 unique locations spread across 14 expansive map zones, each filled with
                interactive elements that respond to the player's creativity.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 gradient-secondary rounded-xl flex items-center justify-center mb-4">
                <span className="text-white text-xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Seamless Experience Design</h3>
              <p className="text-muted-foreground leading-relaxed">
                The happymod-style version features technical improvements that address common issues. Ads have been
                removed to keep the creative process moving along.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 gradient-accent rounded-xl flex items-center justify-center mb-4">
                <span className="text-white text-xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Education Unit</h3>
              <p className="text-muted-foreground leading-relaxed">
                The expanded Toca Boca Games retain the complex educational elements while expanding scope through
                role-playing scenarios.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mb-4">
                <span className="text-white text-xl">🔄</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Ongoing Content Change</h3>
              <p className="text-muted-foreground leading-relaxed">
                Regular content updates ensure that the game stays closely aligned with the official release and gives
                players full access to new features.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 gradient-secondary rounded-xl flex items-center justify-center mb-4">
                <span className="text-white text-xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Community-Centered Design</h3>
              <p className="text-muted-foreground leading-relaxed">
                Toca Boca extends the social elements to modified versions, promoting collaborative storytelling and
                shared creative projects.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 gradient-accent rounded-xl flex items-center justify-center mb-4">
                <span className="text-white text-xl">💎</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Simplified Resource Management</h3>
              <p className="text-muted-foreground leading-relaxed">
                This APK removes the need for in-game currency or unlock system and focuses on creative expression with
                unlimited access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Toca Boca Mod APK vs Regular Version
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Comparing the standard experience with the Mod APK reveals how different approaches affect creative
              expression
            </p>
          </div>

          <div className="bg-card rounded-2xl shadow-lg border border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="gradient-primary text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Feature</th>
                    <th className="px-6 py-4 text-left font-semibold">Regular Version</th>
                    <th className="px-6 py-4 text-left font-semibold">Mod APK Version</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-foreground">Premium Content Access</td>
                    <td className="px-6 py-4 text-muted-foreground">Unlock gradually with purchases</td>
                    <td className="px-6 py-4 text-primary font-medium">All content unlocked from start</td>
                  </tr>
                  <tr className="hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-foreground">Creative Resources</td>
                    <td className="px-6 py-4 text-muted-foreground">Limited by in-app progress</td>
                    <td className="px-6 py-4 text-primary font-medium">Unlimited resources instantly</td>
                  </tr>
                  <tr className="hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-foreground">Pet Interaction</td>
                    <td className="px-6 py-4 text-muted-foreground">Restricted to unlocked pets</td>
                    <td className="px-6 py-4 text-primary font-medium">All pets & accessories available</td>
                  </tr>
                  <tr className="hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-foreground">Character Customization</td>
                    <td className="px-6 py-4 text-muted-foreground">Partial wardrobe access</td>
                    <td className="px-6 py-4 text-primary font-medium">Full wardrobe & themes</td>
                  </tr>
                  <tr className="hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-foreground">World Exploration</td>
                    <td className="px-6 py-4 text-muted-foreground">Only purchased areas</td>
                    <td className="px-6 py-4 text-primary font-medium">All locations open</td>
                  </tr>
                  <tr className="hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-foreground">Uninterrupted Play</td>
                    <td className="px-6 py-4 text-muted-foreground">Some prompts appear</td>
                    <td className="px-6 py-4 text-primary font-medium">No ads, smooth play</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Latest Features of Toca Boca Mod APK v1.115
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              The update maintains compatibility with the latest official content while enabling immediate access to all
              features
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-shadow">
              <div className="gradient-primary w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-lg">🏠</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Educational Integration</h3>
              <p className="text-sm text-muted-foreground">
                Mail Placement features back-to-school themed items that support school year storytelling
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-shadow">
              <div className="gradient-secondary w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-lg">🌿</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Rural Experience</h3>
              <p className="text-sm text-muted-foreground">
                The Sweet Pea Cottage environment includes seven unique decor items for rural adventures
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-shadow">
              <div className="gradient-accent w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-lg">🏙️</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Urban Development</h3>
              <p className="text-sm text-muted-foreground">
                The Maple Avenue Mansion features multiple floors and garden courtyards
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-shadow">
              <div className="gradient-primary w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-lg">🎃</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Seasonal Celebrations</h3>
              <p className="text-sm text-muted-foreground">
                Halloween and Autumn Decorating Packs change the environment with seasonal themes
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-shadow">
              <div className="gradient-secondary w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-lg">🏕️</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Nature Exploration</h3>
              <p className="text-sm text-muted-foreground">
                Wildlife camping includes outdoor habitats and wildlife interaction opportunities
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-shadow">
              <div className="gradient-accent w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-lg">⭐</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Story of Luxury</h3>
              <p className="text-sm text-muted-foreground">
                The superstar's four-storey mansion with high-end furnishings and celebrity lifestyle accessories
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How to Download and Install the Toca Boca Mod APK?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              The installation steps are simple and work on most Android devices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card rounded-xl p-6 border border-border text-center">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Prepare the Device</h3>
              <p className="text-sm text-muted-foreground">
                Enable "Unknown Apps" feature in your device's security settings
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border text-center">
              <div className="w-16 h-16 gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Download Process</h3>
              <p className="text-sm text-muted-foreground">
                Visit tocabocamod.org to access the current version with latest features
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border text-center">
              <div className="w-16 h-16 gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Installation</h3>
              <p className="text-sm text-muted-foreground">
                Open the APK file from Downloads and follow the installation prompts
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border text-center">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">4</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Get Started</h3>
              <p className="text-sm text-muted-foreground">
                Launch the app and enjoy all unlocked features immediately
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="https://download.gosuperfunny.com/toca.apk"
              download="toca-boca-mod-apk.apk"
              className="gradient-primary text-white px-12 py-4 rounded-full font-semibold text-xl hover:opacity-90 transition-opacity shadow-lg bounce-gentle inline-block"
            >
              Download Toca Boca Mod APK
            </a>
            <p className="text-sm text-muted-foreground mt-4">Safe, tested, and virus-free download</p>
          </div>
        </div>
      </section>

      {/* About Toca Boca World */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">About Toca Boca World</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Originally known as Toca Life World, Toca Boca World celebrates the evolution of creative sandbox gaming
                for young players. The Swedish development team behind Toca Boca games is known for creating digital
                environments that prioritize imagination over competition, safety over effort, and creative
                differentiation over traditional gaming achievements.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The platform brings together the previously independent Toca Life apps — city, town, hospital, farm, and
                resort — into a cohesive world where characters and stories are seamlessly intertwined with the
                environment.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
              <h3 className="text-xl font-semibold text-foreground mb-6">Platform Features</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 gradient-primary rounded-full"></div>
                  <span className="text-muted-foreground">Multi-Platform Compatibility (Android, iOS, PC)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 gradient-secondary rounded-full"></div>
                  <span className="text-muted-foreground">Regular content updates with seasonal themes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 gradient-accent rounded-full"></div>
                  <span className="text-muted-foreground">Ad-free, family-friendly environment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 gradient-primary rounded-full"></div>
                  <span className="text-muted-foreground">Detailed character customization system</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 gradient-secondary rounded-full"></div>
                  <span className="text-muted-foreground">Environment design tools for complex projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Play Guide */}
      <section id="guide" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How to Play Toca Boca World?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              The gameplay emphasizes open-ended exploration rather than structured objectives
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-3">Character Development</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Creative expression begins with character customization, which allows players to change their
                  appearance, clothing, and accessories to suit any story concept or personal preference. Toca Boca's
                  free-to-play model means that you can't unlock all of the model's features.
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-3">Story Structure</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Moving between locations in Toca Life World triggers storytelling, as each environment offers
                  different scenarios and character interactions. Hospital settings can serve as inspiration for medical
                  tourism, while school settings support educational role-playing scenarios.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-3">Social Unity</h3>
                <p className="text-muted-foreground leading-relaxed">
                  While Toca Boca is primarily a single-player game, its free online component allows players to share
                  ideas about products and stories with friends and family. This social element often extends beyond the
                  digital environment.
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-3">Exploration and Collection</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Hidden elements and special interactions in different locations reward exploration and
                  experimentation. Players can achieve special animations, character reactions, and environmental
                  changes through the game.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-card rounded-2xl p-8 border border-border inline-block max-w-4xl">
              <h3 className="text-xl font-semibold text-foreground mb-6">📺 Gameplay Guide Video: Toca Life World for Beginners</h3>
              <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/uHFUVoS0LZ8"
                  title="Toca Life World | Guide for Beginners"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-muted-foreground mt-4 text-sm">Learn the basics of Toca Life World and discover all the creative possibilities!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Benefits of Toca Boca Mod APK</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Big developmental and educational benefits that extend well beyond simple entertainment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card rounded-xl p-6 border border-border text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">👥</span>
              </div>
              <h3 className="font-semibold text-foreground mb-3">Social Skill Development</h3>
              <p className="text-sm text-muted-foreground">
                Role-play scenes naturally teach social interaction patterns and community responsibility concepts
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💪</span>
              </div>
              <h3 className="font-semibold text-foreground mb-3">Confidence Improvement</h3>
              <p className="text-sm text-muted-foreground">
                Open-ended nature encourages independent thinking and confident decision-making without fear of failure
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🧩</span>
              </div>
              <h3 className="font-semibold text-foreground mb-3">Creative Problem Solving</h3>
              <p className="text-sm text-muted-foreground">
                Unlimited access enables complex creative projects that require planning and resource management
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🌟</span>
              </div>
              <h3 className="font-semibold text-foreground mb-3">Real World Skills</h3>
              <p className="text-sm text-muted-foreground">
                Game scenarios mirror real-world activities, providing safe spaces to explore adult roles and social
                systems
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">FAQs About Toca Boca Mod APK</h2>
            <p className="text-xl text-muted-foreground">Frequently asked questions about installation and features</p>
          </div>

          <div className="space-y-4">
            <details className="bg-card rounded-xl border border-border overflow-hidden">
              <summary className="px-6 py-4 font-semibold text-foreground cursor-pointer hover:bg-muted/50 transition-colors">
                Is this APK safe for devices?
              </summary>
              <div className="px-6 pb-4 text-muted-foreground">
                Once downloaded from tocabocamod.org, the Toca Boca Mod APK maintains the same security standards as the
                original application while providing enhanced access to content.
              </div>
            </details>

            <details className="bg-card rounded-xl border border-border overflow-hidden">
              <summary className="px-6 py-4 font-semibold text-foreground cursor-pointer hover:bg-muted/50 transition-colors">
                Does this Mod APK require internet connection for full functionality?
              </summary>
              <div className="px-6 pb-4 text-muted-foreground">
                Once installed, all Toca Boca games content functions completely offline. The full Toca Boca online free
                feature set and all unlocked content are included.
              </div>
            </details>

            <details className="bg-card rounded-xl border border-border overflow-hidden">
              <summary className="px-6 py-4 font-semibold text-foreground cursor-pointer hover:bg-muted/50 transition-colors">
                What divides the Mod APK from Toca Life World?
              </summary>
              <div className="px-6 pb-4 text-muted-foreground">
                Toca Life World represents the official version with gradual content unlocked, while Toca Boca Mod APK
                all unlocked provides access to all characters, locations, and Toca Boca unlimited everything features.
              </div>
            </details>

            <details className="bg-card rounded-xl border border-border overflow-hidden">
              <summary className="px-6 py-4 font-semibold text-foreground cursor-pointer hover:bg-muted/50 transition-colors">
                How frequently does new update release appear?
              </summary>
              <div className="px-6 pb-4 text-muted-foreground">
                Update follows the official release schedule, ensures that new Toca Boca unlocked all furniture 2025
                content and seasonal features become available shortly after official launches.
              </div>
            </details>

            <details className="bg-card rounded-xl border border-border overflow-hidden">
              <summary className="px-6 py-4 font-semibold text-foreground cursor-pointer hover:bg-muted/50 transition-colors">
                Does Toca Boca Mod APK download require rooting or special permissions?
              </summary>
              <div className="px-6 pb-4 text-muted-foreground">
                No rooting is necessary. The installation only requires enabling unknown source installations in device
                security settings.
              </div>
            </details>

            <details className="bg-card rounded-xl border border-border overflow-hidden">
              <summary className="px-6 py-4 font-semibold text-foreground cursor-pointer hover:bg-muted/50 transition-colors">
                Can progress transfer from official Toca Life World to toca life world Mod APK?
              </summary>
              <div className="px-6 pb-4 text-muted-foreground">
                Save data and progress remain separate between official and modified versions, so the Toca Boca free
                experience starts fresh with all content accessible.
              </div>
            </details>

            <details className="bg-card rounded-xl border border-border overflow-hidden">
              <summary className="px-6 py-4 font-semibold text-foreground cursor-pointer hover:bg-muted/50 transition-colors">
                Are Toca Boca Mod APK happymod versions completely ads free?
              </summary>
              <div className="px-6 pb-4 text-muted-foreground">
                The modification removes all ads content, providing uninterrupted Toca Boca online free gameplay with
                Toca Boca unlimited everything access.
              </div>
            </details>

            <details className="bg-card rounded-xl border border-border overflow-hidden">
              <summary className="px-6 py-4 font-semibold text-foreground cursor-pointer hover:bg-muted/50 transition-colors">
                How appropriate is this APK for different age groups?
              </summary>
              <div className="px-6 pb-4 text-muted-foreground">
                Toca Boca games maintain their child-friendly content standards in modified versions, though parental
                supervision remains recommended for younger users.
              </div>
            </details>

            <details className="bg-card rounded-xl border border-border overflow-hidden">
              <summary className="px-6 py-4 font-semibold text-foreground cursor-pointer hover:bg-muted/50 transition-colors">
                What troubleshooting steps help when Toca Boca Mod APK all installation fails?
              </summary>
              <div className="px-6 pb-4 text-muted-foreground">
                Common solutions include verifying adequate storage space, confirming unknown source permissions, and
                redownload from tocabocamod.org for authentic compatible files.
              </div>
            </details>
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
                <a href="#features" className="block text-gray-300 hover:text-white transition-colors">
                  Features
                </a>
                <a href="#download" className="block text-gray-300 hover:text-white transition-colors">
                  Download
                </a>
                <a href="#guide" className="block text-gray-300 hover:text-white transition-colors">
                  How to Play
                </a>
                <a href="#faq" className="block text-gray-300 hover:text-white transition-colors">
                  FAQ
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Download Options</h3>
              <div className="space-y-2 text-sm">
                <a href="#download" className="block text-gray-300 hover:text-white transition-colors">
                  Toca Boca Mod APK All Unblocked
                </a>
                <a href="#download" className="block text-gray-300 hover:text-white transition-colors">
                  Toca Boca Mod APK for iOS
                </a>
                <a href="#download" className="block text-gray-300 hover:text-white transition-colors">
                  Toca Boca Mod APK for PC
                </a>
                <a href="#download" className="block text-gray-300 hover:text-white transition-colors">
                  Toca Boca Mod APK AN1 Free Download
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Alternative Sources</h3>
              <div className="space-y-2 text-sm">
                <a href="#download" className="block text-gray-300 hover:text-white transition-colors">
                  Toca Boca Mod APK 5Play
                </a>
                <a href="#download" className="block text-gray-300 hover:text-white transition-colors">
                  Toca Boca Mod APK New Update
                </a>
                <a href="#download" className="block text-gray-300 hover:text-white transition-colors">
                  Toca Boca Mod APK Happymod
                </a>
                <a href="#download" className="block text-gray-300 hover:text-white transition-colors">
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
                <a href="#download" className="block text-gray-300 hover:text-white transition-colors">
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

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 w-12 h-12 gradient-primary rounded-full flex items-center justify-center text-white shadow-lg hover:opacity-90 transition-opacity z-50"
      >
        ↑
      </button>
    </div>
  )
}

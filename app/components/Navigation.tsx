"use client"

import { useState } from 'react'

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
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
              href="/#features"
              className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium"
            >
              Features
            </a>
            <a
              href="/#download"
              className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium"
            >
              Download
            </a>
            <a
              href="/#guide"
              className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium"
            >
              How to Play
            </a>
            <a
              href="/#faq"
              className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium"
            >
              FAQ
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
                href="/#features"
                className="block text-muted-foreground hover:text-primary transition-all duration-300 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="/#download"
                className="block text-muted-foreground hover:text-primary transition-all duration-300 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Download
              </a>
              <a
                href="/#guide"
                className="block text-muted-foreground hover:text-primary transition-all duration-300 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How to Play
              </a>
              <a
                href="/#faq"
                className="block text-muted-foreground hover:text-primary transition-all duration-300 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
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
  )
}
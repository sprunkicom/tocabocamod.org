"use client"

import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-pink-25 to-orange-25 flex items-center justify-center">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-50/30 via-rose-50/30 to-orange-50/30"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-100/8 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-100/8 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-orange-100/6 rounded-full blur-2xl"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white/80 backdrop-blur-lg border-2 border-pink-200/50 rounded-3xl p-12 shadow-xl">

          {/* Error Code */}
          <div className="mb-8">
            <div className="text-8xl sm:text-9xl font-black text-transparent bg-gradient-to-r from-pink-400 via-rose-500 to-orange-500 bg-clip-text mb-4">
              404
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Oops! Page Not Found
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The page you're looking for doesn't exist, but don't worry! You can still download the amazing Toca Boca Mod APK with all features unlocked.
            </p>
          </div>

          {/* Toca Boca Preview */}
          <div className="mb-8">
            <div className="relative inline-block">
              <img
                src="/tocabocaworld.jpg"
                alt="Toca Boca World Preview"
                className="w-80 h-48 object-cover rounded-2xl shadow-lg mx-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent rounded-2xl">
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-white font-bold text-lg drop-shadow-lg">🌟 All Features Unlocked</div>
                  <div className="text-white/90 text-sm drop-shadow-md">200+ Characters • 500+ Furniture • 50+ Locations</div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-4 border border-pink-200">
              <div className="text-2xl font-black text-pink-500 mb-1">200+</div>
              <div className="text-sm text-slate-600 font-medium">Unique Characters</div>
            </div>
            <div className="bg-gradient-to-r from-rose-50 to-orange-50 rounded-2xl p-4 border border-rose-200">
              <div className="text-2xl font-black text-rose-500 mb-1">500+</div>
              <div className="text-sm text-slate-600 font-medium">Furniture Items</div>
            </div>
            <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-2xl p-4 border border-orange-200">
              <div className="text-2xl font-black text-orange-500 mb-1">50+</div>
              <div className="text-sm text-slate-600 font-medium">Game Locations</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="https://download.gosuperfunny.com/toca.apk"
              download="toca-boca-mod-apk.apk"
              rel="nofollow"
              className="group relative bg-gradient-to-r from-pink-400 via-rose-500 to-orange-500 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl inline-block"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-rose-600 to-orange-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"/>
                </svg>
                Download Free APK Now
              </span>
            </a>
            <Link
              href="/"
              className="border-2 border-slate-300 text-slate-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-slate-50 hover:text-slate-700 transition-all duration-300 inline-block"
            >
              🏠 Back to Homepage
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
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

        {/* Quick Links */}
        <div className="mt-8 text-center">
          <p className="text-slate-600 mb-4">Or explore our popular sections:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/#features" className="text-pink-500 hover:text-pink-600 font-medium transition-colors">
              Features
            </Link>
            <Link href="/#guide" className="text-rose-500 hover:text-rose-600 font-medium transition-colors">
              How to Play
            </Link>
            <Link href="/#faq" className="text-orange-500 hover:text-orange-600 font-medium transition-colors">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
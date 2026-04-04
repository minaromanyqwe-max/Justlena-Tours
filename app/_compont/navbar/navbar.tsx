"use client"

import { useState, useEffect } from 'react'

import Link from 'next/link'
import { Sun, Moon, Globe, ChevronDown, Menu, X } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useLanguage } from '../language-provider'

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()
  const [mounted, setMounted] = useState(false)
  const [showLanguages, setShowLanguages] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'ar', name: 'العربية', flag: '🇪🇬' },
  ]

  const currentLang = languages.find(l => l.code === language)

  return (
    <nav className="bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="responsive-container py-3 sm:py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="text-xl sm:text-2xl font-black text-blue-600 dark:text-blue-400 tracking-tighter flex items-center gap-2 shrink-0">
          <span className="bg-blue-600 text-white p-1 rounded-lg text-lg">🌍</span>
          SUNRISE <span className="text-slate-900 dark:text-white">TOURS</span>
        </Link>

        {/* Links */}
        <div className="flex items-center gap-3 sm:gap-6 md:gap-8">
          <ul className="hidden lg:flex gap-6 xl:gap-8 items-center text-slate-600 dark:text-slate-300 font-bold text-sm uppercase tracking-wider">
            <li className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Link href="/">{t('home')}</Link>
            </li>
            <li className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Link href="/register">{t('explore')}</Link>
            </li>
            <li className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Link href="/Trips">{t('myTrips')}</Link>
            </li>
          </ul>

          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setShowLanguages(!showLanguages)}
                className="flex items-center gap-1.5 sm:gap-2 p-2 sm:p-2.5 rounded-2xl bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all border border-slate-200 dark:border-slate-800 shadow-sm font-bold text-xs uppercase tracking-tight"
              >
                <span className="text-base sm:text-lg">{currentLang?.flag}</span>
                <span className="hidden xs:inline">{currentLang?.code}</span>
                <ChevronDown size={14} className={`transition-transform duration-300 ${showLanguages ? 'rotate-180' : ''}`} />
              </button>

              {showLanguages && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200 z-[60]">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code as any)
                        setShowLanguages(false)
                      }}
                      className={`w-full flex items-center justify-between px-4 py-3.5 text-sm font-bold transition-all hover:bg-blue-50 dark:hover:bg-blue-900/20 ${language === lang.code ? 'text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/10' : 'text-slate-600 dark:text-slate-400'}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{lang.flag}</span>
                        <span>{lang.name}</span>
                      </div>
                      {language === lang.code && <div className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 sm:p-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all border border-slate-200 dark:border-slate-700 active:scale-90"
              >
                {theme === 'dark' ? <Sun size={16} className="sm:w-[18px] sm:h-[18px]" /> : <Moon size={16} className="sm:w-[18px] sm:h-[18px]" />}
              </button>
            )}
            
            <Link href="/register" className="hidden lg:block">
              <button className="bg-slate-900 dark:bg-blue-600 text-white px-5 xl:px-6 py-2.5 rounded-2xl text-sm font-bold shadow-lg shadow-blue-500/20 hover:scale-105 active:scale-95 transition-all uppercase whitespace-nowrap">
                {t('bookNow')}
              </button>
            </Link>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 sm:p-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 active:scale-95 transition-transform"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

      </div>

      {/* Mobile Menu Panel */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 absolute top-full left-0 w-full animate-in slide-in-from-top duration-300 shadow-xl z-50">
          <ul className="flex flex-col p-6 gap-4 text-slate-600 dark:text-slate-300 font-bold text-sm uppercase tracking-wider">
            <li className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors border-b border-slate-50 dark:border-slate-900 pb-2">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>{t('home')}</Link>
            </li>
            <li className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors border-b border-slate-50 dark:border-slate-900 pb-2">
              <Link href="/register" onClick={() => setIsMenuOpen(false)}>{t('explore')}</Link>
            </li>
            <li className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors border-b border-slate-50 dark:border-slate-900 pb-2">
              <Link href="/Trips" onClick={() => setIsMenuOpen(false)}>{t('myTrips')}</Link>
            </li>
            <li className="pt-2 lg:hidden">
              <Link href="/register" onClick={() => setIsMenuOpen(false)}>
                <button className="w-full bg-blue-600 text-white px-6 py-3.5 rounded-2xl text-sm font-bold shadow-lg shadow-blue-500/20 uppercase">
                  {t('bookNow')}
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Click outside to close (Languages) */}
      {showLanguages && <div className="fixed inset-0 z-50" onClick={() => setShowLanguages(false)} />}
      {/* Click outside to close (Mobile Menu) */}
      {isMenuOpen && <div className="fixed inset-0 z-[40]" onClick={() => setIsMenuOpen(false)} />}
    </nav>
  )
}
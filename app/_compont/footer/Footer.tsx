"use client";

import React from "react";
import { MapPin, Phone, Mail, Share2 } from "lucide-react";

// Custom Facebook Icon component to match Lucide style
const Facebook = ({ className, size = 24 }: { className?: string; size?: number | string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

// Custom Instagram Icon component to match Lucide style
const Instagram = ({ className, size = 24 }: { className?: string; size?: number | string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);
// Custom WhatsApp Icon component to match Lucide style
const WhatsApp = ({ className, size = 24 }: { className?: string; size?: number | string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-7.6 8.38 8.38 0 0 1 3.8.9L22 4Z" />
    <path d="M17 10l-2-2m0 0l-2 2m2-2v6" />
  </svg>
);


import Link from "next/link";
import { useLanguage } from "../language-provider";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-950 text-white mt-10 transition-colors duration-300 border-t border-slate-900">
      <div className="responsive-container py-20 footer-grid">

        {/* Brand */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 shrink-0">
            <span className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white w-10 h-10 flex items-center justify-center rounded-xl text-xl shadow-lg ring-1 ring-white/10">🌍</span>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight leading-none text-white">
                JUSTLENA
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-blue-500 mt-1 leading-none">
                Premium Tours
              </span>
            </div>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed font-medium">
            {t('footerDesc')}
          </p>
          <div className="flex gap-4">
            <Link href="https://instagram.com" target="_blank" className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all duration-300 ring-1 ring-white/5"><Instagram size={18} /></Link>
            <Link href="https://facebook.com" target="_blank" className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all duration-300 ring-1 ring-white/5"><Facebook size={18} /></Link>
            <button className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all duration-300 ring-1 ring-white/5"><Share2 size={18} /></button>
          </div>
        </div>

        {/* Navigation */}
        <div className="space-y-6">
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-blue-500">{t('navigation')}</h3>
          <ul className="space-y-3 text-slate-400 text-sm font-bold">
            <li className="hover:text-white transition-colors cursor-pointer"><Link href="/">{t('home')}</Link></li>
            <li className="hover:text-white transition-colors cursor-pointer"><Link href="/register">{t('exploreTours')}</Link></li>
            <li className="hover:text-white transition-colors cursor-pointer"><Link href="/About">{t('aboutUs')}</Link></li>
            <li className="hover:text-white transition-colors cursor-pointer"><Link href="/Trips">{t('myBookings')}</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div className="space-y-6">
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-blue-500">{t('support')}</h3>
          <ul className="space-y-3 text-slate-400 text-sm font-bold">
            <li className="hover:text-white transition-colors cursor-pointer">{t('privacyPolicy')}</li>
            <li className="hover:text-white transition-colors cursor-pointer">{t('termsOfService')}</li>
            <li className="hover:text-white transition-colors cursor-pointer">{t('refundPolicy')}</li>
            <li className="hover:text-white transition-colors cursor-pointer">{t('contactSupport')}</li>
          </ul>
        </div>

        {/* Contact info */}
        <div className="space-y-6">
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-blue-500">{t('connect')}</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4 group">
              <div className="p-2.5 bg-slate-900 rounded-xl group-hover:bg-blue-600/20 group-hover:text-blue-400 transition-all border border-slate-800 shadow-sm"><MapPin size={16} /></div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-slate-200">{t('sharmLocation')}</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mt-1">{t('sinaiEgypt')}</span>
              </div>
            </div>
            <div className="flex items-start gap-4 group">
              <div className="p-2.5 bg-slate-900 rounded-xl group-hover:bg-green-600/20 group-hover:text-green-400 transition-all border border-slate-800 shadow-sm"><WhatsApp size={16} /></div>
              <div className="flex flex-col">
                <Link href="https://wa.me/201286887581?text=Hello%20Justlena%20Tours!" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-slate-200 hover:text-green-400 transition-colors tracking-tight">+20 12 86887581</Link>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mt-1">{t('supportAvailable')}</span>
              </div>
            </div>
            <div className="flex items-start gap-4 group">
              <div className="p-2.5 bg-slate-900 rounded-xl group-hover:bg-blue-600/20 group-hover:text-blue-400 transition-all border border-slate-800 shadow-sm"><Mail size={16} /></div>
              <Link href="mailto:hanyneno70@gmail.com" className="text-sm font-bold text-slate-200 hover:text-blue-400 transition-colors py-2 tracking-tight">hanyneno70@gmail.com</Link>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-900 py-10 flex flex-col items-center justify-center gap-4 text-slate-500 text-[10px] font-black uppercase tracking-[0.3em]">
        <span>© {new Date().getFullYear()} JUSTLENA TOURS INTERNATIONAL. {t('allRightsReserved')}</span>
      </div>
    </footer>
  );
}
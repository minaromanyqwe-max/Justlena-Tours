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


import Link from "next/link";
import { useLanguage } from "../language-provider";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-950 text-white mt-10 transition-colors duration-300 border-t border-slate-900">
      <div className="responsive-container py-20 footer-grid">

        {/* Brand */}
        <div className="space-y-6">
          <div className="text-3xl font-black tracking-tighter flex items-center gap-2">
            <span className="bg-blue-600 text-white p-1 rounded-lg">🌍</span>
            SUNRISE <span className="text-blue-600">TOURS</span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed font-medium">
            {t('footerDesc')}
          </p>
          <div className="flex gap-4">
            <button className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 transition-colors"><Instagram size={18} /></button>
            <button className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 transition-colors"><Facebook size={18} /></button>
            <button className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 transition-colors"><Share2 size={18} /></button>
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
            <div className="flex items-start gap-3 group">
              <div className="p-2 bg-slate-900 rounded-lg group-hover:bg-blue-600/20 group-hover:text-blue-400 transition-colors"><MapPin size={16} /></div>
              <div className="text-sm font-bold text-slate-300">{t('sharmLocation')}, <span className="block text-slate-500 text-xs mt-1">{t('sinaiEgypt')}</span></div>
            </div>
            <div className="flex items-start gap-3 group">
              <div className="p-2 bg-slate-900 rounded-lg group-hover:bg-blue-600/20 group-hover:text-blue-400 transition-colors"><Phone size={16} /></div>
              <div className="text-sm font-bold text-slate-300">+20 1050017204 <span className="block text-slate-500 text-xs mt-1">{t('supportAvailable')}</span></div>
            </div>
            <div className="flex items-start gap-3 group">
              <div className="p-2 bg-slate-900 rounded-lg group-hover:bg-blue-600/20 group-hover:text-blue-400 transition-colors"><Mail size={16} /></div>
              <div className="text-sm font-bold text-slate-300">bookings@sunrisetours.com</div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-900 py-10 flex flex-col items-center justify-center gap-4 text-slate-500 text-[10px] font-black uppercase tracking-[0.3em]">
        <span>© {new Date().getFullYear()} SUNRISE TOURS INTERNATIONAL. {t('allRightsReserved')}</span>
      </div>
    </footer>
  );
}
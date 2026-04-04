"use client";

import React from 'react';
import { 
  Clock, MapPin, CheckCircle, XCircle, 
  Waves, CreditCard, Shirt, Bike, Info,
  ChevronRight, Calendar, Star, Users,
  Backpack, Wallet, ShieldCheck, Map as MapIcon
} from 'lucide-react';
import { toursDetail } from '../data';
import Link from 'next/link';
import { useLanguage } from '../../_compont/language-provider';

export default function TripPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = React.use(params);
  const id = parseInt(resolvedParams.id);
  const tour = toursDetail[id];
  const { t } = useLanguage();

  if (!tour) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-6">
        <div className="bg-white p-10 rounded-[3rem] shadow-xl text-center max-w-md border border-slate-100">
          <div className="w-20 h-20 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Info size={40} />
          </div>
          <h1 className="text-3xl font-black text-slate-800 mb-4">{t('tourNotFound')}</h1>
          <p className="text-slate-500 mb-8 font-medium leading-relaxed">
            {t('tourNotFoundDesc')}
          </p>
          <Link href="/register">
            <button className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-200">
              {t('returnToAll')}
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDFDFF] dark:bg-slate-950 font-sans transition-colors duration-300">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[65vh] w-full overflow-hidden">
        <img 
          src={tour.image} 
          alt={tour.title} 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
        
        <div className="absolute bottom-16 left-0 w-full px-6 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-blue-500/30">
                {t(tour.category)}
              </span>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-bold border border-white/20">
                <MapPin size={14} className="text-blue-400" /> {t(tour.location)}
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-bold border border-white/20">
                <Clock size={14} className="text-orange-400" /> {t(tour.duration)}
              </div>
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-white max-w-4xl tracking-tight leading-[1.1] drop-shadow-2xl">
              {t(tour.title)}
            </h1>
          </div>
        </div>
      </section>

      {/* --- CONTENT LAYOUT --- */}
      <div className="max-w-7xl mx-auto px-6 lg:px-24 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Main Content (Left) */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* Overview */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-8 bg-blue-600 rounded-full" />
                <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">{t('experienceOverview')}</h2>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-xl leading-[1.6] font-medium max-w-3xl">
                {t(tour.description)}
              </p>
            </div>

            {/* Program */}
            <div className="bg-slate-50/50 dark:bg-slate-900/50 p-10 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm">
              <h2 className="text-2xl font-black text-slate-800 dark:text-white mb-10 flex items-center gap-3">
                <Calendar className="text-blue-600 dark:text-blue-400" /> {t('tripItinerary')}
              </h2>
              <div className="space-y-0">
                {tour.program.map((step, i) => (
                  <div key={i} className="group flex gap-8 relative pb-10 last:pb-0">
                    {i !== tour.program.length - 1 && (
                      <div className="absolute left-[11px] top-8 bottom-0 w-[2px] bg-slate-200 dark:bg-slate-800" />
                    )}
                    <div className="relative z-10 w-6 h-6 rounded-full bg-white dark:bg-slate-900 border-[3px] border-blue-600 dark:border-blue-400 shadow-sm" />
                    <div className="space-y-1.5">
                      <span className="text-sm font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest leading-none block">
                        {step.t}
                      </span>
                      <p className="text-lg font-bold text-slate-700 dark:text-slate-300 leading-tight">
                        {t(step.a)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-emerald-50/50 dark:bg-emerald-900/10 p-8 rounded-[2.5rem] border border-emerald-100 dark:border-emerald-900/20 shadow-sm">
                <h3 className="text-xl font-black text-emerald-900 dark:text-emerald-400 mb-6 flex items-center gap-2">
                  <CheckCircle size={24} className="text-emerald-600 dark:text-emerald-500" /> {t('whatsIncluded')}
                </h3>
                <ul className="space-y-4">
                  {tour.included.map((item, i) => (
                    <li key={i} className="flex gap-3 text-emerald-800 dark:text-emerald-300/80 font-bold text-sm leading-snug">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                      {t(item)}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-rose-50/50 dark:bg-rose-900/10 p-8 rounded-[2.5rem] border border-rose-100 dark:border-rose-900/20 shadow-sm">
                <h3 className="text-xl font-black text-rose-900 dark:text-rose-400 mb-6 flex items-center gap-2">
                  <XCircle size={24} className="text-rose-600 dark:text-rose-500" /> {t('notIncluded')}
                </h3>
                <ul className="space-y-4">
                  {tour.notIncluded.map((item, i) => (
                    <li key={i} className="flex gap-3 text-rose-800 dark:text-rose-300/80 font-bold text-sm leading-snug">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0" />
                      {t(item)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Needs & Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="bg-amber-50/50 dark:bg-amber-900/10 p-8 rounded-[2.5rem] border border-amber-100 dark:border-amber-900/20 shadow-sm">
                  <h3 className="text-xl font-black text-amber-900 dark:text-amber-400 mb-6 flex items-center gap-2">
                    <Backpack size={24} className="text-amber-600 dark:text-amber-500" /> {t('essentialPacking')}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {tour.needs.map((item, i) => (
                      <span key={i} className="bg-white dark:bg-slate-800 border border-amber-200 dark:border-amber-900/30 px-3 py-1.5 rounded-xl text-xs font-black text-amber-700 dark:text-amber-400 uppercase tracking-tight">
                        {t(item)}
                      </span>
                    ))}
                  </div>
               </div>
               <div className="bg-slate-900 dark:bg-blue-900/20 p-8 rounded-[3rem] text-white shadow-xl shadow-slate-200 dark:shadow-none border border-transparent dark:border-blue-900/30">
                  <h3 className="text-xl font-black mb-6 flex items-center gap-2">
                    <ShieldCheck size={24} className="text-blue-400" /> {t('importantNotes')}
                  </h3>
                  <ul className="space-y-3 opacity-90">
                    {tour.additionalInfo.map((item, i) => (
                      <li key={i} className="text-xs font-medium leading-relaxed dark:text-blue-100/70">• {t(item)}</li>
                    ))}
                  </ul>
               </div>
            </div>
          </div>

          {/* Sidebar (Right) */}
          <aside className="lg:col-span-4">
            <div className="sticky top-10 space-y-6">
              <div className="bg-white dark:bg-slate-900 p-8 rounded-[3.5rem] shadow-2xl shadow-blue-100/50 dark:shadow-black/40 border border-slate-100 dark:border-slate-800">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest leading-none">{t('priceStartingFrom')}</span>
                    <div className="text-4xl font-black text-slate-900 dark:text-white mt-1">{tour.prices.adult}</div>
                  </div>
                  <div className="bg-yellow-400/10 text-yellow-600 p-3 rounded-2xl">
                    <Star size={24} fill="currentColor" />
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white dark:bg-slate-800 rounded-xl shadow-sm text-blue-600 dark:text-blue-400"><Users size={16} /></div>
                      <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{t('adults')}</span>
                    </div>
                    <span className="font-black text-slate-900 dark:text-white">{tour.prices.adult}</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white dark:bg-slate-800 rounded-xl shadow-sm text-pink-600 dark:text-pink-400"><Users size={16} /></div>
                      <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{t('child')}</span>
                    </div>
                    <span className="font-black text-slate-900 dark:text-white">{tour.prices.child}</span>
                  </div>
                  {tour.prices.under5 !== 'N/A' && (
                    <div className="flex justify-between items-center p-4 bg-emerald-50/50 dark:bg-emerald-900/10 rounded-2xl border border-emerald-100 dark:border-emerald-900/20">
                      <span className="text-sm font-bold text-emerald-800 dark:text-emerald-400">{t('under5')}</span>
                      <span className="font-black text-emerald-600 uppercase tracking-widest text-xs uppercase tracking-widest">{tour.prices.under5}</span>
                    </div>
                  )}
                  {tour.prices.additional?.map((add, idx) => (
                    <div key={idx} className="flex justify-between items-center p-4 bg-indigo-50/50 dark:bg-indigo-900/10 rounded-2xl border border-indigo-100 dark:border-indigo-900/20">
                      <span className="text-sm font-bold text-indigo-800 dark:text-indigo-400">{add.label}</span>
                      <span className="font-black text-indigo-600 dark:text-indigo-300 uppercase tracking-widest text-xs">{add.price}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 text-white py-5 rounded-[2.5rem] font-black text-lg transition-all shadow-xl shadow-blue-200 dark:shadow-none flex items-center justify-center gap-3 active:scale-95">
                  {t('bookThisExperience')}
                  <ChevronRight size={20} />
                </button>
                
                <p className="text-center mt-6 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                  {t('secureCheckout')}
                </p>
              </div>

              {/* Support Card */}
              <div className="bg-slate-900 dark:bg-indigo-950 p-8 rounded-[3.5rem] text-white overflow-hidden relative border border-transparent dark:border-indigo-900/30">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full -mr-16 -mt-16 blur-2xl" />
                <h4 className="text-lg font-black mb-2 relative z-10">{t('needAssistance')}</h4>
                <p className="text-sm text-slate-400 dark:text-slate-300 font-medium mb-6 relative z-10">{t('supportTeamDesc')}</p>
                <button className="w-full py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all border border-white/10 relative z-10">
                  {t('contactSupport')}
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
      
      {/* Related Section or Footer Padding */}
      <div className="h-20" />
    </div>
  );
}
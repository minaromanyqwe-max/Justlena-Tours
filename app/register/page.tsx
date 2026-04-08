"use client";

import React from 'react';
import { Clock, MapPin, Star, Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../_compont/language-provider';
import { tours } from '../_data/tours';

export default function Log() {
  const { t } = useLanguage();

  return (
    <main className="bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-300">
      {/* Premium Hero Section */}
      <div className="relative w-full h-[80vh] overflow-hidden group">
        <Image
          src="/img/re6.jpg"
          alt="Hero"
          fill
          priority
          className="object-cover transition-transform duration-[3s] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-slate-900/40 to-slate-50 dark:to-slate-950" />

        <div className="relative h-full responsive-container flex flex-col items-center justify-center text-center py-20">
          <div className="inline-block px-4 py-1.5 bg-blue-500/20 backdrop-blur-md text-blue-100 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider mb-6 border border-white/10 animate-fade-in shadow-xl">
            {t('discoveryAwaits')}
          </div>
          <h1 className="text-responsive-h1 text-white mb-6 drop-shadow-2xl px-4 font-black">
            {t('exclusive')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">{t('experiences')}</span>
          </h1>
          <p className="max-w-2xl text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 font-medium leading-relaxed drop-shadow-lg mb-10">
            {t('heroDesc')}
          </p>

          <div className="flex flex-wrap justify-center gap-2 md:gap-3 lg:gap-4">
            {[
              { id: 'all', label: t('all') },
              { id: 'daily', label: t('daily') },
              { id: 'safari', label: t('safari') },
              { id: 'seaTrips', label: t('seaTrips') }
            ].map((filter) => (
              <button
                key={filter.id}
                className={`px-5 md:px-8 lg:px-10 py-2.5 md:py-3 lg:py-4 rounded-2xl text-xs md:text-sm lg:text-base font-bold transition-all duration-300 backdrop-blur-md ${filter.id === "all"
                  ? "bg-white text-slate-900 shadow-2xl scale-105"
                  : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                  }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="section-padding responsive-container">
        <div className="grid-responsive">
          {tours.filter(Boolean).map((tour) => (
            <div
              key={tour.id}
              className="group bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_rgba(37,99,235,0.15)] transition-all duration-700 border border-slate-100/50 dark:border-slate-800 flex flex-col h-full relative group"
            >
              <div className="relative h-64 sm:h-72 lg:h-80 xl:h-72 2xl:h-80 overflow-hidden">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                <div className="absolute top-5 left-5 flex flex-col gap-2 items-start">
                  <span className="backdrop-blur-xl bg-white/20 text-white border border-white/30 px-4 py-2 rounded-2xl text-[10px] font-black uppercase tracking-[0.1em] shadow-xl">
                    {t(tour.category)}
                  </span>
                  <span className="backdrop-blur-xl bg-blue-600/80 text-white border border-blue-400/30 px-3 py-1.5 rounded-xl text-sm font-black shadow-xl">
                    {tour.price}
                  </span>
                </div>

                <div className="absolute top-5 right-5">
                  <button className="backdrop-blur-xl bg-black/20 hover:bg-white text-white hover:text-red-500 p-2.5 rounded-2xl transition-all duration-300 border border-white/20 group/fav">
                    <Star className="w-4 h-4 group-hover/fav:fill-red-500 group-hover/fav:stroke-red-500" />
                  </button>
                </div>

                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-3 h-3 ${i < Math.floor(tour.rating) ? 'fill-current' : ''}`} />
                        ))}
                      </div>
                      <span className="text-white text-xs font-bold">{tour.rating}</span>
                      <span className="text-white/60 text-[10px]">({tour.reviews})</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-7 lg:p-8 flex flex-col flex-grow relative">
                <div className="flex items-start gap-2 text-blue-600 dark:text-blue-400 mb-3">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  <span className="text-[11px] lg:text-xs font-black uppercase tracking-widest leading-tight line-clamp-1">{t(tour.location)}</span>
                </div>

                <h3 className="text-xl lg:text-2xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-4 lg:mb-6 leading-tight line-clamp-2 uppercase tracking-tight">
                  {t(tour.title)}
                </h3>

                <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6 lg:mb-8">
                  <div className="flex items-center gap-2 md:gap-2.5 p-2 md:p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 group-hover:border-blue-100 dark:group-hover:border-blue-800 transition-colors duration-500 font-medium">
                    <Clock className="w-4 h-4 text-slate-400 group-hover:text-blue-500" />
                    <span className="text-[10px] md:text-[11px] text-slate-600 dark:text-slate-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 font-bold uppercase tracking-tighter">{t(tour.duration)}</span>
                  </div>
                  <div className="flex items-center gap-2 md:gap-2.5 p-2 md:p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/20 group-hover:border-indigo-100 dark:group-hover:border-indigo-800 transition-colors duration-500 font-medium">
                    <Calendar className="w-4 h-4 text-slate-400 group-hover:text-indigo-500" />
                    <span className="text-[10px] md:text-[11px] text-slate-600 dark:text-slate-400 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 font-bold uppercase tracking-tighter">{t('daily')}</span>
                  </div>
                </div>

                <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-5">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex -space-x-3 overflow-hidden">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-slate-900 bg-slate-200 dark:bg-slate-700 overflow-hidden shrink-0 transition-transform hover:scale-110 hover:z-10 cursor-pointer relative">
                          <Image
                            src={`https://i.pravatar.cc/100?img=${i + 15}`}
                            alt="user"
                            fill
                            unoptimized
                            className="object-cover"
                          />
                        </div>
                      ))}
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 dark:bg-slate-100 text-[10px] font-bold text-white dark:text-slate-900 ring-2 ring-white dark:ring-slate-900 shrink-0">
                        +12
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-[9px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.2em] leading-none mb-1">{t('Justlena Tours')}</span>
                      <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 italic">“{t('bestExperience')}”</span>
                    </div>
                  </div>
                  <Link href={`/register/${tour.id}`} className="w-full">
                    <button className="flex items-center justify-center gap-3 bg-slate-900 dark:bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-500 text-white px-8 py-4 rounded-2xl transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/25 active:scale-[0.98] group/btn w-full relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                      <span className="relative z-10 text-sm lg:text-base font-black uppercase tracking-wider">{t('bookNow')}</span>
                      <ArrowRight className="relative z-10 w-5 h-5 transition-transform duration-500 group-hover/btn:translate-x-2" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

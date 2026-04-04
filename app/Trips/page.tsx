"use client";

import React from 'react';
import { Calendar, MapPin, Clock, ArrowRight, Star, Heart } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '../_compont/language-provider';

const myTrips = [
  {
    id: 1,
    title: "White Island & Ras Mohammed",
    date: "Dec 15, 2026",
    status: "Upcoming",
    image: "/img/re1.jpg",
    price: "$23",
    location: "Sharm El Sheikh"
  },
  {
    id: 2,
    title: "Quad Bike Desert Safari",
    date: "Nov 20, 2026",
    status: "Completed",
    image: "/img/re2.jpg",
    price: "$15",
    location: "Sinai Desert"
  }
];

export default function TripsPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="responsive-container py-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter mb-4">
              {t('myTrips').split(' ')[0]} <span className="text-blue-600 dark:text-blue-400">{t('myAdventures').split(' ')[1] || t('myAdventures')}</span>
            </h1>
            <p className="text-slate-500 dark:text-slate-400 font-medium text-lg">
              {t('manageBookings')}
            </p>
          </div>
          
          <div className="flex bg-white dark:bg-slate-900 p-1.5 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
            {[
              { id: 'appointments', label: t('appointments') },
              { id: 'history', label: t('history') },
              { id: 'wishlist', label: t('wishlist') }
            ].map((tab, i) => (
              <button 
                key={tab.id} 
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${i === 0 ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Trips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {myTrips.map((trip) => (
            <div key={trip.id} className="group flex flex-col sm:flex-row bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl dark:hover:shadow-black/40 transition-all duration-500">
              <div className="sm:w-48 h-48 sm:h-auto relative overflow-hidden">
                <img src={trip.image} alt={trip.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${trip.status === 'Upcoming' ? 'bg-emerald-500 text-white' : 'bg-slate-500 text-white'}`}>
                  {trip.status}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                      <MapPin size={14} />
                      <span className="text-[10px] font-black uppercase tracking-widest">{trip.location}</span>
                    </div>
                    <h3 className="text-xl font-black text-slate-800 dark:text-white leading-tight">{trip.title}</h3>
                  </div>
                  <button className="text-slate-300 hover:text-red-500 transition-colors">
                    <Heart size={20} fill={trip.id === 1 ? "currentColor" : "none"} className={trip.id === 1 ? "text-red-500" : ""} />
                  </button>
                </div>

                <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400 text-xs font-bold mb-8">
                  <div className="flex items-center gap-1.5"><Calendar size={14} /> {trip.date}</div>
                  <div className="flex items-center gap-1.5"><Clock size={14} /> 09:00 AM</div>
                </div>

                <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-50 dark:border-slate-800">
                  <div className="text-2xl font-black text-slate-900 dark:text-white">{trip.price}</div>
                  <Link href={`/register/${trip.id}`}>
                    <button className="flex items-center gap-2 text-sm font-black text-blue-600 dark:text-blue-400 hover:gap-3 transition-all group/btn">
                      {t('viewDetails')} <ArrowRight size={16} />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
          
          <Link href="/register" className="flex items-center justify-center border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-12 hover:bg-white dark:hover:bg-slate-900 hover:border-blue-300 dark:hover:border-blue-800 transition-all group">
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                <Star size={30} />
              </div>
              <p className="text-slate-800 dark:text-slate-200 font-black text-lg">{t('planNewAdventure')}</p>
              <p className="text-slate-400 text-sm font-medium">{t('explorePremium')}</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

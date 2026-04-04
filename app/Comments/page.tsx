"use client";

import React from 'react';
import { MessageSquare, Clock } from 'lucide-react';
import { useLanguage } from '../_compont/language-provider';

export default function CommentsPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center p-6 transition-colors duration-300">
      <div className="bg-white dark:bg-slate-900 p-12 rounded-[3rem] shadow-2xl text-center max-w-lg border border-slate-100 dark:border-slate-800 animate-in fade-in zoom-in duration-700">
        <div className="w-24 h-24 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
          <MessageSquare size={44} />
        </div>
        
        <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
          {t('reviews')}
        </h1>
        
        <div className="flex items-center justify-center gap-2 bg-amber-50 dark:bg-amber-900/10 text-amber-700 dark:text-amber-400 px-6 py-3 rounded-2xl border border-amber-100 dark:border-amber-900/20 mb-8 mx-auto w-fit">
          <Clock size={18} />
          <span className="font-bold uppercase tracking-widest text-xs">Coming Soon</span>
        </div>
        
        <p className="text-slate-500 dark:text-slate-400 mb-10 font-medium leading-relaxed text-lg">
          We are currently gathering all your amazing feedback to create a premium reviews experience. Stay tuned!
        </p>
        
        <button 
          onClick={() => window.history.back()}
          className="w-full bg-slate-900 dark:bg-blue-600 text-white py-5 rounded-[1.5rem] font-black uppercase tracking-widest text-sm hover:bg-blue-600 dark:hover:bg-blue-500 transition-all shadow-xl hover:shadow-blue-200 dark:hover:shadow-blue-900/40 active:scale-95"
        >
          {t('returnToAll')}
        </button>
      </div>
    </div>
  );
}

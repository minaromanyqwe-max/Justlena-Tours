"use client";

import { Sparkles, Globe, ShieldCheck, Heart, Users, Map as MapIcon } from 'lucide-react'
import { useLanguage } from '../_compont/language-provider';

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 font-sans transition-colors duration-300">

      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] bg-[url('/img/re26.jpg')] bg-cover bg-center overflow-hidden">
        {/* Advanced Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-slate-950/40 to-white dark:to-slate-950"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 max-w-5xl mx-auto">
          <div className="inline-block px-4 py-1.5 bg-blue-500/20 backdrop-blur-md text-blue-100 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8 border border-white/10 animate-fade-in shadow-xl">
            {t('ourStory')}
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8 drop-shadow-2xl uppercase">
            {t('makingEveryMoment')}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-medium max-w-2xl leading-relaxed">
            {t('discoverPassion')}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="section-padding responsive-container">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-2 h-10 bg-blue-600 rounded-full" />
              <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-none uppercase">
                {t('whoWeAre')}
              </h2>
            </div>
            <p className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-[1.7]">
              {t('whoWeAreDesc')}
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-100 dark:border-slate-800">
                <div className="text-3xl font-black text-blue-600 dark:text-blue-400 mb-1 leading-none uppercase tracking-tighter">15K+</div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-none">
                  {t('happyTravelers')}
                </div>
              </div>
              <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-100 dark:border-slate-800">
                <div className="text-3xl font-black text-emerald-600 dark:text-emerald-400 mb-1 leading-none uppercase tracking-tighter">99.8%</div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-none">
                  {t('safetyRating')}
                </div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/20 to-indigo-600/20 rounded-[3rem] blur-2xl group-hover:opacity-100 transition duration-1000"></div>
            <img
              src="/img/re25.jpg"
              alt="travel"
              className="relative w-full h-[500px] object-cover rounded-[3rem] shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Globe, title: t('passionateExperts'), desc: t('expertsDesc'), color: "blue" },
            { icon: Sparkles, title: t('tailoredExperience'), desc: t('tailoredDesc'), color: "indigo" },
            { icon: Heart, title: t('safetyComfort'), desc: t('safetyDesc'), color: "rose" },
            { icon: Users, title: t('localPresence'), desc: t('localDesc'), color: "emerald" }
          ].map((feature, i) => (
            <div key={i} className="group p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl dark:hover:shadow-black/40 transition-all duration-500 hover:scale-[1.05]">
              <div className={`w-14 h-14 bg-${feature.color}-500/10 text-${feature.color}-600 dark:text-${feature.color}-400 rounded-2xl flex items-center justify-center mb-6 shadow-inner ring-1 ring-inset ring-${feature.color}-500/10`}>
                <feature.icon size={28} />
              </div>
              <h3 className="font-black text-xl text-slate-800 dark:text-white mb-3 uppercase tracking-tight">
                {feature.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 font-medium text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-40 text-center relative max-w-4xl mx-auto">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-8xl font-black text-slate-100 dark:text-slate-900/40 select-none -z-10 tracking-widest uppercase">
            Sunrise
          </div>
          <p className="text-2xl text-slate-700 dark:text-slate-300 font-bold mb-6 italic leading-relaxed uppercase tracking-tighter">
            "{t('masterpiece')}"
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-10 shadow-lg shadow-blue-500/30" />
          <span className="text-slate-900 dark:text-white font-black text-3xl uppercase tracking-tighter block">
            SHARM EL-SHEIKH, <span className="text-blue-600 dark:text-blue-400">{t('egypt')}</span>
          </span>
        </div>
      </div>

    </div>
  )
}
"use client";

import React from 'react';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white dark:bg-slate-950 transition-colors duration-500">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 dark:bg-blue-600/5 blur-[120px] rounded-full animate-pulse" />
      
      {/* Loading Container */}
      <div className="relative flex flex-col items-center gap-10">
        {/* The Animated Icon Container */}
        <div className="relative">
          {/* Outer Rotating Ring */}
          <div className="absolute inset-[-15px] border-[3px] border-blue-600/20 dark:border-blue-400/10 rounded-[2.5rem] animate-[spin_4s_linear_infinite]" />
          {/* Inner Rotating Ring */}
          <div className="absolute inset-[-30px] border-[2px] border-indigo-600/10 dark:border-indigo-400/5 rounded-[3.5rem] animate-[spin_8s_linear_infinite_reverse]" />
          
          {/* Main Logo Card */}
          <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 text-white w-24 h-24 flex items-center justify-center rounded-[2.5rem] text-5xl shadow-[0_20px_50px_rgba(37,99,235,0.3)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] ring-4 ring-white dark:ring-slate-900 overflow-hidden transform transition-transform duration-700 hover:scale-110">
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-30" />
            <span className="animate-bounce">🌍</span>
          </div>
          
          {/* Floating Orbiting Dots */}
          <div className="absolute -top-6 -right-6 w-5 h-5 bg-blue-500 rounded-full blur-[2px] animate-ping" />
          <div className="absolute -bottom-6 -left-6 w-4 h-4 bg-indigo-500 rounded-full blur-[2px] animate-ping [animation-delay:1.5s]" />
          <div className="absolute -top-6 -left-6 w-3 h-3 bg-cyan-400 rounded-full blur-[1px] animate-pulse [animation-delay:0.7s]" />
        </div>

        {/* Text Area */}
        <div className="flex flex-col items-center text-center">
          <div className="flex flex-col gap-2 items-center mb-6">
            <div className="flex items-center gap-3">
              <span className="text-3xl font-black tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 dark:from-blue-400 dark:via-indigo-400 dark:to-blue-400">
                JUSTLENA
              </span>
              <span className="text-slate-900 dark:text-white font-black text-3xl tracking-tight">TOURS</span>
            </div>
            <div className="w-12 h-1 bg-blue-600 rounded-full animate-pulse" />
          </div>
          
          {/* Animated Loading Bar */}
          <div className="w-64 h-1.5 bg-slate-100 dark:bg-slate-900/50 rounded-full overflow-hidden relative shadow-inner">
            <div 
              className="absolute h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 w-1/3 rounded-full" 
              style={{ animation: 'loadingProgress 1.5s cubic-bezier(0.65, 0, 0.35, 1) infinite' }}
            />
          </div>
          
          {/* Loading Subtext */}
          <div className="mt-6 flex flex-col gap-2">
            <span className="text-[11px] font-black tracking-[0.5em] uppercase text-slate-500 dark:text-slate-400 leading-none">
              Preparing your journey
            </span>
            <span className="text-[10px] font-medium text-slate-400 dark:text-slate-500 italic opacity-70">
              Discovering unique experiences just for you...
            </span>
          </div>
        </div>
      </div>

      {/* Decorative Corners */}
      <div className="absolute top-10 left-10 w-20 h-20 border-l-2 border-t-2 border-slate-100 dark:border-slate-900 rounded-tl-3xl opacity-50" />
      <div className="absolute bottom-10 right-10 w-20 h-20 border-r-2 border-b-2 border-slate-100 dark:border-slate-900 rounded-br-3xl opacity-50" />
    </div>
  );
}

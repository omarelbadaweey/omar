"use client";

import React from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Terminal, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-[#07080c] text-slate-100 flex items-center justify-center p-6 overflow-hidden font-sans select-none">
      {/* خلفية Glow نيون ناعمة */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-cyan-500/10 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-sky-900/10 blur-[160px] rounded-full pointer-events-none" />

      {/* Grid Pattern خلفية خفيفة */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-2xl w-full flex flex-col items-center text-center">
        
        {/* عنصر الصورة / الـ Visual 404 */}
        <div className="relative flex items-center justify-center mb-8">
          {/* النص العملاق 404 في الخلفية */}
          <h1 className="text-[140px] sm:text-[180px] font-extrabold text-transparent bg-clip-text bg-linear-to-b from-slate-800/80 to-slate-900/20 leading-none tracking-tighter select-none">
            404
          </h1>

          {/* الكارت/الأيقونة المتحركة في منتصف الرقم */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="absolute p-6 rounded-3xl bg-[#121316]/90 border border-slate-800 backdrop-blur-xl shadow-[0_0_50px_rgba(6,182,212,0.15)] flex flex-col items-center justify-center"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 mb-2 shadow-[0_0_20px_rgba(6,182,212,0.2)]"
            >
              <AlertTriangle className="w-10 h-10" />
            </motion.div>
            
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-900/80 px-3 py-1 rounded-full border border-slate-800">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>ERR_PAGE_NOT_FOUND</span>
            </div>
          </motion.div>
        </div>

        {/* العناوين والوصف */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="space-y-3"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-wide">
            Oops! Page Lost in Cyberspace
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-md mx-auto leading-relaxed">
            الصفحة اللي بتدور عليها مش موجودة أو تم نقلها لمكان تاني. تأكد من الرابط أو ارجع للصفحة الرئيسية.
          </p>
        </motion.div>

        {/* أزرار التوجيه */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-8"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs sm:text-sm font-bold transition-all duration-300 hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_25px_rgba(6,182,212,0.4)]"
          >
            <Home className="w-4 h-4" /> Go to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#121316] border border-slate-800 text-slate-300 text-xs sm:text-sm font-bold transition-all duration-300 hover:border-slate-600 hover:text-white cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> Go Back
          </button>
        </motion.div>

      </div>
    </div>
  );
}
"use client";
import Link from 'next/link';

export default function AboutPage() {
  return (

      <main className="relative z-10 flex min-h-[calc(100vh-80px)] w-full flex-col items-center justify-center px-6 py-16 text-center">
        {/* Glow Badge Top */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold text-cyan-400 backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
          GET TO KNOW ME
        </div>

        {/* Hero-style Main Heading */}
        <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl">
          شغوف ببدع التجارب الرقمية <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-violet-500">
            وواجهات المستخدم الحديثة
          </span>
        </h1>

        {/* Subtitle / Bio */}
        <p className="mt-6 max-w-2xl text-base text-slate-300 sm:text-lg md:text-xl leading-relaxed">
          أنا <strong className="text-white font-semibold">عمر البدوي</strong>، مطور ويب متخصص في بناء تطبيقات متكاملة باستخدام بيئة <span className="text-cyan-400">MERN Stack</span>. أركز على تفاصيل الأداء، الحركة، والكود النظيف لإخراج منتجات احترافية وممتعة في الاستخدام.
        </p>

        {/* Action Buttons (Hero Style) */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/#contact"
            className="rounded-xl bg-cyan-400 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/25 transition-all duration-200 hover:bg-cyan-300 hover:shadow-cyan-500/40 hover:-translate-y-0.5"
          >
            تواصل معي
          </Link>
          <Link
            href="/"
            className="rounded-xl border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-200 hover:border-white/20 hover:bg-white/10 hover:-translate-y-0.5"
          >
            الرئيسية ←
          </Link>
        </div>

        {/* Glassmorphic Stats Grid */}
        <div className="mt-16 grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/40 hover:bg-white/10 hover:-translate-y-1">
            <h3 className="text-3xl font-extrabold text-cyan-400 sm:text-4xl">MERN</h3>
            <p className="mt-2 text-xs font-medium text-slate-400 uppercase tracking-wider">Stack Focus</p>
          </div>

          <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/40 hover:bg-white/10 hover:-translate-y-1">
            <h3 className="text-3xl font-extrabold text-violet-400 sm:text-4xl">Clean UI</h3>
            <p className="mt-2 text-xs font-medium text-slate-400 uppercase tracking-wider">Design & Animation</p>
          </div>

          <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/40 hover:bg-white/10 hover:-translate-y-1">
            <h3 className="text-3xl font-extrabold text-teal-300 sm:text-4xl">Fast</h3>
            <p className="mt-2 text-xs font-medium text-slate-400 uppercase tracking-wider">Performance & SEO</p>
          </div>
        </div>
      </main>
  
  );
}
"use client";
import { ArrowUpRightFromCircle } from "lucide-react";
import Link from "next/link";

function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen  text-white flex flex-col justify-between p-6 sm:p-8 md:p-16 overflow-hidden select-none font-sans"
    >
      {/* 1. فيديو الخلفية المخصص (ضع ملف الفيديو الخاص بك داخل مجلد public باسم hero-bg.mp4) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/poster.png"
          className="w-full h-full object-cover opacity-80"
        >
          <source src="/hero3.mp4" type="video/mp4" />
        </video>

        {/* طبقات Gradients للدمج التلقائي مع حواف الشاشة ولإبراز الكلام */}
        <div className="absolute inset-0 bg-linear-to-r from-[#07090E] via-[#07090E]/60 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-[#07090E] via-transparent to-[#07090E]/30" />
      </div>

      {/* 2. المحتوى الرئيسي (Hero Content) */}
      <div className="relative z-10 max-w-2xl my-auto space-y-6 sm:space-y-8 pt-12 mt-15 sm:pt-0">
        {/* شارة التنبيه (Badge) */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs sm:text-sm font-medium text-gray-300 shadow-sm hover:border-white/20 transition-all duration-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="flex gap-2 items-center">
            Full Stack Developer{" "}
            <pre className="text-blue-400 font-bold">&lt;/&gt;</pre>
          </span>{" "}
        </div>

        {/* العنوان الرئيسي (Title) */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.15] sm:leading-[1.1]">
          Hi, I`m <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-gray-100 to-gray-400">
            Omar El-Badawey.
          </span>
        </h1>

        {/* الوصف (Subtitle) */}
        <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-2xl font-normal leading-relaxed">
          Full-Stack Web Developer with 4+ years of expertise in crafting
          high-performance Frontend experiences and 2+ years scaling robust
          Backend systems. I specialize in building ultra-fast, modern, and
          SEO-optimized web applications with sleek UI animations and scalable
          architecture.
        </p>
        {/* الأزرار (CTA Buttons) */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
          <Link
            href={"/#projects"}
            className="group flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white text-black font-medium text-sm hover:bg-gray-100 transition-all duration-200 shadow-lg shadow-white/5 active:scale-95"
          >
            <span>View Projects</span>
            <span className="group-hover:translate-x-1 transition-transform duration-200">
              <ArrowUpRightFromCircle />
            </span>
          </Link>

          <a
            href="/cv.pdf"
            className="flex items-center gap-5 justify-center px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium text-sm border border-white/10 backdrop-blur-md transition-all duration-200 active:scale-95"
          >
            View My CV <ArrowUpRightFromCircle />
          </a>
        </div>
      </div>
    </section>
  );
}
export default Hero;

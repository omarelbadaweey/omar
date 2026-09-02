
"use client";

import { skillsData } from "./data/data";
import StrokeText from "./ui/StrokeText";

export const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="relative w-full min-h-screen py-20 px-4 sm:px-8 text-slate-100 flex flex-col items-center justify-center font-sans select-none bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/bg.png')", // مسار الصورة داخل مجلد public مباشرة
      }}
    >
      {/* طبقة تظليل سوداء شفافة اختيارية عشان الكروت والنص يقرو بشكل واضح فوق الصورة */}
      <div className="absolute inset-0 z-0 pointer-events-none" />

      {/* 1. Title Skills */}
      <div className="relative z-10 flex flex-col items-center mb-12">
        <StrokeText
          text="My Skills"
          strokeColor="#cbc5c5"
          fillColor="#cbc5c5"
          strokeWidth={1}
          drawDuration={1.4}
          fillDelay={0.1}
          stagger={0.04}
          ease="power2.out"
          trigger="loop"
          fillMode="wipe"
          fontSize={75}
          fontWeight={800}
          letterSpacing={0}
          reverse={false}
          className="relative z-10"
        />
        <span className="border-b-4 border-[#e8e0e0] w-48 rounded-full block mt-2"></span>
      </div>

      {/* 2. شبكة المهارات (Nodes Grid) فوق الخلفية */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 max-w-7xl w-full">
        {skillsData.map((skill) => (
          <div
            key={skill.name}
            className="group relative flex flex-col items-center justify-center p-6 rounded-3xl bg-[#16171a]/80 border border-zinc-800/80 backdrop-blur-md transition-all duration-200 hover:border-cyan-400 hover:bg-[#1a1c21] hover:-translate-y-1 cursor-pointer transform-gpu shadow-lg"
          >
            {/* الأيقونة */}
            <div className="relative text-5xl mb-3 text-zinc-300 transition-colors duration-200 group-hover:scale-110 group-hover:text-white">
              {skill.icon}
            </div>

            {/* اسم المهارة */}
            <span className="relative text-xs sm:text-sm font-extrabold tracking-wider uppercase text-zinc-400 group-hover:text-cyan-300 transition-colors duration-200">
              {skill.name}
            </span>

            {/* Hover Glow ناعم */}
            <div className="absolute inset-0 rounded-3xl bg-linear-to-b from-cyan-500/10 via-transparent to-sky-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
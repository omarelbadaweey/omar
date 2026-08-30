"use client";

import { Skills } from "./data/data";
import StrokeText from "./ui/StrokeText";
import CursorGrid from "./ui/CursorGrid";

export const SkillsSection = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#090a0f] overflow-hidden">
      {/* 1. CursorGrid Canvas Layer in Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <CursorGrid
          cellSize={70}
          color="#D946EF"
          radius={140}
          falloff="smooth"
          holdTime={400}
          fadeDuration={800}
          lineWidth={1.2}
          maxOpacity={1}
          fillOpacity={0}
          gridOpacity={0.08}
          cellRadius={0}
          clickPulse
          pulseSpeed={600}
        />
      </div>

      {/* 2. Main Section Content */}
      <section
        id="skills"
        className="relative z-10 min-h-screen py-20 px-4 sm:px-8 text-slate-100 flex flex-col items-center justify-center font-sans select-none bg-transparent"
      >
        {/* Title Skills */}
        <div>
          <StrokeText
            text="My Skills"
            strokeColor="#cbc5c5"
            fillColor="#cbc5c5"
            strokeWidth={1}
            drawDuration={1.6}
            fillDelay={0.2}
            stagger={0.05}
            ease="power2.out"
            trigger="loop"
            fillMode="wipe"
            fontSize={75}
            fontWeight={800}
            letterSpacing={0}
            reverse={false}
            className="relative z-10"
          />
          <span className="border-b-4 border-[#e8e0e0] w-60 mx-auto rounded-full block mb-12"></span>
        </div>

        {/* شبكة المهارات (Nodes Grid) */}
        <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 sm:gap-10 max-w-7xl w-full">
          {Skills.map((skill) => (
            <div
              key={skill.name}
              className="group relative flex flex-col items-center justify-center p-6 rounded-3xl bg-[#16171a]/70 border border-zinc-800/80 backdrop-blur-2xl transition-all duration-300 hover:border-cyan-400 hover:bg-[#1a1c21] hover:shadow-[0_0_35px_rgba(6,182,212,0.25)] hover:-translate-y-1 cursor-pointer"
            >
              {/* الأيقونة */}
              <div className="relative text-5xl mb-3 text-zinc-300 transition-all duration-300 group-hover:scale-110 group-hover:text-white group-hover:drop-shadow-[0_0_20px_rgba(6,182,212,0.7)]">
                {skill.icon}
              </div>

              {/* اسم المهارة */}
              <span className="relative text-xs sm:text-sm font-extrabold tracking-wider uppercase text-zinc-400 group-hover:text-cyan-300 transition-colors duration-200">
                {skill.name}
              </span>

              {/* Hover Glow ناعم */}
              <div className="absolute inset-0 rounded-3xl bg-linear-to-b from-cyan-500/10 via-transparent to-sky-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SkillsSection;
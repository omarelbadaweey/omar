"use client";

import { skillsData } from "./data/data";

export const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="relative w-full min-h-screen py-20 px-4 sm:px-8 text-slate-100 flex flex-col items-center justify-center font-sans select-none bg-[#070A12]"
    >
      {/* Subtle background glow — GPU-only, no layout cost */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40"
          style={{ width: 600, height: 600, background: 'radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 70%)', willChange: 'auto' }}
        />
      </div>

      {/* Title */}
      <div className="relative z-10 flex flex-col items-center mb-14">
        <h2
          className="text-6xl sm:text-7xl font-extrabold text-white/90 tracking-tight mb-3"
          style={{ letterSpacing: '-0.03em' }}
        >
          My Skills
        </h2>
        <span className="block w-16 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
      </div>

      {/* Skills grid */}
      <div className="relative z-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-5 max-w-5xl w-full">
        {skillsData.map((skill) => (
          <div
            key={skill.name}
            className="group flex flex-col items-center justify-center gap-2.5 py-5 px-2 rounded-2xl bg-white/[0.03] border border-white/[0.07] cursor-pointer
                       transition-all duration-200 ease-out
                       hover:bg-white/[0.07] hover:border-cyan-400/40 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)]"
          >
            <span className="text-4xl transition-transform duration-200 group-hover:scale-110">
              {skill.icon}
            </span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 group-hover:text-cyan-300 transition-colors duration-200">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
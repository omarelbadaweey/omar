"use client";
import Image from "next/image";
import StrokeText from "./ui/StrokeText";

export default function About() {
  return (
    <section
      id="about"
      className="w-full py-24 px-6 sm:px-12 md:px-20  text-white"
    >
      <div>
        <StrokeText
          text="About Me"
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
          className="relative z-10 mb-1"
        />
        <span className="border-b-4 border-[#e8e0e0] w-70 mx-auto rounded-full block mb-12"></span>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Profile Image - Clean Portrait */}
        <div

          className="md:col-span-4"
        >
          <div className="relative aspect-3/4 w-full max-w-70 mx-auto rounded-2xl overflow-hidden border border-white/10 bg-[#0e131f]">
            <Image
              src="/logo.jpeg"
              alt="Omar El-Badawey"
              fill
              priority={false}
              sizes="(max-width: 768px) 100vw, 300px"
              className="object-cover grayscale-0 hover:grayscale transition-all duration-300"
            />
          </div>
        </div>

        {/* Bio Content - Senior Minimal Style */}
        <div
          className="md:col-span-8 space-y-6"
        >
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Omar El-Badawey
            </h2>
            <p className="text-slate-400 font-mono text-sm">
              Full-Stack Web Developer (MERN / Next.js)
            </p>
          </div>

          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Full-Stack Developer with 4+ years of experience building
            production-ready web applications. I specialize in the MERN stack
            and Next.js, focusing on clean architecture, scalable backends, and
            fast, responsive interfaces.
          </p>

          <p className="text-slate-400 text-sm leading-relaxed">
            Graduated from Delta Higher Institute (MIS). Proficient in English
            (B1), continuously refining both technical architecture and
            communication for remote and global setups.
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10 text-left font-mono">
            <div>
              <span className="block text-xl font-bold text-white">4+ Yrs</span>
              <span className="text-xs text-slate-500">Experience</span>
            </div>
            <div>
              <span className="block text-xl font-bold text-white">
                MERN / Next
              </span>
              <span className="text-xs text-slate-500">Core Stack</span>
            </div>
            <div>
              <span className="block text-xl font-bold text-white">B1</span>
              <span className="text-xs text-slate-500">English</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Projects } from "./data/data"; 
import { ExternalLink, Monitor, X, Code2 } from "lucide-react";
import StrokeText from "./ui/StrokeText";
import Image from "next/image";

const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);

const getLanguageStyle = (langName: string) => {
  const name = langName.toLowerCase();

  if (name.includes("react")) return "bg-cyan-500/10 text-cyan-400 border-cyan-500/30";
  if (name.includes("next")) return "bg-white/10 text-slate-100 border-white/20";
  if (name.includes("type") || name.includes("ts")) return "bg-blue-500/10 text-blue-400 border-blue-500/30";
  if (name.includes("java") || name.includes("js")) return "bg-yellow-500/10 text-yellow-400 border-yellow-500/30";
  if (name.includes("tail")) return "bg-sky-500/10 text-sky-400 border-sky-500/30";
  if (name.includes("node")) return "bg-emerald-500/10 text-emerald-400 border-emerald-500/30";
  if (name.includes("mongo")) return "bg-green-500/10 text-green-400 border-green-500/30";
  if (name.includes("html")) return "bg-orange-500/10 text-orange-400 border-orange-500/30";
  if (name.includes("css")) return "bg-indigo-500/10 text-indigo-400 border-indigo-500/30";
  if (name.includes("framer") || name.includes("motion")) return "bg-purple-500/10 text-purple-400 border-purple-500/30";
  if (name.includes("vue")) return "bg-emerald-600/10 text-emerald-300 border-emerald-600/30";

  return "bg-slate-800/80 text-slate-300 border-slate-700/80";
};

export const ProjectsSection = () => {
  const [activeIframe, setActiveIframe] = useState<string | null>(null);

  return (
    <section
      id="projects"
      className="relative w-full min-h-screen py-16 px-4 sm:px-6 text-slate-100 flex flex-col items-center justify-center font-sans select-none bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/bg.png')",
      }}
    >
      {/* طبقة تظليل سوداء شفافة لتوضيح الكروت فوق خلفية bg.png */}
      <div className="absolute inset-0  z-0 pointer-events-none" />

      {/* Glows خلفية ناعمة */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-cyan-500/10 blur-[180px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-600/10 blur-[150px] rounded-full pointer-events-none z-0" />

      {/* Header Section */}
      <div className="relative z-10 flex flex-col items-center">
        <StrokeText
          text="My Projects"
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
        <span className="border-b-4 border-[#e8e0e0] w-48 mx-auto rounded-full block mb-12"></span>
      </div>

      {/* Cards Grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl w-full">
        {Projects.map((project) => (
          <div
            key={project.id}
            className="group relative flex flex-col justify-between rounded-2xl bg-[#121316]/80 border border-slate-800/80 overflow-hidden backdrop-blur-md transition-all duration-300 hover:border-cyan-500/50 hover:bg-[#121316] hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
          >
            {/* Browser Header */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#121316] border-b border-slate-800/80 z-20">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-[11px] font-mono text-slate-500 truncate max-w-50">
                {project.link}
              </span>
              <button
                onClick={() => setActiveIframe(project.link)}
                className="text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
                title="Fullscreen Preview"
              >
                <Monitor className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Screen Container */}
            <div 
              onClick={() => setActiveIframe(project.link)}
              className="relative w-full h-64 bg-slate-900 overflow-hidden group/frame cursor-pointer"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover opacity-80 group-hover/frame:opacity-100 group-hover/frame:scale-105 transition-all duration-300"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/frame:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 text-black text-xs font-bold shadow-lg">
                  <Monitor className="w-4 h-4" /> Live Interactive Preview
                </span>
              </div>
            </div>

            {/* Project Details */}
            <div className="p-6 flex flex-col justify-between grow space-y-5 bg-transparent">
              <div className="space-y-2">
                <span className="text-[10px] font-black uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20 inline-block">
                  {project.category}
                </span>

                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-200">
                  {project.title}
                </h3>
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800/50">
                {project.languages.map((langItem, i) => {
                  const style = getLanguageStyle(langItem.lang);
                  return (
                    <span
                      key={i}
                      className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-lg border transition-transform duration-200 hover:scale-105 ${style}`}
                    >
                      <span className="text-sm">{langItem.icon}</span>
                      <span>{langItem.lang}</span>
                    </span>
                  );
                })}
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-3 pt-1">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold text-xs flex items-center justify-center gap-2 transition-all hover:bg-cyan-500 hover:text-black"
                >
                  <ExternalLink className="w-4 h-4" /> Live Link
                </a>
                <a
                  href={project.git}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-[#121316] border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-all"
                  title="Source Code"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Preview */}
      <AnimatePresence>
        {activeIframe && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-5xl h-[80vh] bg-[#121316] rounded-2xl border border-cyan-500/30 overflow-hidden shadow-[0_0_40px_rgba(6,182,212,0.2)] flex flex-col"
            >
              <div className="flex items-center justify-between px-4 py-3 bg-[#16171a] border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-bold text-white truncate max-w-xs sm:max-w-md">
                    {activeIframe}
                  </span>
                </div>
                <button
                  onClick={() => setActiveIframe(null)}
                  className="p-1.5 rounded-full bg-slate-800/80 text-slate-400 hover:text-white hover:bg-rose-500/20 transition-all cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <iframe
                src={activeIframe}
                className="w-full h-full border-none bg-white"
                title="Project Full Live Preview"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
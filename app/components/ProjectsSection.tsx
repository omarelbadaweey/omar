"use client";

import React, { useState, useCallback } from "react";
import { projectsData } from "./data/data";
import { ExternalLink, Monitor, X, Code2 } from "lucide-react";
import Image from "next/image";

const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const getLanguageStyle = (langName: string) => {
  const n = langName.toLowerCase();
  if (n.includes("react"))  return "bg-cyan-500/10 text-cyan-400 border-cyan-500/20";
  if (n.includes("next"))   return "bg-white/8 text-slate-100 border-white/15";
  if (n.includes("type"))   return "bg-blue-500/10 text-blue-400 border-blue-500/20";
  if (n.includes("java") || n.includes("js")) return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
  if (n.includes("tail"))   return "bg-sky-500/10 text-sky-400 border-sky-500/20";
  if (n.includes("node"))   return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
  if (n.includes("mongo"))  return "bg-green-500/10 text-green-400 border-green-500/20";
  if (n.includes("html"))   return "bg-orange-500/10 text-orange-400 border-orange-500/20";
  if (n.includes("css"))    return "bg-indigo-500/10 text-indigo-400 border-indigo-500/20";
  return "bg-slate-800/60 text-slate-300 border-slate-700/60";
};

export const ProjectsSection = () => {
  const [activeIframe, setActiveIframe] = useState<string | null>(null);

  const openPreview  = useCallback((url: string) => setActiveIframe(url),  []);
  const closePreview = useCallback(() => setActiveIframe(null), []);

  return (
    <section
      id="projects"
      className="relative w-full min-h-screen py-16 px-4 sm:px-6 text-slate-100 flex flex-col items-center justify-center font-sans select-none bg-[#070A12]"
    >
      {/* Minimal background accent — single radial, no heavy blur */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50"
        style={{ width: 700, height: 700, background: 'radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 65%)' }}
      />

      {/* Header */}
      <div className="relative z-10 flex flex-col items-center mb-14">
        <h2
          className="text-6xl sm:text-7xl font-extrabold text-white/90 tracking-tight mb-3"
          style={{ letterSpacing: '-0.03em' }}
        >
          My Projects
        </h2>
        <span className="block w-16 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
      </div>

      {/* Cards Grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl w-full">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="group relative flex flex-col rounded-2xl bg-white/[0.03] border border-white/[0.07] overflow-hidden
                       transition-all duration-250
                       hover:border-cyan-500/35 hover:bg-white/[0.05] hover:shadow-[0_0_28px_rgba(6,182,212,0.1)]"
          >
            {/* Browser header bar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-white/[0.03] border-b border-white/[0.06]">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/75" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/75" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/75" />
              </div>
              <span className="text-[11px] font-mono text-slate-500 truncate max-w-48">
                {project.link}
              </span>
              <button
                onClick={() => openPreview(project.link)}
                className="text-slate-500 hover:text-cyan-400 transition-colors cursor-pointer"
                title="Fullscreen Preview"
              >
                <Monitor className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Thumbnail */}
            <div
              onClick={() => openPreview(project.link)}
              className="relative w-full h-56 overflow-hidden cursor-pointer bg-slate-900/50"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:scale-[1.03]"
                loading="lazy"
              />
              {/* hover overlay */}
              <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 text-black text-xs font-bold shadow-lg">
                  <Monitor className="w-4 h-4" /> Live Preview
                </span>
              </div>
            </div>

            {/* Info */}
            <div className="p-5 flex flex-col gap-4 grow">
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] font-black uppercase tracking-wider text-cyan-400/80 bg-cyan-500/8 px-3 py-1 rounded-full border border-cyan-500/15 self-start">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-200">
                  {project.title}
                </h3>
              </div>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.06]">
                {project.languages.map((langItem, i) => (
                  <span
                    key={i}
                    className={`flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-lg border ${getLanguageStyle(langItem.lang)}`}
                  >
                    <span className="text-sm">{langItem.icon}</span>
                    <span>{langItem.lang}</span>
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-3">
                <a
                  href={project.link} target="_blank" rel="noreferrer"
                  className="flex-1 py-2.5 rounded-xl bg-cyan-500/8 border border-cyan-500/20 text-cyan-400 font-bold text-xs flex items-center justify-center gap-2 transition-all hover:bg-cyan-500 hover:text-black hover:border-cyan-500"
                >
                  <ExternalLink className="w-4 h-4" /> Live Link
                </a>
                <a
                  href={project.git} target="_blank" rel="noreferrer"
                  className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.09] text-slate-400 hover:text-white hover:border-slate-500 transition-all"
                  title="Source Code"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Preview — lightweight, no framer-motion */}
      {activeIframe && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 sm:p-6"
          style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
          onClick={closePreview}
        >
          <div
            className="relative w-full max-w-5xl flex flex-col rounded-2xl border border-cyan-500/25 overflow-hidden shadow-[0_0_60px_rgba(6,182,212,0.15)]"
            style={{ height: '80vh', background: '#0e1117' }}
            onClick={e => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.07]" style={{ background: '#13151a' }}>
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-bold text-white/80 truncate max-w-xs sm:max-w-md">
                  {activeIframe}
                </span>
              </div>
              <button
                onClick={closePreview}
                className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-rose-500/20 transition-all cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <iframe
              src={activeIframe}
              className="w-full flex-1 border-none bg-white"
              title="Project Live Preview"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;

"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowUp,
  FileText,
  Download,
  Mail,
  Phone,
  Code2,
  Send,
  MessageSquare,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

// SVG لـ Github
const GithubIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
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

// SVG لـ Linkedin
const LinkedinIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9Z" />
  </svg>
);

export const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [whatsappMessage, setWhatsappMessage] = useState("");

  // رقم الواتساب الخاص بك
  const whatsappNumber = "201008790584";

  // تحسين أداء الـ Scroll Event
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // إرسال الرسالة إلى الواتساب
  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!whatsappMessage.trim()) return;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
    setWhatsappMessage("");
  };

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/omarelbadaweey?tab=repositories",
      icon: <GithubIcon className="w-5 h-5" />,
      color: "hover:text-white hover:border-white/40 hover:shadow-white/10",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/omar-elbadawey-4950832b3",
      icon: <LinkedinIcon className="w-5 h-5" />,
      color: "hover:text-cyan-400 hover:border-cyan-500/40 hover:shadow-cyan-500/20",
    },
    {
      name: "Email",
      href: "mailto:malbdwy890@gmail.com",
      icon: <Mail className="w-5 h-5" />,
      color: "hover:text-sky-400 hover:border-sky-500/40 hover:shadow-sky-500/20",
    },
    {
      name: "Phone",
      href: "tel:+201008790584",
      icon: <Phone className="w-5 h-5" />,
      color: "hover:text-emerald-400 hover:border-emerald-500/40 hover:shadow-emerald-500/20",
    },
    {
      name: "WhatsApp",
      href: `https://wa.me/${whatsappNumber}`,
      icon: <FaWhatsapp className="w-5 h-5" />,
      color: "hover:text-emerald-400 hover:border-emerald-500/40 hover:shadow-emerald-500/20",
    },
  ];

  return (
    <footer id="contact" className="relative bg-[#07090E] border-t border-slate-800/80 text-slate-300 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12 relative z-10">
        
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-12 border-b border-slate-800/60">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <Code2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white tracking-wide">
                Omar <span className="text-cyan-400">Elbadawey</span>
              </h3>
              <p className="text-xs text-slate-400">MERN-Stack Developer</p>
            </div>
          </div>

          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#121316] border border-emerald-500/30 text-xs font-semibold text-slate-300 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            Available for new opportunities
          </div>
        </div>

        {/* Middle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-12 border-b border-slate-800/60">
          
          {/* About & Resume */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              About Me
            </h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              مطور MERN-Stack متخصص في بناء وتطوير تطبيقات الويب الحديثة ذات الأداء العالي والتصميم التفاعلي المتجاوب.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold transition-all hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]"
              >
                <FileText className="w-4 h-4" /> View Resume
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#121316] border border-slate-700 text-slate-300 text-xs font-bold transition-all hover:border-slate-500 hover:text-white"
              >
                <Download className="w-4 h-4" /> Download CV
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/40 group-hover:bg-cyan-400 transition-colors" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* WhatsApp Direct Chat & Social */}
          <div className="md:col-span-5 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-emerald-400" /> Quick WhatsApp Message
            </h4>
            <p className="text-xs text-slate-400">
              اكتب رسالة سريعة وابعتهالي مباشرة على الواتساب:
            </p>

            {/* WhatsApp Input Form */}
            <form onSubmit={handleSendWhatsApp} className="flex items-center gap-2">
              <input
                type="text"
                value={whatsappMessage}
                onChange={(e) => setWhatsappMessage(e.target.value)}
                placeholder="Send a quick message..."
                className="w-full px-4 py-2.5 text-xs rounded-xl bg-[#121316] border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 transition-all"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-semibold text-xs transition-all hover:bg-emerald-500 hover:text-black hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] shrink-0 cursor-pointer"
              >
                <span>Send</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

            <div className="pt-2">
              <p className="text-xs text-slate-500 mb-2">Or find me on:</p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    title={social.name}
                    className={`p-3 rounded-xl bg-[#121316] border border-slate-800 text-slate-400 transition-all duration-300 hover:-translate-y-1 shadow-md ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} <span className="text-slate-300">Omar Elbadawey</span>. All rights reserved.
          </p>
        </div>
      </div>

      {/* Floating Scroll To Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed bottom-8 right-8 z-50 p-3.5 rounded-2xl bg-[#121316]/90 border border-slate-700/80 text-cyan-400 shadow-2xl backdrop-blur-md transition-all duration-300 hover:bg-cyan-500 hover:text-black hover:scale-110 hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] cursor-pointer ${
          showScroll
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;
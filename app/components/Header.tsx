
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Home, User, Code2, FolderGit2, Mail, Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About', href: '/#about', icon: User },
  { name: 'Skills', href: '/#skills', icon: Code2 },
  { name: 'Projects', href: '/#projects', icon: FolderGit2 },
  { name: 'Contact', href: '/#contact', icon: Mail },
];

export default function Header() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(pathname || '/');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-5 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      {/* تحسين الـ backdrop-blur وإضافة transform-gpu لنقل المعالجة للـ GPU مباشر */}
      <nav className="pointer-events-auto relative flex items-center justify-between w-full max-w-5xl px-4 py-2.5 rounded-full border border-white/10 bg-[#0b0f19]/90 backdrop-blur-md transform-gpu shadow-lg transition-all duration-300">
        
        {/* Logo */}
        <Link 
          href="/"
          onClick={() => setActiveTab('/')}
          className="flex items-center gap-2 pl-2 text-xl font-extrabold tracking-wider text-white hover:opacity-90 transition-opacity"
        >
          <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-violet-500">
            OMAR
          </span>
          <span className="h-2 w-2 rounded-full bg-cyan-400" />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 relative bg-white/5 p-1 rounded-full border border-white/5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setActiveTab(item.href)}
                className={`relative flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full transition-colors duration-200 z-10 ${
                  isActive ? 'text-cyan-300 font-bold' : 'text-slate-300 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePill"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-linear-to-r from-cyan-500/20 to-violet-500/20 border border-cyan-500/40 -z-10 transform-gpu"
                  />
                )}
                <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/#contact"
            className="rounded-full bg-linear-to-r from-cyan-500 to-violet-600 px-5 py-2 text-xs font-bold text-white shadow-md hover:scale-105 active:scale-95 transition-all duration-200"
          >
            View CV 📝
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="cursor-pointer md:hidden p-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.15 }}
          className="pointer-events-auto absolute top-20 left-4 right-4 md:hidden rounded-3xl border border-white/10 bg-[#0b0f19]/95 backdrop-blur-md p-4 shadow-xl z-50 flex flex-col gap-2 transform-gpu"
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => {
                  setActiveTab(item.href);
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center gap-3 px-4 py-3 text-sm font-semibold rounded-2xl transition-all ${
                  isActive 
                    ? 'bg-linear-to-r from-cyan-500/20 to-violet-500/20 border border-cyan-500/30 text-cyan-300' 
                    : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                <span>{item.name}</span>
              </Link>
            );
          })}

          <div className="mt-2 pt-2 border-t border-white/10">
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center w-full rounded-2xl bg-linear-to-r from-cyan-500 to-violet-600 py-3 text-sm font-bold text-white shadow-md"
            >
              View CV 📝
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}
// "use client";

// import React, { useState } from "react";

// import Link from "next/link";

// import { usePathname } from "next/navigation";

// import { motion } from "framer-motion";

// import { Home, User, Code2, FolderGit2, Mail, Menu, X } from "lucide-react";

// const navItems = [
//   { name: "Home", href: "/", icon: Home },

//   { name: "About", href: "/#about", icon: User },

//   { name: "Skills", href: "/#skills", icon: Code2 },

//   { name: "Projects", href: "/#projects", icon: FolderGit2 },

//   { name: "Contact", href: "/#contact", icon: Mail },
// ];

// export default function Header() {
//   const pathname = usePathname();

//   const [activeTab, setActiveTab] = useState(pathname || "/");

//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <header className="fixed top-5 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
//       <nav className="pointer-events-auto relative flex items-center justify-between w-full max-w-5xl px-4 py-2.5 rounded-full border border-white/10 bg-[#0b0f19]/80 backdrop-blur-xl shadow-2xl shadow-cyan-500/5 transition-all duration-300">
//         {/* Logo */}

//         <Link
//           href="/"
//           onClick={() => setActiveTab("/")}
//           className="flex items-center gap-2 pl-2 text-xl font-extrabold tracking-wider text-white hover:opacity-90 transition-opacity"
//         >
//           <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-violet-500">
//             OMAR
//           </span>

//           <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
//         </Link>

//         {/* Desktop Navigation Links With Animated Pill Background */}

//         <div className="hidden md:flex items-center gap-1 relative bg-white/5 p-1 rounded-full border border-white/5">
//           {navItems.map((item) => {
//             const Icon = item.icon;

//             const isActive = activeTab === item.href;

//             return (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 onClick={() => setActiveTab(item.href)}
//                 className={`relative flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full transition-colors duration-200 z-10 ${
//                   isActive
//                     ? "text-cyan-300 font-bold"
//                     : "text-slate-300 hover:text-white"
//                 }`}
//               >
//                 {/* Active Background Glow Pill */}

//                 {isActive && (
//                   <motion.div
//                     layoutId="activePill"
//                     transition={{ type: "spring", stiffness: 380, damping: 30 }}
//                     className="absolute inset-0 rounded-full bg-linear-to-r from-cyan-500/20 to-violet-500/20 border border-cyan-500/40 -z-10 shadow-[0_0_15px_rgba(6,182,212,0.25)]"
//                   />
//                 )}

//                 <Icon
//                   className={`w-4 h-4 ${isActive ? "text-cyan-400" : "text-slate-400"}`}
//                 />

//                 <span>{item.name}</span>
//               </Link>
//             );
//           })}
//         </div>

//         {/* Action Button / Auth */}

//         <div className="hidden md:flex items-center gap-3">
//           <a
//             href="cv.pdf"
//             className="rounded-full bg-linear-to-r from-cyan-500 to-violet-600 px-5 py-2 text-xs font-bold text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105 active:scale-95 transition-all duration-200"
//           >
//             View CV 📝
//           </a>
//         </div>

//         {/* Mobile Hamburger Button */}

//         <button
//           onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           className="md:hidden p-2 cursor-pointer rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
//           aria-label="Toggle Menu"
//         >
//           {mobileMenuOpen ? (
//             <X className="w-5 h-5" />
//           ) : (
//             <Menu className="w-5 h-5" />
//           )}
//         </button>
//       </nav>

//       {/* Mobile Drawer Menu */}

//       {mobileMenuOpen && (
//         <motion.div
//           initial={{ opacity: 0, y: -20, scale: 0.95 }}
//           animate={{ opacity: 1, y: 0, scale: 1 }}
//           exit={{ opacity: 0, y: -20, scale: 0.95 }}
//           transition={{ duration: 0.2 }}
//           className="pointer-events-auto absolute top-20 left-4 right-4 md:hidden rounded-3xl border border-white/10 bg-[#0b0f19]/95 backdrop-blur-2xl p-4 shadow-2xl z-50 flex flex-col gap-2"
//         >
//           {navItems.map((item) => {
//             const Icon = item.icon;

//             const isActive = activeTab === item.href;

//             return (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 onClick={() => {
//                   setActiveTab(item.href);

//                   setMobileMenuOpen(false);
//                 }}
//                 className={`flex items-center gap-3 px-4 py-3 text-sm font-semibold rounded-2xl transition-all ${
//                   isActive
//                     ? "bg-linear-to-r from-cyan-500/20 to-violet-500/20 border border-cyan-500/30 text-cyan-300"
//                     : "text-slate-300 hover:bg-white/5"
//                 }`}
//               >
//                 <Icon
//                   className={`w-5 h-5 ${isActive ? "text-cyan-400" : "text-slate-400"}`}
//                 />

//                 <span>{item.name}</span>
//               </Link>
//             );
//           })}

//           <div className="mt-2 pt-2 border-t border-white/10">
//             <a
//               href="cv.pdf"
//               onClick={() => setMobileMenuOpen(false)}
//               className="flex items-center justify-center w-full rounded-2xl bg-linear-to-r from-cyan-500 to-violet-600 py-3 text-sm font-bold text-white shadow-lg shadow-cyan-500/20"
//             >
//               View CV 📝
//             </a>
//           </div>
//         </motion.div>
//       )}
//     </header>
//   );
// }



"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/#about" },
  { name: "SKILLS", href: "/#skills" },
  { name: "PROJECTS", href: "/#projects" },
  { name: "CONTACT", href: "/#contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(pathname || "/");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className=" fixed top-0 left-0 right-0 z-50 bg-[#0b0f19] border-b border-white/10 text-white font-mono uppercase text-xs tracking-wider">
      <div className="flex items-center justify-between h-14 w-full px-4 md:px-6">
        
        {/* Left Section: Logo & Main Navigation */}
        <div className="flex items-center h-full gap-6">
          {/* Logo with Box Border */}
          <Link
            href="/"
            onClick={() => setActiveTab("/")}
            className="flex items-center gap-2 pr-6 border-r border-white/10 h-full font-extrabold text-base tracking-widest text-white hover:opacity-80 transition-opacity"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">
              OMAR
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
          </Link>

          {/* Desktop Navigation Links (Clean Box Grid Style) */}
          <nav className="hidden md:flex items-center h-full">
            {navItems.map((item) => {
              const isActive = activeTab === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setActiveTab(item.href)}
                  className={`relative flex items-center justify-center px-4 h-full border-r border-white/10 transition-colors duration-150 ${
                    isActive
                      ? "bg-white/10 text-cyan-400 font-bold"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {/* Bottom Active Indicator Line */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-cyan-400"
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    />
                  )}
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right Section: Action Button */}
        <div className="hidden md:flex items-center h-full pl-6 border-l border-white/10">
          <a
            href="cv.pdf"
            className="flex items-center gap-1.5 bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white font-bold px-5 py-2 rounded-sm transition-all shadow-md shadow-cyan-500/10 active:scale-95"
          >
            <span>VIEW CV</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center h-full border-l border-white/10 pl-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-slate-300 hover:text-white transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-white/10 bg-[#0b0f19] overflow-hidden"
          >
            <div className="flex flex-col">
              {navItems.map((item) => {
                const isActive = activeTab === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => {
                      setActiveTab(item.href);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center justify-between px-6 py-3.5 border-b border-white/5 text-xs font-semibold ${
                      isActive
                        ? "bg-white/10 text-cyan-400 border-l-2 border-l-cyan-400"
                        : "text-slate-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive && <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />}
                  </Link>
                );
              })}

              <div className="p-4">
                <a
                  href="cv.pdf"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold py-3 rounded-sm text-xs"
                >
                  <span>VIEW CV</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
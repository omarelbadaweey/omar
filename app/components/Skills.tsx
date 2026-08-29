
// "use client";

// import React, { useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { Skills } from "./data/data";
// import StrokeText from "./ui/StrokeText";

// export const SkillsSection = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     let animationFrameId: number;

//     const updateCanvasSize = () => {
//       if (containerRef.current) {
//         canvas.width = containerRef.current.offsetWidth;
//         canvas.height = containerRef.current.offsetHeight;
//       }
//     };

//     updateCanvasSize();
//     window.addEventListener("resize", updateCanvasSize);

//     let step = 0;
//     const render = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       step += 0.015;

//       const containerRect = containerRef.current?.getBoundingClientRect();
//       if (!containerRect) return;

//       const positions: { x: number; y: number }[] = [];
//       cardRefs.current.forEach((card) => {
//         if (card) {
//           const rect = card.getBoundingClientRect();
//           positions.push({
//             x: rect.left + rect.width / 2 - containerRect.left,
//             y: rect.top + rect.height / 2 - containerRect.top,
//           });
//         }
//       });

//       for (let i = 0; i < positions.length; i++) {
//         for (let j = i + 1; j < positions.length; j++) {
//           const p1 = positions[i];
//           const p2 = positions[j];
//           const dx = p1.x - p2.x;
//           const dy = p1.y - p2.y;
//           const distance = Math.sqrt(dx * dx + dy * dy);

//           if (distance < 320) {
//             const alpha = (1 - distance / 320) * 0.25;

//             // 1. رسم الخط الأساسي الشفاف بالأزرق
//             ctx.beginPath();
//             ctx.moveTo(p1.x, p1.y);
//             ctx.lineTo(p2.x, p2.y);
//             ctx.strokeStyle = `rgba(6, 182, 212, ${alpha})`;
//             ctx.lineWidth = 1;
//             ctx.stroke();

//             // 2. شرارة الجسيم المتحرك بدرجة Cyan نيون
//             const pulseProgress = (Math.sin(step + i + j) + 1) / 2;
//             const pulseX = p1.x + (p2.x - p1.x) * pulseProgress;
//             const pulseY = p1.y + (p2.y - p1.y) * pulseProgress;

//             ctx.beginPath();
//             ctx.arc(pulseX, pulseY, 2, 0, Math.PI * 2);
//             ctx.fillStyle = `rgba(56, 189, 248, ${alpha * 2})`;
//             ctx.shadowColor = "#06b6d4";
//             ctx.shadowBlur = 8;
//             ctx.fill();
//             ctx.shadowBlur = 0;
//           }
//         }
//       }

//       animationFrameId = requestAnimationFrame(render);
//     };

//     render();

//     return () => {
//       window.removeEventListener("resize", updateCanvasSize);
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, []);

//   return (
//     <section
//       id="skills"
//       ref={containerRef}
//       className="relative min-h-screen py-20 px-4 sm:px-8  text-slate-100 overflow-hidden flex flex-col items-center justify-center font-sans select-none"
//     >
//       {/* Canvas للخطوط والتأثيرات */}
//       <canvas
//         ref={canvasRef}
//         className="absolute inset-0 pointer-events-none z-0"
//       />

//       {/* خلفية Glow نيون زرقاء صافية بدون درجات زيتي/أخضر */}
//       <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-cyan-900/10 blur-[180px] rounded-full pointer-events-none" />
//       <div className="absolute bottom-10 right-10 w-80 h-80 bg-sky-900/10 blur-[160px] rounded-full pointer-events-none" />

//     {/* Title Skills With React BIt  */}
//     <StrokeText
//       text="My Skills"
//       strokeColor="#cbc5c5"
//       fillColor="#cbc5c5"
//       strokeWidth={1}
//       drawDuration={1.6}
//       fillDelay={0.2}
//       stagger={0.05}
//       ease="power2.out"
//       trigger="loop"
//       fillMode="wipe"
//       fontSize={75}
//       fontWeight={800}
//       letterSpacing={0}
//       reverse={false}
      
//       className="mb-12"
//     />
            
          
        
//       {/* </div> */}

//       {/* شبكة المهارات (Nodes Grid) */}
//       <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 sm:gap-10 max-w-7xl w-full">
//         {Skills.map((skill, index) => (
//           <motion.div
//             key={skill.name}
//             ref={(el) => {
//               cardRefs.current[index] = el;
//             }}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{
//               delay: index * 0.04,
//               type: "spring",
//               stiffness: 200,
//               damping: 18,
//             }}
//             whileHover={{ scale: 1.12, rotate: (index % 2 === 0 ? 1 : -1) * 3 }}
//             className="group relative flex flex-col items-center justify-center p-6 rounded-3xl bg-[#16171a]/70 border border-zinc-800/80 backdrop-blur-2xl transition-all duration-300 hover:border-cyan-400 hover:bg-[#1a1c21] hover:shadow-[0_0_35px_rgba(6,182,212,0.25)] cursor-pointer"
//           >
//             {/* حلقة التوصيل العلوية */}
//             <div className="absolute -top-3 w-5 h-5 rounded-full bg-[#121316] border-2 border-zinc-700 group-hover:border-cyan-400 group-hover:bg-cyan-500/20 transition-all duration-300 flex items-center justify-center shadow-md">
//               <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:animate-ping" />
//             </div>

//             {/* الأيقونة */}
//             <motion.div
//               animate={{ y: [0, -4, 0] }}
//               transition={{
//                 duration: 3 + (index % 3),
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               className="relative text-5xl mb-3 text-zinc-300 transition-all duration-300 group-hover:scale-110 group-hover:text-white group-hover:drop-shadow-[0_0_20px_rgba(6,182,212,0.7)]"
//             >
//               {skill.icon}
//             </motion.div>

//             {/* اسم المهارة */}
//             <span className="relative text-xs sm:text-sm font-extrabold tracking-wider uppercase text-zinc-400 group-hover:text-cyan-300 transition-colors duration-200">
//               {skill.name}
//             </span>

//             {/* Hover Glow ناعم */}
//             <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-cyan-500/10 via-transparent to-sky-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default SkillsSection;



"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Skills } from "./data/data";
import StrokeText from "./ui/StrokeText";
import CursorGrid from "./ui/CursorGrid";

export const SkillsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const updateCanvasSize = () => {
      if (containerRef.current) {
        canvas.width = containerRef.current.offsetWidth;
        canvas.height = containerRef.current.offsetHeight;
      }
    };

    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    let step = 0;
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      step += 0.015;

      const containerRect = containerRef.current?.getBoundingClientRect();
      if (!containerRect) return;

      const positions: { x: number; y: number }[] = [];
      cardRefs.current.forEach((card) => {
        if (card) {
          const rect = card.getBoundingClientRect();
          positions.push({
            x: rect.left + rect.width / 2 - containerRect.left,
            y: rect.top + rect.height / 2 - containerRect.top,
          });
        }
      });

      for (let i = 0; i < positions.length; i++) {
        for (let j = i + 1; j < positions.length; j++) {
          const p1 = positions[i];
          const p2 = positions[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 320) {
            const alpha = (1 - distance / 320) * 0.25;

            // 1. رسم الخط الأساسي الشفاف بالأزرق
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(6, 182, 212, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();

            // 2. شرارة الجسيم المتحرك بدرجة Cyan نيون
            const pulseProgress = (Math.sin(step + i + j) + 1) / 2;
            const pulseX = p1.x + (p2.x - p1.x) * pulseProgress;
            const pulseY = p1.y + (p2.y - p1.y) * pulseProgress;

            ctx.beginPath();
            ctx.arc(pulseX, pulseY, 2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(56, 189, 248, ${alpha * 2})`;
            ctx.shadowColor = "#06b6d4";
            ctx.shadowBlur = 8;
            ctx.fill();
            ctx.shadowBlur = 0;
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

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
        ref={containerRef}
        className="relative z-10 min-h-screen py-20 px-4 sm:px-8 text-slate-100 flex flex-col items-center justify-center font-sans select-none bg-transparent"
      >
        {/* Canvas للخطوط والتأثيرات بين الكروت */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 pointer-events-none z-0"
        />

        {/* خلفية Glow نيون زرقاء صافية */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-cyan-900/10 blur-[180px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-sky-900/10 blur-[160px] rounded-full pointer-events-none" />

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
          className=" relative z-10"
        />
        <span className=" border-3 border-[#e8e0e0] w-60 mx-auto rounded-full block mb-12"></span>
</div>

        {/* شبكة المهارات (Nodes Grid) */}
        <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 sm:gap-10 max-w-7xl w-full">
          {Skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.04,
                type: "spring",
                stiffness: 200,
                damping: 18,
              }}
              whileHover={{ scale: 1.12, rotate: (index % 2 === 0 ? 1 : -1) * 3 }}
              className="group relative flex flex-col items-center justify-center p-6 rounded-3xl bg-[#16171a]/70 border border-zinc-800/80 backdrop-blur-2xl transition-all duration-300 hover:border-cyan-400 hover:bg-[#1a1c21] hover:shadow-[0_0_35px_rgba(6,182,212,0.25)] cursor-pointer"
            >
              {/* حلقة التوصيل العلوية */}
              <div className="absolute -top-3 w-5 h-5 rounded-full bg-[#121316] border-2 border-zinc-700 group-hover:border-cyan-400 group-hover:bg-cyan-500/20 transition-all duration-300 flex items-center justify-center shadow-md">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:animate-ping" />
              </div>

              {/* الأيقونة */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{
                  duration: 3 + (index % 3),
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative text-5xl mb-3 text-zinc-300 transition-all duration-300 group-hover:scale-110 group-hover:text-white group-hover:drop-shadow-[0_0_20px_rgba(6,182,212,0.7)]"
              >
                {skill.icon}
              </motion.div>

              {/* اسم المهارة */}
              <span className="relative text-xs sm:text-sm font-extrabold tracking-wider uppercase text-zinc-400 group-hover:text-cyan-300 transition-colors duration-200">
                {skill.name}
              </span>

              {/* Hover Glow ناعم */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-cyan-500/10 via-transparent to-sky-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SkillsSection;
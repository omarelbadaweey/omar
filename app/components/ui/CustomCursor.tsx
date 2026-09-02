"use client";

import React, { useEffect, useRef } from "react";

export default function GlowCursor() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // تعطيل التأثير على أجهزة التاتش (الموبايل)
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const pointer = { x: -100, y: -100 };
    const TRAIL_LENGTH = 28; // طول ذيل الشريط
    const history: { x: number; y: number }[] = Array(TRAIL_LENGTH).fill({ x: -100, y: -100 });

    const handleMouseMove = (e: MouseEvent) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // تحديث موقع رأس الشريط بنعومة
      history[0] = {
        x: history[0].x + (pointer.x - history[0].x) * 0.45,
        y: history[0].y + (pointer.y - history[0].y) * 0.45,
      };

      // تحريك باقي النقاط خلف رأس الماوس
      for (let i = 1; i < TRAIL_LENGTH; i++) {
        history[i] = {
          x: history[i].x + (history[i - 1].x - history[i].x) * 0.38,
          y: history[i].y + (history[i - 1].y - history[i].y) * 0.38,
        };
      }

      if (history[0].x > 0 && history[0].y > 0) {
        // إعدادات التوهج الـ Neon (النيون المضيء)
        ctx.shadowColor = "#38bdf8"; // لون الأزرق المضيء (Cyan/Sky)
        ctx.shadowBlur = 18; // مدى التوهج والأشعة
        ctx.lineCap = "round";
        ctx.lineJoin = "round";

        // رسم كل قطعة بسماكة وشفافية متدرجة (تتضاءل من الرأس للذيل)
        for (let i = 0; i < TRAIL_LENGTH - 1; i++) {
          const progress = 1 - i / TRAIL_LENGTH; // من 1.0 (عند الماوس) إلى 0.0 (نهاية الذيل)

          ctx.beginPath();
          ctx.moveTo(history[i].x, history[i].y);
          ctx.lineTo(history[i + 1].x, history[i + 1].y);

          // سمك الشريط: يبدأ من 16px عند الماوس ويتلاشى للصفر
          ctx.lineWidth = Math.max(1, progress * 16);

          // اللون والشفافية: تزيد النصاعة عند رأس الماوس وتتلاشى للخلف
          ctx.strokeStyle = `rgba(56, 189, 248, ${progress * 0.95})`;

          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
    />
  );
}
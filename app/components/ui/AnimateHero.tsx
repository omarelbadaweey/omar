'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';
import { ArrowUpRightFromCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// ─── Project thumbnails — استبدلها بصور مشاريعك من public/img ───
const THUMBNAILS = [
  { src: '/img/diamond-centers.png', alt: 'Diamond Dental', rotate: -8 },
  { src: '/img/ameircam.png',        alt: 'American Council', rotate: 5  },
  { src: '/img/mx-store.png',        alt: 'MX Store',        rotate: -4 },
  { src: '/img/elekhlass.png',       alt: 'Alekhlass',       rotate: 7  },
  { src: '/img/orange.png',          alt: 'Orange Store',    rotate: -6 },
  { src: '/img/eccomerce.png',       alt: 'E-commerce',      rotate: 3  },
  { src: '/img/badawey.png',         alt: 'Badawey Store',   rotate: -5 },
  { src: '/img/Simple.png',          alt: 'Simple Booking',  rotate: 6  },
];

// ─── Ellipse orbit positions (percent of container) ───
function getOrbitPositions(count: number, rx: number, ry: number) {
  return Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * 2 * Math.PI - Math.PI / 2;
    return { x: Math.cos(angle) * rx, y: Math.sin(angle) * ry };
  });
}

const AnimateHero = () => {
  const sectionRef  = useRef<HTMLDivElement>(null);
  const orbitRef    = useRef<HTMLDivElement>(null);
  const ringRef     = useRef<SVGSVGElement>(null);
  const nameRef     = useRef<HTMLHeadingElement>(null);
  const centerRef   = useRef<HTMLDivElement>(null);
  const cardRefs    = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // ── 1. Entrance ──
      gsap.from([ringRef.current, orbitRef.current], {
        scale: 0.78, opacity: 0, duration: 1.1, ease: 'power3.out', delay: 0.15,
      });
      gsap.from(cardRefs.current, {
        scale: 0.45, opacity: 0, duration: 0.85, stagger: 0.065,
        ease: 'back.out(1.6)', delay: 0.3,
      });
      gsap.from(centerRef.current, {
        opacity: 0, y: 28, duration: 1, ease: 'power3.out', delay: 0.45,
      });

      // ── 2. Continuous orbit spin ──
      const orbitSpin = gsap.to(orbitRef.current, {
        rotation: 360, duration: 36, ease: 'none', repeat: -1,
        transformOrigin: 'center center',
      });
      // Counter-rotate cards to stay upright
      gsap.to(cardRefs.current, {
        rotation: -360, duration: 36, ease: 'none', repeat: -1,
      });
      // Ring counter-spin
      gsap.to(ringRef.current, {
        rotation: -360, duration: 55, ease: 'none', repeat: -1,
        transformOrigin: '50% 50%',
      });

      // ── 3. Per-card subtle float ──
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        gsap.to(card, {
          y: `${Math.sin(i * 1.3) * 7}px`,
          duration: 2.2 + i * 0.22,
          ease: 'sine.inOut', yoyo: true, repeat: -1, delay: i * 0.12,
        });
      });

      // ── 4. SCROLL: pin + orbit grows + name slides sideways ──
      const pinTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=130%',
          scrub: 1.4,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Orbit & ring scale up (تكبر)
      pinTl.to([orbitRef.current, ringRef.current], {
        scale: 1.6, ease: 'none',
      }, 0);

      // Speed up the orbit spin proportionally with scroll
      pinTl.to(orbitSpin, {
        timeScale: 3.5, ease: 'none',
      }, 0);

      // Name slides to the LEFT while scrolling
      pinTl.to(nameRef.current, {
        x: '-38vw',
        opacity: 0.15,
        ease: 'power2.in',
      }, 0);

      // Rest of center (desc + buttons) fades to the RIGHT
      pinTl.to('.ah-center-sub', {
        x: '30vw',
        opacity: 0,
        ease: 'power2.in',
      }, 0);

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const positions = getOrbitPositions(THUMBNAILS.length, 42, 35);

  return (
    <>
      <style>{`
        .ah-ring-d1 { stroke-dasharray: 10 6; animation: ahD1 4s linear infinite; }
        .ah-ring-d2 { stroke-dasharray: 5 11; animation: ahD2 7s linear infinite reverse; }
        @keyframes ahD1 { to { stroke-dashoffset: -64; } }
        @keyframes ahD2 { to { stroke-dashoffset:  64; } }

        .ah-card { cursor: pointer; will-change: transform; transition: filter .3s; }
        .ah-card:hover { filter: brightness(1.2) saturate(1.15); z-index: 20 !important; }
        .ah-card img { display: block; width: 100%; height: 100%; object-fit: cover; }

        .ah-btn-p {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 20px; background: #fff; color: #060c1a;
          font-weight: 700; font-size: .875rem; border-radius: 12px;
          text-decoration: none;
          transition: background .2s, transform .2s, box-shadow .2s;
        }
        .ah-btn-p:hover {
          background: #e5e7eb; transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(255,255,255,.15);
        }
        .ah-btn-s {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 20px; background: rgba(255,255,255,.07); color: #fff;
          font-weight: 600; font-size: .875rem; border-radius: 12px;
          text-decoration: none; border: 1px solid rgba(255,255,255,.15);
          backdrop-filter: blur(8px);
          transition: background .2s, transform .2s, border-color .2s;
        }
        .ah-btn-s:hover {
          background: rgba(255,255,255,.12); border-color: rgba(255,255,255,.28);
          transform: translateY(-2px);
        }

        .ah-ping {
          display: inline-block; width: 7px; height: 7px; border-radius: 50%;
          background: #60a5fa;
          animation: ahPing 1.8s ease-in-out infinite;
        }
        @keyframes ahPing {
          0%,100% { box-shadow: 0 0 0 0 rgba(96,165,250,.65); }
          50%      { box-shadow: 0 0 0 6px rgba(96,165,250,0); }
        }
      `}</style>

      <div
        ref={sectionRef}
        style={{
          position: 'relative', width: '100%', height: '100vh',
          minHeight: 600, overflow: 'hidden',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: "'Geist','Inter',system-ui,sans-serif",
          top:"30px"
        }}
        
      >
        {/* ── VIDEO BACKGROUND (نفس الهيرو) ── */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
          <video
            autoPlay loop muted playsInline preload="auto" poster="/poster.png"
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }}
          >
            <source src="/hero3.mp4" type="video/mp4" />
          </video>
          {/* Gradient overlays — same as Hero */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #07090E 0%, rgba(7,9,14,0.45) 45%, transparent 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #07090E 0%, transparent 38%, rgba(7,9,14,0.25) 100%)' }} />
          {/* Center vignette for text legibility */}
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 65% 60% at 50% 50%, rgba(5,8,18,0.52) 0%, transparent 78%)' }} />
        </div>

        {/* ── SVG RING ── */}
        <svg
          ref={ringRef}
          style={{
            position: 'absolute',
            /* كبيرة من الأول */
            width: '92vmin', height: '92vmin',
            maxWidth: 900, maxHeight: 900,
            pointerEvents: 'none', zIndex: 2, willChange: 'transform',
          }}
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid meet"
        >
          <ellipse cx="50" cy="50" rx="48.5" ry="48.5" fill="none"
            stroke="rgba(99,122,186,.2)" strokeWidth="0.22" />
          <ellipse cx="50" cy="50" rx="45" ry="45" fill="none"
            stroke="#4ade80" strokeWidth="0.2" strokeOpacity=".55" className="ah-ring-d1" />
          <ellipse cx="50" cy="50" rx="41" ry="41" fill="none"
            stroke="#60a5fa" strokeWidth="0.17" strokeOpacity=".5" className="ah-ring-d2" />
          <ellipse cx="50" cy="50" rx="37" ry="37" fill="none"
            stroke="#f87171" strokeWidth="0.13" strokeOpacity=".3"
            strokeDasharray="28 72" strokeDashoffset="14" />
          <ellipse cx="50" cy="50" rx="33.5" ry="33.5" fill="none"
            stroke="rgba(255,255,255,.04)" strokeWidth="0.1" />
        </svg>

        {/* ── ORBIT CONTAINER ── */}
        <div
          ref={orbitRef}
          style={{
            position: 'absolute',
            width: '120vmin', height: '120vmin',
            maxWidth: 1000, maxHeight: 1000,
            zIndex: 3, willChange: 'transform',
          }}
        >
          {THUMBNAILS.map((thumb, i) => {
            const pos   = positions[i];
            /* Varied card sizes for visual interest */
            const cardW = [138, 112, 124, 118, 132, 108, 120, 114][i] ?? 120;
            const cardH = Math.round(cardW * 0.63);

            return (
              <div
                key={i}
                ref={(el) => { cardRefs.current[i] = el; }}
                className="ah-card"
                style={{
                  position: 'absolute',
                  left: `calc(50% + ${pos.x}% - ${cardW / 2}px)`,
                  top:  `calc(50% + ${pos.y}% - ${cardH / 2}px)`,
                  width: cardW, height: cardH,
                  borderRadius: 10, overflow: 'hidden',
                  border: '1.5px solid rgba(255,255,255,.13)',
                  boxShadow: '0 8px 28px rgba(0,0,0,.65)',
                  transform: `rotate(${thumb.rotate}deg)`,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={thumb.src} alt={thumb.alt} loading="lazy" />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(135deg,rgba(255,255,255,.07) 0%,transparent 55%)',
                }} />
              </div>
            );
          })}
        </div>

        {/* ── CENTER CONTENT ── */}
        <div
          ref={centerRef}
          style={{
            position: 'relative', zIndex: 10,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', textAlign: 'center',
            padding: '0 20px', maxWidth: 560,
          }}

          className='bg-gray-900/25 md:bg-transparent rounded-full'
        >
          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.13)',
            borderRadius: 100, padding: '5px 14px', marginBottom: 18,
            backdropFilter: 'blur(8px)',
            
          }}>
            <span className="ah-ping" />
            <span style={{ color: 'rgba(255,255,255,.75)', fontSize: '.74rem', fontWeight: 600, letterSpacing: '.07em' }}>
              Full Stack Developer
            </span>
          </div>

          {/* NAME — slides left on scroll */}
          <h1
            ref={nameRef}
            style={{
              fontSize: 'clamp(2.8rem, 7.5vw, 3.8rem)',
              fontWeight: 800, color: '#fff',
              lineHeight: 1.06, letterSpacing: '-0.035em',
              marginBottom: 14, whiteSpace: 'nowrap',
              
            }}
          >
            Hi, I&apos;m{' '}
            <span style={{
              background: 'linear-gradient(135deg,#fff 25%,rgba(255,255,255,.5))',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>
              Omar.
            </span>
          </h1>

          {/* Description + Buttons — slide right on scroll */}
          <div className="ah-center-sub" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', willChange: 'transform' }}>
            <p style={{
              color: 'rgba(255,255,255,.5)',
              fontSize: 'clamp(.82rem,1.9vw,.98rem)',
              lineHeight: 1.75, marginBottom: 28, maxWidth: 400,
            }}>
              Building ultra-fast, modern web applications with 4+ years of
              full-stack expertise — from sleek UIs to scalable backends.
            </p>

            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link href="/#projects" className="ah-btn-p">
                View Projects <ArrowUpRightFromCircle size={15} />
              </Link>
              <a href="/cv.pdf" className="ah-btn-s">
                View My CV <ArrowUpRightFromCircle size={15} />
              </a>
            </div>
          </div>
        </div>

        {/* ── SIDEBAR LABELS ── */}
        <div style={{
          position: 'absolute', right: 20, top: '50%',
          transform: 'translateY(-50%)', zIndex: 10,
          display: 'flex', flexDirection: 'column', gap: 14,
        }}
        
        >
          {['ABOUT','SKILLS','PROJECTS','CONTACT'].map((label, i) => (
            <Link
            className='hidden lg:flex'
              key={label}
              href={"#"+label.toLowerCase()}
              style={{
                fontSize: '.70rem', fontWeight: 700,
                color: 'rgba(255,255,255,.22)', letterSpacing: '.14em',
                cursor: 'pointer', transition: 'color .2s', userSelect: 'none',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,.82)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,.22)')}
            >
              {String(i + 1).padStart(2, '0')} — {label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default AnimateHero;
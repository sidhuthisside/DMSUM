import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, PerspectiveCamera, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { platformsList } from '../data/platforms';
import { tools } from '../data/tools';
import ToolIcon from '../components/ui/ToolIcon';

// ─── 3D COMPONENTS: ARCHITECTURAL CONSTELLATION ───────────────────────────────
function Constellation() {
  const pointsRef = useRef();
  const lineRef = useRef();
  const [particles] = useState(() => {
    const p = new Float32Array(500 * 3);
    for (let i = 0; i < 500; i++) {
      p[i * 3] = (Math.random() - 0.5) * 15;
      p[i * 3 + 1] = (Math.random() - 0.5) * 15;
      p[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return p;
  });

  useFrame((state) => {
    pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    pointsRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.05;
  });

  return (
    <group ref={pointsRef}>
      <Points positions={particles}>
        <PointMaterial
          transparent
          color="#D4AF37"
          size={0.04}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
      {/* Subtle field glow */}
      <mesh>
        <sphereGeometry args={[10, 32, 32]} />
        <meshBasicMaterial color="#D4AF37" transparent opacity={0.02} side={THREE.BackSide} />
      </mesh>
    </group>
  );
}

function HomeHeroScene() {
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
      pointerEvents: 'none',
      opacity: 0.8,
    }}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
        <ambientLight intensity={0.2} />
        <Stars radius={100} depth={50} count={3000} factor={2} saturation={0} fade speed={1} />
        <Constellation />
      </Canvas>
    </div>
  );
}

// ─── ANIMATED COUNTER ────────────────────────────────────────────────────────
function AnimatedCounter({ target, suffix = '', duration = 2500 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const startTime = performance.now();
        const numTarget = parseFloat(target);
        const animate = (now) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ultra-smooth quartic easing
          const eased = 1 - Math.pow(1 - progress, 4);
          setCount(Math.floor(eased * numTarget));
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

// ─── PLATFORM CARD ────────────────────────────────────────────────────────────
function PlatformCard({ platform }) {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={() => navigate(`/platform/${platform.id}`)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        cursor: 'pointer',
        width: '280px',
        padding: '2.5rem',
        background: 'var(--bg-card)',
        border: '1px solid var(--border-soft)',
        position: 'relative',
        transition: 'all 1.2s cubic-bezier(0.19, 1, 0.22, 1)',
        transform: hovered ? 'translateY(-10px)' : 'translateY(0)',
        boxShadow: hovered ? '0 40px 80px rgba(0,0,0,0.5)' : 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }}
    >
      {/* Decorative Gold Top Border Line */}
      <div style={{
        position: 'absolute', top: 0, left: '10%', width: hovered ? '80%' : '0%',
        height: '1px', background: 'var(--accent-gold)',
        transition: 'width 0.8s ease',
      }} />

      <div style={{ 
        color: platform.color, fontSize: '10px', fontWeight: 600, 
        letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem',
        opacity: 0.8, fontFamily: "'Inter', sans-serif"
      }}>
        {platform.name} Ecosystem
      </div>

      <h3 style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: '1.75rem', color: 'var(--text-bright)',
        marginBottom: '1rem', fontWeight: 400
      }}>
        {platform.name}
      </h3>

      <p style={{
        color: 'var(--text-mid)', fontSize: '13px', lineHeight: 1.6,
        marginBottom: '2rem', height: '3.2rem', overflow: 'hidden'
      }}>
        {platform.tagline}
      </p>

      {/* Modern minimal stats */}
      <div style={{ display: 'flex', gap: '2rem', borderTop: '1px solid var(--border-soft)', paddingTop: '1.5rem', width: '100%', justifyContent: 'center' }}>
        <div>
          <div style={{ color: 'var(--text-bright)', fontSize: '14px', fontWeight: 500 }}>{platform.stats.tools}</div>
          <div style={{ color: 'var(--text-dim)', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Tools</div>
        </div>
        <div style={{ width: '1px', height: '20px', background: 'var(--border-soft)' }} />
        <div>
          <div style={{ color: 'var(--text-bright)', fontSize: '14px', fontWeight: 500 }}>{platform.stats.users}</div>
          <div style={{ color: 'var(--text-dim)', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Reach</div>
        </div>
      </div>

      <div style={{
        marginTop: '2rem', fontSize: '11px', color: 'var(--accent-gold)', 
        textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600,
        opacity: hovered ? 1 : 0, transition: 'opacity 0.6s'
      }}>
        Explore Toolkit
      </div>
    </div>
  );
}


// ─── MARQUEE TOOL CHIP ────────────────────────────────────────────────────────
function ToolChip({ tool }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: '12px',
      background: 'transparent',
      border: '1px solid var(--border-soft)',
      padding: '10px 22px',
      whiteSpace: 'nowrap',
      color: 'var(--text-mid)',
      fontSize: '13px',
      fontFamily: "'Inter', sans-serif",
      letterSpacing: '0.02em'
    }}>
      <ToolIcon category={tool.category} size={14} color="var(--accent-gold)" />
      {tool.name}
    </div>
  );
}

// ─── HOME PAGE ────────────────────────────────────────────────────────────────
export default function Home() {
  const navigate = useNavigate();
  const totalTools = tools.length;

  const row1 = tools.filter((_, i) => i % 2 === 0);
  const row2 = tools.filter((_, i) => i % 2 === 1);

  return (
    <div style={{ minHeight: '100vh', paddingTop: '64px', position: 'relative', overflow: 'hidden' }}>
      
      {/* ── HERO SECTION ── */}
      <section
        style={{ 
          padding: '6rem 2rem', 
          textAlign: 'center', 
          position: 'relative',
          minHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <HomeHeroScene />

        {/* Content Overlay */}
        <div className="fade-in-luxury" style={{ position: 'relative', zIndex: 1 }}>
          
          <div style={{
            color: 'var(--accent-gold)', fontSize: '12px', letterSpacing: '0.4em',
            textTransform: 'uppercase', fontWeight: 600, marginBottom: '2.5rem',
            fontFamily: "'Inter', sans-serif"
          }}>
            Established MMXVI — Curating the Elite
          </div>

          <h1 className="text-hero" style={{ 
            marginBottom: '2.5rem', color: 'var(--text-bright)', 
            maxWidth: '1000px', lineHeight: 1.2
          }}>
            The Ultimate <br/>
            <span style={{ fontStyle: 'italic', color: 'var(--accent-gold)' }}>Marketer's</span> Toolkit
          </h1>

          <p style={{
            color: 'var(--text-mid)', maxWidth: '650px', margin: '0 auto 4rem',
            lineHeight: 1.8, fontSize: '16px', fontFamily: "'Inter', sans-serif",
            fontWeight: 300, letterSpacing: '0.01em'
          }}>
            A bespoke collection of advanced analytical instruments and creative platforms, 
            mathematically curated for the modern digital strategist. 
            Compare the world's most powerful marketing tools in one unified interface.
          </p>

          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => navigate('/platform/facebook')}
              className="btn-premium"
              style={{ background: 'var(--accent-gold)', color: '#000' }}
            >
              Explore the Collection
            </button>
            <button
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
              className="btn-premium"
            >
              View Ecosystems
            </button>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ROW ── */}
      <div style={{ padding: '2rem 0', borderTop: '1px solid var(--border-soft)', borderBottom: '1px solid var(--border-soft)', background: 'rgba(255,255,255,0.01)' }}>
        <section style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
          <div className="marquee-luxury" style={{ display: 'flex', gap: '3rem' }}>
            {[...row1, ...row1].map((tool, i) => (
              <ToolChip key={`r1-${i}`} tool={tool} />
            ))}
          </div>
        </section>
      </div>

      {/* ── STATS SECTION ── */}
      <section style={{ padding: '8rem 2rem', maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '4rem'
        }}>
          {[
            { label: 'Analytical Tools', value: totalTools, suffix: '+', color: 'var(--accent-gold)' },
            { label: 'Global Platforms', value: 5, suffix: '', color: 'var(--text-bright)' },
            { label: 'Industry Categories', value: 12, suffix: '', color: 'var(--text-bright)' },
            { label: 'Active Reach', value: 6, suffix: 'B+', color: 'var(--accent-gold)' },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '4rem',
                color: stat.color,
                marginBottom: '0.5rem',
                fontWeight: 300
              }}>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div style={{ 
                color: 'var(--text-dim)', fontSize: '11px', textTransform: 'uppercase', 
                letterSpacing: '0.2em', fontFamily: "'Inter', sans-serif" 
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PLATFORM ECOSYSTEMS ── */}
      <section style={{ padding: '4rem 2rem 10rem', maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <div style={{ color: 'var(--accent-gold)', fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            The Architecture
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '3.5rem', color: 'var(--text-bright)', marginBottom: '1.5rem' }}>
            Digital Ecosystems
          </h2>
          <div style={{ width: '60px', height: '1px', background: 'var(--accent-gold)', margin: '0 auto' }} />
        </div>

        <div style={{
          display: 'flex',
          gap: '2.5rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {platformsList.map((p) => (
            <PlatformCard key={p.id} platform={p} />
          ))}
        </div>
      </section>

      {/* ── FOOTER STYLE DIVIDER ── */}
      <div style={{ height: '300px', background: 'linear-gradient(to bottom, transparent, var(--bg-surface))', borderTop: '1px solid var(--border-soft)' }} />

    </div>
  );
}

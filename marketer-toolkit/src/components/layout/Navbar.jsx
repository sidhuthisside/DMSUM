import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { platformsList } from '../../data/platforms';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      id="main-navbar"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.8s cubic-bezier(0.19, 1, 0.22, 1)',
        background: scrolled ? 'rgba(8, 8, 8, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-gold)' : '1px solid transparent',
        padding: '0 3rem',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', alignItems: 'center', height: scrolled ? '64px' : '84px', gap: '3rem', transition: 'height 0.8s ease' }}>
        
        {/* Logo */}
        <button
          id="nav-logo"
          onClick={() => navigate('/')}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            flexShrink: 0,
          }}
        >
          <div style={{
            width: 32, height: 32, borderRadius: '2px',
            border: '1.5px solid var(--accent-gold)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '14px', color: 'var(--accent-gold)',
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 700,
          }}>
            MT
          </div>
          <span style={{ 
            color: 'var(--text-bright)', 
            fontWeight: 500, 
            fontSize: '22px', 
            fontFamily: "'Cormorant Garamond', serif",
            letterSpacing: '0.02em' 
          }}>
            The <span style={{ color: 'var(--accent-gold)' }}>Marketer's</span> Toolkit
          </span>
        </button>

        {/* Platform Nav — desktop */}
        <div
          id="nav-platforms"
          style={{ display: 'flex', gap: '2rem', alignItems: 'center', flex: 1 }}
          className="hide-mobile"
        >
          {platformsList.map((p) => (
            <NavLink
              key={p.id}
              to={`/platform/${p.id}`}
              id={`nav-link-${p.id}`}
              style={({ isActive }) => ({
                fontSize: '12px',
                fontWeight: 600,
                fontFamily: "'Inter', sans-serif",
                textDecoration: 'none',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                transition: 'all 0.4s ease',
                color: isActive ? 'var(--accent-gold)' : 'var(--text-dim)',
                position: 'relative',
              })}
              onMouseEnter={(e) => { if (e.currentTarget.style.color !== 'var(--accent-gold)') e.currentTarget.style.color = 'var(--text-mid)'; }}
              onMouseLeave={(e) => { if (e.currentTarget.style.color !== 'var(--accent-gold)') e.currentTarget.style.color = 'var(--text-dim)'; }}
            >
              {p.name}
              <div style={{
                position: 'absolute', bottom: '-4px', left: 0, width: '100%', height: '1px',
                background: 'var(--accent-gold)', transform: 'scaleX(0)', transformOrigin: 'right',
                transition: 'transform 0.4s ease', opacity: 0.5
              }} className="nav-underline" />
            </NavLink>
          ))}
        </div>

        <NavLink
            to="/consultant"
            className="hide-mobile"
            style={({ isActive }) => ({
               display: 'flex', alignItems: 'center', gap: '8px',
               padding: '10px 24px', borderRadius: '2px',
               fontSize: '12px', fontWeight: 600, fontFamily: "'Inter', sans-serif",
               textDecoration: 'none', transition: 'all 0.8s cubic-bezier(0.19, 1, 0.22, 1)',
               textTransform: 'uppercase', letterSpacing: '0.1em',
               color: isActive ? '#000' : 'var(--accent-gold)',
               background: isActive ? 'var(--accent-gold)' : 'transparent',
               border: '1.5px solid var(--accent-gold)',
               boxShadow: isActive ? '0 10px 30px rgba(212, 175, 55, 0.2)' : 'none',
            })}
        >
          <span>🤖</span> AI Consultant
        </NavLink>

        {/* Hamburger — mobile */}
        <button
          id="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          className="show-mobile"
          style={{
            marginLeft: 'auto', background: 'none', border: 'none',
            width: 32, height: 32, cursor: 'pointer',
            display: 'flex', flexDirection: 'column', gap: '6px',
            alignItems: 'flex-end', justifyContent: 'center'
          }}
        >
          <div style={{ width: '100%', height: '1px', background: 'var(--accent-gold)', transition: '0.4s' }} />
          <div style={{ width: '70%', height: '1px', background: 'var(--accent-gold)', transition: '0.4s' }} />
          <div style={{ width: '40%', height: '1px', background: 'var(--accent-gold)', transition: '0.4s' }} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          id="nav-mobile-menu"
          style={{
            background: 'var(--bg-void)',
            position: 'absolute', top: '100%', left: 0, width: '100%',
            padding: '2rem 3rem', display: 'flex', flexDirection: 'column', gap: '1.5rem',
            borderBottom: '1px solid var(--border-gold)',
            boxShadow: '0 40px 100px rgba(0,0,0,0.8)'
          }}
        >
          {platformsList.map((p) => (
            <NavLink
              key={p.id}
              to={`/platform/${p.id}`}
              onClick={() => setMenuOpen(false)}
              style={({ isActive }) => ({
                fontSize: '18px', fontFamily: "'Cormorant Garamond', serif",
                textDecoration: 'none', color: isActive ? 'var(--accent-gold)' : 'var(--text-mid)',
              })}
            >
              {p.name}
            </NavLink>
          ))}
          <NavLink
               to="/consultant"
               onClick={() => setMenuOpen(false)}
               style={{
                 fontSize: '18px', fontFamily: "'Cormorant Garamond', serif",
                 textDecoration: 'none', color: 'var(--accent-gold)', fontWeight: 600,
                 marginTop: '1rem', borderTop: '0.5px solid var(--border-gold)', paddingTop: '1.5rem'
               }}
             >
               AI Consultant 🤖
             </NavLink>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .hide-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 901px) {
          .show-mobile { display: none !important; }
          .hide-mobile { display: flex !important; }
        }
        .nav-underline { transform-origin: right; }
        .active .nav-underline { transform: scaleX(1) !important; transform-origin: left !important; }
      `}</style>
    </nav>
  );
}

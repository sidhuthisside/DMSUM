import React from 'react';
import { useNavigate } from 'react-router-dom';
import { platformsList } from '../../data/platforms';

export default function Footer() {
  const navigate = useNavigate();
  const year = new Date().getFullYear();

  return (
    <footer
      id="site-footer"
      style={{
        borderTop: '1px solid var(--border-soft)',
        background: 'var(--bg-surface)',
        padding: '3rem 2rem 2rem',
        marginTop: '6rem',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '2.5rem' }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.75rem' }}>
              <div style={{
                width: 30, height: 30, borderRadius: '8px',
                background: 'linear-gradient(135deg, var(--accent-gold), #8D6E63)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '14px',
              }}>🛠</div>
              <span className="font-display" style={{ color: 'var(--text-bright)', fontWeight: 700, fontSize: '0.9rem' }}>
                Marketer's <span style={{ color: 'var(--accent-gold)' }}>Toolkit</span>
              </span>
            </div>
            <p style={{ color: 'var(--text-mid)', fontSize: '13px', lineHeight: 1.6, maxWidth: '220px' }}>
              Your complete guide to social media marketing tools across every major platform.
            </p>
          </div>

          {/* Platforms */}
          <div>
            <h4 className="font-display" style={{ color: 'var(--text-bright)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Platforms
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {platformsList.map((p) => (
                <li key={p.id}>
                  <button
                    id={`footer-link-${p.id}`}
                    onClick={() => navigate(`/platform/${p.id}`)}
                    style={{
                      background: 'none', border: 'none', cursor: 'pointer',
                      color: 'var(--text-mid)', fontSize: '13px',
                      fontFamily: "'DM Sans', sans-serif",
                      padding: 0,
                      transition: 'color 0.2s',
                      display: 'flex', alignItems: 'center', gap: '6px',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-bright)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-mid)'}
                  >
                    <span>{p.emoji}</span>
                    <span>{p.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats */}
          <div>
            <h4 className="font-display" style={{ color: 'var(--text-bright)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              By The Numbers
            </h4>
            {[
              { label: 'Total Tools', value: '55+' },
              { label: 'Platforms Covered', value: '5' },
              { label: 'Free Tools', value: '12+' },
              { label: 'Categories', value: '10+' },
            ].map((stat) => (
              <div key={stat.label} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', maxWidth: '180px' }}>
                <span style={{ color: 'var(--text-mid)', fontSize: '13px' }}>{stat.label}</span>
                <span style={{ color: 'var(--accent-gold)', fontSize: '13px', fontFamily: "'JetBrains Mono', monospace", fontWeight: 600 }}>{stat.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid var(--border-soft)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
          flexWrap: 'wrap',
        }}>
          <p style={{ color: 'var(--text-dim)', fontSize: '12px', fontFamily: "'DM Sans', sans-serif" }}>
            © {year} The Marketer's Toolkit. Built for modern marketers.
          </p>
          <p style={{ color: 'var(--text-dim)', fontSize: '12px', fontFamily: "'JetBrains Mono', monospace" }}>
            v1.0.0
          </p>
        </div>
      </div>
    </footer>
  );
}

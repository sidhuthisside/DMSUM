import React, { useState } from 'react';
import ToolIcon from './ToolIcon';

const pricingConfig = {
  free:      { label: 'Complimentary',  color: 'var(--text-bright)',  bg: 'rgba(255,255,255,0.05)' },
  freemium:  { label: 'Professional',   color: 'var(--accent-gold)',   bg: 'rgba(212, 175, 55, 0.1)' },
  paid:      { label: 'Enterprise',     color: 'var(--accent-gold)',   bg: 'rgba(212, 175, 55, 0.1)' },
};

function StarRating({ rating }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
      {[1, 2, 3, 4, 5].map((s) => (
        <span
          key={s}
          style={{
            fontSize: '10px',
            color: s <= Math.round(rating) ? 'var(--accent-gold)' : 'var(--text-dim)',
            lineHeight: 1,
            opacity: s <= Math.round(rating) ? 1 : 0.4
          }}
        >★</span>
      ))}
      <span style={{
        fontSize: '11px',
        color: 'var(--text-dim)',
        fontFamily: "'Inter', sans-serif",
        marginLeft: '4px',
        fontWeight: 500
      }}>
        {rating.toFixed(1)}
      </span>
    </div>
  );
}

export default function ToolCard({ tool, platformColor, onClick }) {
  const [hovered, setHovered] = useState(false);
  const pricing = pricingConfig[tool.pricing] || pricingConfig.paid;

  return (
    <div
      onClick={() => onClick(tool)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-soft)',
        padding: '1.75rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        cursor: 'pointer',
        transition: 'all 1.2s cubic-bezier(0.19, 1, 0.22, 1)',
        transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: hovered ? '0 30px 60px rgba(0,0,0,0.4)' : 'none',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Decorative Corner Accent */}
      <div style={{
        position: 'absolute', top: 0, right: 0, width: '40px', height: '40px',
        background: hovered ? 'var(--accent-gold)' : 'transparent',
        clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
        opacity: 0.1,
        transition: 'background 0.8s ease'
      }} />

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem' }}>
        <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
          <div style={{
            width: 44, height: 44, 
            border: '1px solid var(--border-gold)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '20px', flexShrink: 0,
            background: 'rgba(212, 175, 55, 0.03)'
          }}>
            <ToolIcon category={tool.category} size={20} color="var(--accent-gold)" />
          </div>
          <div>
            <h3 style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: 'var(--text-bright)',
              fontSize: '1.25rem',
              fontWeight: 400,
              lineHeight: 1.2,
              margin: 0,
              letterSpacing: '0.01em'
            }}>
              {tool.name}
            </h3>
            <StarRating rating={tool.rating} />
          </div>
        </div>
      </div>

      {/* Category Tag */}
      <div style={{
        fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.2em',
        color: 'var(--accent-gold)', fontWeight: 600, fontFamily: "'Inter', sans-serif",
        opacity: 0.8
      }}>
        {tool.category}
      </div>

      {/* Description */}
      <p style={{
        color: 'var(--text-mid)',
        fontSize: '13px',
        lineHeight: 1.7,
        flex: 1,
        fontWeight: 300,
        fontFamily: "'Inter', sans-serif"
      }}>
        {tool.description}
      </p>

      {/* Footer / Pricing */}
      <div style={{ 
        marginTop: '1.5rem', paddingTop: '1.5rem', 
        borderTop: '1px solid var(--border-soft)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: 4, height: 4, borderRadius: '50%', background: pricing.color }} />
          <span style={{ 
            fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.15em', 
            color: pricing.color, fontWeight: 500, fontFamily: "'Inter', sans-serif" 
          }}>
            {pricing.label}
          </span>
        </div>
        
        <div style={{
          fontSize: '10px', color: 'var(--text-dim)', textTransform: 'uppercase', 
          letterSpacing: '0.1em', fontWeight: 600,
          opacity: hovered ? 1 : 0, transition: 'opacity 0.6s'
        }}>
          Research Tool →
        </div>
      </div>
    </div>
  );
}

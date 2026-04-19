import React, { useEffect } from 'react';
import ToolVisualizer from './ToolVisualizer';
import ToolIcon from './ToolIcon';

function StarRating({ rating }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
      {[1, 2, 3, 4, 5].map((s) => (
        <span
          key={s}
          style={{
            fontSize: '11px',
            color: s <= Math.round(rating) ? 'var(--accent-gold)' : 'var(--text-dim)',
            lineHeight: 1,
            opacity: s <= Math.round(rating) ? 1 : 0.4
          }}
        >★</span>
      ))}
      <span style={{
        fontSize: '12px',
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

const pricingConfig = {
  free:      { label: 'Complimentary',  color: 'var(--text-bright)',  bg: 'rgba(255,255,255,0.05)' },
  freemium:  { label: 'Professional',   color: 'var(--accent-gold)',   bg: 'rgba(212, 175, 55, 0.1)' },
  paid:      { label: 'Enterprise',     color: 'var(--accent-gold)',   bg: 'rgba(212, 175, 55, 0.1)' },
};

export default function ToolDetailModal({ isOpen, onClose, tool, platformColor }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (!isOpen || !tool) return null;

  const pricing = pricingConfig[tool.pricing] || pricingConfig.paid;

  return (
    <div
      id={`modal-overlay-${tool.id}`}
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(5, 5, 5, 0.9)',
        backdropFilter: 'blur(20px)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        animation: 'fadeIn 0.6s ease',
      }}
    >
      <style>
        {`
          @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
          @keyframes modalY { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        `}
      </style>

      {/* Modal Content */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-gold)',
          width: '100%',
          maxWidth: '900px',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: `0 40px 100px rgba(0,0,0,0.8)`,
          position: 'relative',
          overflow: 'hidden',
          animation: 'modalY 0.8s cubic-bezier(0.19, 1, 0.22, 1)',
        }}
      >
        {/* Modal Header */}
        <div style={{
          padding: '3rem 3rem 2rem',
          borderBottom: '1px solid var(--border-soft)',
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '2rem',
        }}>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <div style={{
              width: 70, height: 70, 
              border: '1px solid var(--border-gold)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
              background: 'rgba(212, 175, 55, 0.05)'
            }}>
              <ToolIcon category={tool.category} size={28} color="var(--accent-gold)" />
            </div>
            <div>
               <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '8px' }}>
                <h2 style={{ color: 'var(--text-bright)', fontSize: '28px', margin: 0, fontWeight: 400, fontFamily: "'Cormorant Garamond', serif" }}>
                  {tool.name}
                </h2>
                <span style={{
                  background: pricing.bg, color: pricing.color,
                  border: '1px solid var(--border-gold)',
                  borderRadius: '2px', padding: '2px 12px',
                  fontSize: '10px', fontFamily: "'Inter', sans-serif",
                  fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase'
                }}>
                  {pricing.label}
                </span>
              </div>
              <p style={{ color: 'var(--accent-gold)', fontSize: '15px', fontFamily: "'Inter', sans-serif", fontWeight: 500, margin: '0 0 10px', letterSpacing: '0.02em' }}>
                {tool.tagline}
              </p>
              <StarRating rating={tool.rating} />
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <button
              onClick={onClose}
              style={{
                background: 'transparent', border: 'none',
                width: 40, height: 40,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--text-dim)', fontSize: '28px', cursor: 'pointer',
                transition: 'color 0.4s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent-gold)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-dim)'; }}
            >
              ×
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div style={{
          padding: '4rem 3rem',
          overflowY: 'auto',
          position: 'relative',
          zIndex: 1,
          flex: 1,
          minHeight: 0,
        }}>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4rem',
            marginBottom: '5rem',
          }}>
            <div>
              <div style={{ color: 'var(--accent-gold)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2rem', marginBottom: '1.5rem' }}>
                Executive Summary
              </div>
              <p style={{ color: 'var(--text-mid)', fontSize: '16px', lineHeight: 1.8, fontWeight: 300, fontFamily: "'Inter', sans-serif" }}>
                {tool.description}
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              <div>
                <div style={{ color: 'var(--text-bright)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem', fontWeight: 600 }}>
                  High-Performance Strengths
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {tool.pros.map((pro, i) => (
                    <li key={i} style={{ color: 'var(--text-mid)', fontSize: '14px', display: 'flex', gap: '12px', alignItems: 'center' }}>
                      <div style={{ width: 4, height: 1, background: 'var(--accent-gold)' }} />
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
        </div>

          {/* Strategic Implementation Guide (NEW in Modal) */}
          {tool.strategicGuide && (
            <div style={{ marginBottom: '5rem', borderTop: '1px solid var(--border-soft)', paddingTop: '4rem' }}>
              <div style={{ color: 'var(--accent-gold)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2rem', marginBottom: '2.5rem', textAlign: 'center' }}>
                {tool.strategicGuide.title || "Implementation Strategy"}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2.5rem' }}>
                {tool.strategicGuide.steps.map((step, idx) => {
                  const stepLabel = typeof step === 'string' ? (step.split(' - ')[0] || `Phase ${idx+1}`) : step.phase;
                  const stepContent = typeof step === 'string' ? (step.split(' - ').slice(1).join(' - ') || step) : step.action;
                  return (
                    <div key={idx} style={{ textAlign: 'center' }}>
                      <div style={{ color: 'var(--accent-gold)', fontSize: '11px', fontStyle: 'italic', marginBottom: '0.5rem', opacity: 0.6 }}>0{idx + 1}</div>
                      <div style={{ color: 'var(--text-bright)', fontSize: '15px', marginBottom: '0.75rem', fontWeight: 500 }}>{stepLabel}</div>
                      <div style={{ color: 'var(--text-dim)', fontSize: '13px', lineHeight: 1.6 }}>{stepContent}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Visualization Cluster */}
          <div style={{ borderTop: '1px solid var(--border-soft)', paddingTop: '4rem' }}>
            <ToolVisualizer tool={tool} platformColor="var(--accent-gold)" />
          </div>

          <div style={{ marginTop: '5rem', textAlign: 'center' }}>
            <a
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium"
              style={{ background: 'var(--accent-gold)', color: '#000', textDecoration: 'none', display: 'inline-block' }}
            >
              Access Strategic Platform ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

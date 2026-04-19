import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { tools } from '../data/tools';
import { platforms } from '../data/platforms';
import ToolVisualizer from '../components/ui/ToolVisualizer';
import ToolIcon from '../components/ui/ToolIcon';

const pricingConfig = {
  free:      { label: 'Complimentary',  color: 'var(--text-bright)',  bg: 'rgba(255,255,255,0.05)' },
  freemium:  { label: 'Professional',   color: 'var(--accent-gold)',   bg: 'rgba(212, 175, 55, 0.1)' },
  paid:      { label: 'Enterprise',     color: 'var(--accent-gold)',   bg: 'rgba(212, 175, 55, 0.1)' },
};

function StarRating({ rating }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
      {[1, 2, 3, 4, 5].map((s) => (
        <span
          key={s}
          style={{
            fontSize: '12px',
            color: s <= Math.round(rating) ? 'var(--accent-gold)' : 'var(--text-dim)',
            lineHeight: 1,
            opacity: s <= Math.round(rating) ? 1 : 0.4
          }}
        >★</span>
      ))}
      <span style={{
        fontSize: '13px',
        color: 'var(--text-mid)',
        fontFamily: "'Inter', sans-serif",
        marginLeft: '6px',
        fontWeight: 500
      }}>
        {rating.toFixed(1)} / 5.0 Rating
      </span>
    </div>
  );
}

export default function ToolPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const tool = tools.find((t) => t.id === id);

  if (!tool) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '2rem', paddingTop: '64px', background: 'var(--bg-void)' }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: 'var(--text-bright)', fontSize: '2rem' }}>Tool Not Found</h2>
        <button onClick={() => navigate('/')} className="btn-premium">
          Return to Collections
        </button>
      </div>
    );
  }

  const platform = platforms[tool.platform];
  const pricing = pricingConfig[tool.pricing] || pricingConfig.paid;

  return (
    <div id={`tool-page-${tool.id}`} style={{ minHeight: '100vh', paddingTop: '64px', paddingBottom: '8rem', background: 'var(--bg-void)' }}>
      
      {/* ── HEADER BANNER ── */}
      <section style={{
        background: `var(--bg-surface)`,
        borderBottom: `1px solid var(--border-gold)`,
        padding: '5rem 3rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          
          {/* Breadcrumb Navigation */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '3.5rem', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', opacity: 0.5 }}>
            <button
              onClick={() => navigate(`/platform/${tool.platform}`)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-bright)', padding: 0 }}
            >
              {platform?.name || 'Ecosystem'}
            </button>
            <span>/</span>
            <span style={{ color: 'var(--accent-gold)' }}>{tool.name} Configuration</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '3rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
              <div style={{
                width: 90, height: 90, 
                border: '1px solid var(--border-gold)',
                background: 'rgba(212, 175, 55, 0.05)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <ToolIcon category={tool.category} size={40} color="var(--accent-gold)" />
              </div>
              <div>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '1rem', flexWrap: 'wrap' }}>
                  <h1 style={{ color: 'var(--text-bright)', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', margin: 0, fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}>
                    {tool.name}
                  </h1>
                  <span style={{
                    background: pricing.bg, color: pricing.color,
                    border: '1px solid var(--border-gold)',
                    borderRadius: '2px', padding: '4px 16px',
                    fontSize: '11px', fontFamily: "'Inter', sans-serif",
                    fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase'
                  }}>
                    {pricing.label} Class
                  </span>
                </div>
                <p style={{ color: 'var(--accent-gold)', fontSize: '16px', fontFamily: "'Inter', sans-serif", fontWeight: 500, margin: '0 0 12px', letterSpacing: '0.05em' }}>
                  {tool.tagline}
                </p>
                <StarRating rating={tool.rating} />
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium"
                style={{ background: 'var(--accent-gold)', color: '#000', textDecoration: 'none' }}
              >
                Access Platform ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── PAGE CONTENT ── */}
      <section style={{ padding: '5rem 3rem', maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* About & Features */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '5rem',
          marginBottom: '6rem',
        }}>
          {/* Analysis Block */}
          <div>
            <div style={{ color: 'var(--accent-gold)', fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
              Executive Summary
            </div>
            <p style={{ color: 'var(--text-mid)', fontSize: '18px', lineHeight: 1.9, fontWeight: 300, fontFamily: "'Inter', sans-serif" }}>
              {tool.description}
            </p>
            
            <div style={{ marginTop: '3rem', borderTop: '1px solid var(--border-soft)', paddingTop: '2.5rem' }}>
              <div style={{ color: 'var(--text-dim)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '8px' }}>Pricing Architecture</div>
              <p style={{ color: 'var(--text-bright)', fontSize: '15px', fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>{tool.pricingNote || "Custom Enterprise pricing upon consultation."}</p>
            </div>
          </div>

          {/* Assessment Block */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            <div>
              <div style={{ color: 'var(--text-bright)', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.5rem', fontWeight: 600 }}>
                High-Performance Advantages
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {tool.pros.map((pro, i) => (
                  <li key={i} style={{ color: 'var(--text-mid)', fontSize: '15px', display: 'flex', gap: '16px', lineHeight: 1.6, alignItems: 'center' }}>
                    <div style={{ width: '5px', height: '1px', background: 'var(--accent-gold)' }} />
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            
            <div style={{ borderTop: '1px solid var(--border-soft)', paddingTop: '2.5rem' }}>
              <div style={{ color: 'var(--text-dim)', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.5rem', fontWeight: 600 }}>
                Navigational Constraints
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {tool.cons.map((con, i) => (
                  <li key={i} style={{ color: 'var(--text-dim)', fontSize: '15px', display: 'flex', gap: '16px', lineHeight: 1.6, alignItems: 'center' }}>
                    <div style={{ width: '5px', height: '1px', background: 'var(--text-dim)' }} />
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Implementation Strategy Section */}
        <div style={{
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-gold)',
          padding: '4rem',
          position: 'relative',
          marginBottom: '6rem',
          boxShadow: '0 20px 50px rgba(0,0,0,0.3)'
        }}>
          <div style={{ color: 'var(--accent-gold)', fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '1.5rem', textAlign: 'center' }}>
            {tool.strategicGuide?.title || "Strategic Implementation Guide"}
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem' }}>
            {(tool.strategicGuide?.steps || [
              { phase: "Phase 1", action: "Initial infrastructure and asset alignment." },
              { phase: "Phase 2", action: "Strategic account configuration and tracking." },
              { phase: "Phase 3", action: "Deployment of high-intent creative campaigns." },
              { phase: "Phase 4", action: "Analytical optimization and performance scaling." }
            ]).map((step, idx) => {
              const stepLabel = typeof step === 'string' ? (step.split(' - ')[0] || `Phase ${idx+1}`) : step.phase;
              const stepContent = typeof step === 'string' ? (step.split(' - ').slice(1).join(' - ') || step) : step.action;

              return (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                  key={idx} 
                  style={{ textAlign: 'center' }}
                >
                  <div style={{
                    color: 'var(--accent-gold)', fontSize: '12px', fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 400, marginBottom: '1rem', fontStyle: 'italic', opacity: 0.7
                  }}>
                    Operational Phase 0{idx + 1}
                  </div>
                  <h4 style={{ color: 'var(--text-bright)', fontSize: '18px', marginBottom: '1.25rem', fontWeight: 400, fontFamily: "'Cormorant Garamond', serif", letterSpacing: '0.02em' }}>
                    {stepLabel}
                  </h4>
                  <p style={{ color: 'var(--text-mid)', fontSize: '14px', lineHeight: 1.8, margin: 0, fontWeight: 300, fontFamily: "'Inter', sans-serif" }}>
                    {stepContent}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Analytical Visualization Cluster */}
        {(tool.visualizationType || tool.caseStudy) && (
          <div>
            <div style={{ color: 'var(--accent-gold)', fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '3rem', textAlign: 'center' }}>
              Analytical Projections {tool.caseStudy ? "& Case Impact" : ""}
            </div>
            <ToolVisualizer tool={tool} platformColor="var(--accent-gold)" />
          </div>
        )}

      </section>
    </div>
  );
}

import React, { useState, useMemo, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { platforms, platformCategories } from '../data/platforms';
import { getToolsByPlatformAndCategory, getToolsByPlatform } from '../data/tools';
import ToolCard from '../components/ui/ToolCard';
import CategoryFilter from '../components/ui/CategoryFilter';
import SearchBar from '../components/ui/SearchBar';

export default function Platform() {
  const { id } = useParams();
  const navigate = useNavigate();
  const platform = platforms[id];

  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(false);
    setActiveCategory('all');
    setSearchQuery('');
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, [id]);

  if (!platform) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '2rem', paddingTop: '64px', background: 'var(--bg-void)' }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: 'var(--text-bright)', fontSize: '2rem' }}>Ecosystem Not Found</h2>
        <button onClick={() => navigate('/')} className="btn-premium">
          Return to Collections
        </button>
      </div>
    );
  }

  const allPlatformTools = getToolsByPlatform(id);
  const categories = platformCategories[id] || [{ id: 'all', label: 'All Tools' }];

  const filteredTools = useMemo(() => {
    let list = getToolsByPlatformAndCategory(id, activeCategory);
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter((t) =>
        t.name.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        t.category.toLowerCase().includes(q) ||
        t.tagline.toLowerCase().includes(q)
      );
    }
    return list;
  }, [id, activeCategory, searchQuery]);

  const pricingBreakdown = useMemo(() => {
    return {
      free: allPlatformTools.filter((t) => t.pricing === 'free').length,
      freemium: allPlatformTools.filter((t) => t.pricing === 'freemium').length,
      paid: allPlatformTools.filter((t) => t.pricing === 'paid').length,
    };
  }, [allPlatformTools]);

  return (
    <div
      id={`platform-page-${id}`}
      style={{
        minHeight: '100vh',
        paddingTop: '64px',
        opacity: mounted ? 1 : 0,
        transform: mounted ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 1.5s cubic-bezier(0.19, 1, 0.22, 1)',
        background: 'var(--bg-void)'
      }}
    >
      {/* ── HERO BANNER ── */}
      <section
        id="platform-hero"
        style={{
          borderBottom: '1px solid var(--border-soft)',
          padding: '5rem 3rem',
          position: 'relative',
          background: 'radial-gradient(circle at 0% 0%, rgba(212, 175, 55, 0.05) 0%, transparent 50%)'
        }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '3rem', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', opacity: 0.5 }}>
            <button
              onClick={() => navigate('/')}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-bright)', padding: 0 }}
            >
              Collections
            </button>
            <span>/</span>
            <span style={{ color: 'var(--accent-gold)' }}>{platform.name} Ecosystem</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '4rem', flexWrap: 'wrap' }}>
            <div style={{ flex: '1.5', minWidth: '350px' }}>
              <div style={{ color: 'var(--accent-gold)', fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                The Toolkit
              </div>
              <h1 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                fontWeight: 400,
                color: 'var(--text-bright)',
                lineHeight: 1,
                marginBottom: '2rem',
              }}>
                {platform.name}
              </h1>

              <p style={{
                color: 'var(--text-mid)',
                fontSize: '17px',
                lineHeight: 1.8,
                maxWidth: '700px',
                fontWeight: 300,
                fontFamily: "'Inter', sans-serif"
              }}>
                {platform.description}
              </p>
            </div>

            {/* Premium Stats Row */}
            <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap', borderLeft: '1px solid var(--border-soft)', paddingLeft: '3rem' }}>
              {[
                { label: 'Active Users', value: platform.stats.users },
                { label: 'Analytical Tools', value: allPlatformTools.length },
                { label: 'Market Reach', value: platform.stats.reach },
              ].map((s) => (
                <div key={s.label}>
                  <div style={{
                    color: 'var(--accent-gold)',
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '2.5rem',
                    fontWeight: 300,
                    lineHeight: 1,
                    marginBottom: '8px',
                  }}>
                    {s.value}
                  </div>
                  <div style={{ color: 'var(--text-dim)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING & CLASSIFICATION BAR ── */}
      <div style={{
        background: 'rgba(255,255,255,0.01)',
        borderBottom: '1px solid var(--border-soft)',
        padding: '1.25rem 3rem',
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '3rem', flexWrap: 'wrap' }}>
          <span style={{ color: 'var(--text-dim)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Model Breakdown:</span>
          {[
            { label: `${pricingBreakdown.free} Complimentary`, color: 'var(--text-bright)' },
            { label: `${pricingBreakdown.freemium} Professional`, color: 'var(--accent-gold)' },
            { label: `${pricingBreakdown.paid} Enterprise`, color: 'var(--accent-gold)' },
          ].map((item) => (
            <span key={item.label} style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              color: item.color, fontSize: '11px', fontWeight: 500, letterSpacing: '0.05em'
            }}>
              <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: item.color, opacity: 0.6 }} />
              {item.label}
            </span>
          ))}
        </div>
      </div>

      {/* ── INTERFACE CONTROLS ── */}
      <div style={{
        position: 'sticky', top: '64px', zIndex: 50,
        background: 'rgba(5,5,10,0.9)', backdropFilter: 'blur(30px)',
        borderBottom: '1px solid var(--border-soft)',
        padding: '1.5rem 3rem',
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <CategoryFilter
            categories={categories}
            active={activeCategory}
            onChange={setActiveCategory}
            accentColor="var(--accent-gold)"
          />
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder={`Filter ${platform.name} repository...`}
            accentColor="var(--accent-gold)"
          />
        </div>
      </div>

      {/* ── REPOSITORY GRID ── */}
      <section style={{ padding: '4rem 3rem 8rem', maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ color: 'var(--text-dim)', fontSize: '12px', letterSpacing: '0.05em' }}>
            <span style={{ color: 'var(--text-bright)', fontWeight: 600 }}>{filteredTools.length}</span> Objects Recovered
            {searchQuery && ` for "${searchQuery}"`}
          </span>
          {(searchQuery || activeCategory !== 'all') && (
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
              style={{
                background: 'transparent', border: '1px solid var(--border-gold)',
                color: 'var(--accent-gold)', padding: '4px 12px',
                fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', cursor: 'pointer'
              }}
            >
              Reset Filters
            </button>
          )}
        </div>

        {filteredTools.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '8rem 2rem', color: 'var(--text-dim)' }}>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', marginBottom: '1rem', color: 'var(--text-bright)' }}>No Records Found</h3>
            <p style={{ fontSize: '14px' }}>Please refine your criteria to browse the collection.</p>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '2.5rem',
          }}>
            {filteredTools.map((tool) => (
              <ToolCard
                key={tool.id}
                tool={tool}
                platformColor="var(--accent-gold)"
                onClick={(t) => navigate(`/tool/${t.id}`)}
              />
            ))}
          </div>
        )}
      </section>

      {/* ── ECOSYSTEM NAVIGATION ── */}
      <section style={{
        background: 'var(--bg-surface)',
        borderTop: '1px solid var(--border-soft)',
        padding: '6rem 3rem',
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: 'var(--text-dim)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.3em', marginBottom: '3rem' }}>
            Navigate Other Ecosystems
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {Object.values(platforms).filter((p) => p.id !== id).map((p) => (
              <button
                key={p.id}
                onClick={() => navigate(`/platform/${p.id}`)}
                style={{
                  padding: '12px 24px', background: 'transparent',
                  border: '1px solid var(--border-soft)',
                  color: 'var(--text-mid)', fontSize: '12px',
                  textTransform: 'uppercase', letterSpacing: '0.1em',
                  cursor: 'pointer', transition: 'all 0.4s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-gold)';
                  e.currentTarget.style.color = 'var(--text-bright)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-soft)';
                  e.currentTarget.style.color = 'var(--text-mid)';
                }}
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

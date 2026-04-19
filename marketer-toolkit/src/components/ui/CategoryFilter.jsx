import React from 'react';

export default function CategoryFilter({ categories, active, onChange }) {
  return (
    <div
      id="category-filter"
      style={{
        display: 'flex',
        gap: '0.75rem',
        flexWrap: 'wrap',
        alignItems: 'center'
      }}
    >
      {categories.map((cat) => {
        const isActive = cat.id === active;
        return (
          <button
            key={cat.id}
            onClick={() => onChange(cat.id)}
            style={{
              background: isActive ? 'var(--accent-gold)' : 'transparent',
              border: '1px solid var(--border-gold)',
              borderRadius: '2px',
              padding: '6px 16px',
              fontSize: '11px',
              fontWeight: 600,
              fontFamily: "'Inter', sans-serif",
              color: isActive ? '#000' : 'var(--text-mid)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              cursor: 'pointer',
              transition: 'all 0.6s cubic-bezier(0.19, 1, 0.22, 1)',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              if (!isActive) {
                e.currentTarget.style.borderColor = 'var(--accent-gold)';
                e.currentTarget.style.color = 'var(--text-bright)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive) {
                e.currentTarget.style.borderColor = 'var(--border-gold)';
                e.currentTarget.style.color = 'var(--text-mid)';
              }
            }}
          >
            {cat.label}
          </button>
        );
      })}
    </div>
  );
}

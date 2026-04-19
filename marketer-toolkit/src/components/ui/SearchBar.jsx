import React from 'react';

export default function SearchBar({ value, onChange, placeholder }) {
  return (
    <div
      id="search-bar"
      style={{
        position: 'relative',
        flex: 1,
        minWidth: '250px',
      }}
    >
      {/* Refined Search Icon */}
      <div style={{
        position: 'absolute',
        left: '16px',
        top: '50%',
        transform: 'translateY(-50%)',
        color: 'var(--accent-gold)',
        opacity: 0.6,
        display: 'flex',
        alignItems: 'center',
        pointerEvents: 'none'
      }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </div>

      <input
        id="search-input"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder || 'Search repository...'}
        style={{
          width: '100%',
          background: 'rgba(255,255,255,0.01)',
          border: '1px solid var(--border-gold)',
          borderRadius: '2px',
          padding: '10px 16px 10px 42px',
          color: 'var(--text-bright)',
          fontSize: '12px',
          fontFamily: "'Inter', sans-serif",
          outline: 'none',
          transition: 'all 0.4s ease',
          letterSpacing: '0.02em',
        }}
        onFocus={(e) => {
          e.target.style.borderColor = 'var(--accent-gold)';
          e.target.style.background = 'rgba(212, 175, 55, 0.05)';
        }}
        onBlur={(e) => {
          e.target.style.borderColor = 'var(--border-gold)';
          e.target.style.background = 'rgba(255,255,255,0.01)';
        }}
      />

      {/* Clear button */}
      {value && (
        <button
          id="search-clear"
          onClick={() => onChange('')}
          style={{
            position: 'absolute',
            right: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--text-dim)',
            fontSize: '14px',
            padding: '4px',
            transition: 'color 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-gold)'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-dim)'}
        >
          ✕
        </button>
      )}
    </div>
  );
}

import React from 'react';

// PUBLIC_INTERFACE
export default function FilterChips({ items, value, onChange }) {
  /** Horizontal filter chips with active state and overflow scroll. */
  return (
    <div className="chips" role="tablist" aria-label="Content Filters">
      {items.map((chip) => (
        <button
          key={chip.value}
          role="tab"
          aria-selected={value === chip.value}
          className={`chip ${value === chip.value ? 'active' : ''}`}
          onClick={() => onChange(chip.value)}
        >
          {chip.label} {chip.iconRight ? chip.iconRight : null}
        </button>
      ))}
    </div>
  );
}

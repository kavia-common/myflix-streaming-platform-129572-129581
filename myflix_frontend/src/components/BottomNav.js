import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IconHome, IconGame, IconHot, IconProfile, IconDownload } from './Icons';

// PUBLIC_INTERFACE
export default function BottomNav() {
  /** Mobile-style bottom navigation with 5 items; highlights active route. */
  const location = useLocation();
  const navigate = useNavigate();

  const items = [
    { label: 'Home', path: '/', icon: <IconHome /> },
    { label: 'Games', path: '/games', icon: <IconGame /> },
    { label: 'New & Hot', path: '/new', icon: <IconHot /> },
    { label: 'My Netflix', path: '/watchlist', icon: <IconProfile /> },
    { label: 'Downloads', path: '/downloads', icon: <IconDownload /> },
  ];

  const current = location.pathname;
  return (
    <nav className="bottom-nav" role="navigation" aria-label="Primary">
      {items.map((it) => (
        <button
          key={it.path}
          className={`bottom-item ${current === it.path ? 'active' : ''}`}
          onClick={() => navigate(it.path)}
          aria-label={it.label}
        >
          <div>{it.icon}</div>
          <div>{it.label}</div>
        </button>
      ))}
    </nav>
  );
}

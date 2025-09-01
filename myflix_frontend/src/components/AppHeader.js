import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { IconCast, IconSearch, IconProfile } from './Icons';
import { useAuth } from '../state/AuthContext';

// PUBLIC_INTERFACE
export default function AppHeader() {
  /** Sticky header with "For [Name]" and utility icons; search navigates to /search. */
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const location = useLocation();

  const onSearch = () => {
    if (location.pathname !== '/search') navigate('/search');
  };

  return (
    <header className="app-header" role="banner">
      <div className="left" aria-label="Profile Context">
        For {user?.name || 'Guest'}
      </div>
      <div className="right">
        <button className="icon-btn" aria-label="Cast"><IconCast /></button>
        <button className="icon-btn" aria-label="Search" onClick={onSearch}><IconSearch /></button>
        <button className="icon-btn" aria-label="Profile" onClick={() => (user ? logout() : navigate('/login'))} title={user ? 'Logout' : 'Login'}>
          <IconProfile />
        </button>
      </div>
    </header>
  );
}

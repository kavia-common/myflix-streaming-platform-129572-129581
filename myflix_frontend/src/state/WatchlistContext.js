import React, { createContext, useContext, useEffect, useState } from 'react';

const Ctx = createContext(null);

// PUBLIC_INTERFACE
export function WatchlistProvider({ children }) {
  /** Provides watchlist state synced to localStorage. */
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const raw = localStorage.getItem('myflix_watchlist');
    if (raw) setWatchlist(JSON.parse(raw));
  }, []);

  useEffect(() => {
    localStorage.setItem('myflix_watchlist', JSON.stringify(watchlist));
  }, [watchlist]);

  const add = (item) => {
    setWatchlist((prev) => (prev.find(i => i.id === item.id) ? prev : [...prev, item]));
  };
  const remove = (id) => {
    setWatchlist((prev) => prev.filter(i => i.id !== id));
  };
  const has = (id) => watchlist.some(i => i.id === id);

  return (
    <Ctx.Provider value={{ watchlist, add, remove, has }}>
      {children}
    </Ctx.Provider>
  );
}

// PUBLIC_INTERFACE
export function useWatchlist() {
  /** Hook to access watchlist actions and state. */
  return useContext(Ctx);
}

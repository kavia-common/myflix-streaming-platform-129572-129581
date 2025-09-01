import React, { createContext, useContext, useState } from 'react';

const Ctx = createContext(null);

// PUBLIC_INTERFACE
export function PlaybackProvider({ children }) {
  /** Context for managing playback modal state. */
  const [isOpen, setOpen] = useState(false);
  const [current, setCurrent] = useState(null);

  const openPlayback = (item) => {
    setCurrent(item);
    setOpen(true);
  };
  const closePlayback = () => {
    setOpen(false);
    setCurrent(null);
  };

  return (
    <Ctx.Provider value={{ isOpen, current, openPlayback, closePlayback }}>
      {children}
    </Ctx.Provider>
  );
}

// PUBLIC_INTERFACE
export function usePlayback() {
  /** Hook to access playback modal controls. */
  return useContext(Ctx);
}

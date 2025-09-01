import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthCtx = createContext(null);

// PUBLIC_INTERFACE
export function AuthProvider({ children }) {
  /** Provides auth state and actions using localStorage for persistence. */
  const [user, setUser] = useState(null);

  useEffect(() => {
    const raw = localStorage.getItem('myflix_user');
    if (raw) setUser(JSON.parse(raw));
  }, []);

  const login = (email, password) => {
    const mockUser = { id: 'u1', name: email.split('@')[0] || 'User', email };
    setUser(mockUser);
    localStorage.setItem('myflix_user', JSON.stringify(mockUser));
    return true;
  };

  const signup = (name, email, password) => {
    const mockUser = { id: 'u1', name: name || email.split('@')[0], email };
    setUser(mockUser);
    localStorage.setItem('myflix_user', JSON.stringify(mockUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('myflix_user');
  };

  return (
    <AuthCtx.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthCtx.Provider>
  );
}

// PUBLIC_INTERFACE
export function useAuth() {
  /** Hook for accessing auth context. */
  return useContext(AuthCtx);
}

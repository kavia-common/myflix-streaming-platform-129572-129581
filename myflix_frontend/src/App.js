import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import './index.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import SearchPage from './pages/SearchPage';
import DetailsPage from './pages/DetailsPage';
import WatchlistPage from './pages/WatchlistPage';
import AppHeader from './components/AppHeader';
import BottomNav from './components/BottomNav';
import { AuthProvider, useAuth } from './state/AuthContext';
import { WatchlistProvider } from './state/WatchlistContext';
import PlaybackModal from './components/PlaybackModal';

// PUBLIC_INTERFACE
function ProtectedRoute({ children }) {
  /** Protects routes by requiring a logged-in user; redirects to login otherwise. */
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  return children;
}

// PUBLIC_INTERFACE
function AppShell() {
  /** Main layout including header, routed views, and bottom navigation. */
  return (
    <div className="myflix-app">
      <AppHeader />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
          <Route path="/search" element={<ProtectedRoute><SearchPage /></ProtectedRoute>} />
          <Route path="/details/:id" element={<ProtectedRoute><DetailsPage /></ProtectedRoute>} />
          <Route path="/watchlist" element={<ProtectedRoute><WatchlistPage /></ProtectedRoute>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </main>
      <BottomNav />
      <PlaybackModal />
    </div>
  );
}

// PUBLIC_INTERFACE
function App() {
  /** Top-level application with providers for auth and watchlist. */
  return (
    <AuthProvider>
      <WatchlistProvider>
        <Router>
          <AppShell />
        </Router>
      </WatchlistProvider>
    </AuthProvider>
  );
}

export default App;

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../state/AuthContext';

// PUBLIC_INTERFACE
export default function LoginPage() {
  /** Simple login form for user authentication (mocked). */
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('demo@myflix.com');
  const [password, setPassword] = useState('password');
  const [error, setError] = useState('');

  const submit = (e) => {
    e.preventDefault();
    const ok = login(email, password);
    if (ok) navigate('/', { replace: true });
    else setError('Invalid credentials');
  };

  return (
    <form className="form" onSubmit={submit} aria-label="Login Form">
      <h1>Sign In</h1>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" className="input" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
      </div>
      <div className="field">
        <label htmlFor="password">Password</label>
        <input id="password" className="input" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
      </div>
      {error && <div className="helper" role="alert">{error}</div>}
      <button className="btn btn-primary mt-8" type="submit">Sign In</button>
      <p className="helper mt-12">New to MyFlix? <Link to="/signup">Create an account</Link></p>
    </form>
  );
}

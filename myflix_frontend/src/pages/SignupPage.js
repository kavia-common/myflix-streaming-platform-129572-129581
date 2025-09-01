import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../state/AuthContext';

// PUBLIC_INTERFACE
export default function SignupPage() {
  /** Registration form (mocked) creating a local user. */
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState('Alex');
  const [email, setEmail] = useState('alex@myflix.com');
  const [password, setPassword] = useState('password');

  const submit = (e) => {
    e.preventDefault();
    const ok = signup(name, email, password);
    if (ok) navigate('/', { replace: true });
  };

  return (
    <form className="form" onSubmit={submit} aria-label="Signup Form">
      <h1>Create Account</h1>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input id="name" className="input" value={name} onChange={(e)=>setName(e.target.value)} required />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" className="input" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
      </div>
      <div className="field">
        <label htmlFor="password">Password</label>
        <input id="password" className="input" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
      </div>
      <button className="btn btn-primary mt-8" type="submit">Sign Up</button>
      <p className="helper mt-12">Already have an account? <Link to="/login">Sign in</Link></p>
    </form>
  );
}

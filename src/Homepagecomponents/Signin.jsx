import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, User, Lock, Mail, UserPlus, LogIn, Stethoscope } from 'lucide-react';
import './Signin.css';

function Signin() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('patient');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Login:', { email, password, role });
      navigate('/HomePage');
    } else {
      console.log('Signup:', { name, email, password, role });
      navigate('/HomePage');
    }

    setEmail('');
    setPassword('');
    setName('');
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-5">
            {/* Logo and Header */}
            <div className="text-center mb-4">
              <div 
                className="d-inline-flex align-items-center justify-content-center rounded-circle p-3 mb-3"
                style={{ backgroundColor: '#B2A5FF' }}
              >
                <Heart className="text-white" size={32} />
              </div>
              <h1 className="h3 mb-2">Instant Care</h1>
              <p className="text-muted">Your trusted healthcare companion</p>
            </div>

            {/* Main Form */}
            <div className="card shadow-sm">
              <div className="card-body p-4">
                <div className="d-flex justify-content-center mb-4">
                  <div className="btn-group">
                    <button
                      onClick={() => setIsLogin(true)}
                      className={`btn ${isLogin ? 'btn-indigo' : 'btn-light'}`}
                    >
                      <LogIn className="me-2" size={18} />
                      Login
                    </button>
                    <button
                      onClick={() => setIsLogin(false)}
                      className={`btn ${!isLogin ? 'btn-indigo' : 'btn-light'}`}
                    >
                      <UserPlus className="me-2" size={18} />
                      Register
                    </button>
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  {!isLogin && (
                    <div className="mb-3">
                      <label className="form-label" htmlFor="name">
                        Full Name
                      </label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <User size={18} />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="John Doe"
                          required
                        />
                      </div>
                    </div>
                  )}

                  <div className="mb-3">
                    <label className="form-label" htmlFor="email">
                      Email Address
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <Mail size={18} />
                      </span>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="form-label" htmlFor="password">
                      Password
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <Lock size={18} />
                      </span>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="form-label">I am a:</label>
                    <div className="row g-2">
                      <div className="col">
                        <button
                          type="button"
                          onClick={() => setRole('patient')}
                          className={`btn w-100 ${
                            role === 'patient' ? 'btn-outline-indigo active' : 'btn-outline-secondary'
                          }`}
                        >
                          <User className="me-2" size={18} />
                          Patient
                        </button>
                      </div>
                      <div className="col">
                        <button
                          type="button"
                          onClick={() => setRole('doctor')}
                          className={`btn w-100 ${
                            role === 'doctor' ? 'btn-outline-indigo active' : 'btn-outline-secondary'
                          }`}
                        >
                          <Stethoscope className="me-2" size={18} />
                          Doctor
                        </button>
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="btn btn-indigo w-100">
                    {isLogin ? 'Sign In' : 'Create Account'}
                  </button>
                </form>

                {isLogin && (
                  <div className="text-center mt-3">
                    <a href="#" className="text-decoration-none" style={{ color: '#B2A5FF' }}>
                      Forgot your password?
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Footer */}
            <p className="text-center text-muted small mt-4">
              By continuing, you agree to our{' '}
              <a href="#" className="text-decoration-none" style={{ color: '#B2A5FF' }}>
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="text-decoration-none" style={{ color: '#B2A5FF' }}>
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
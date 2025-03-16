import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, User, Lock, Mail, UserPlus, LogIn, Stethoscope, AlertCircle, CheckCircle } from 'lucide-react';
import './Signin.css';

function Signin() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('patient');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  // Check if user is already logged in
  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      navigate('/homepage');
    }
  }, [navigate]);

  const validateForm = () => {
    if (!email || !password) {
      setError('Please fill in all required fields');
      return false;
    }
    if (!isLogin && !name) {
      setError('Please enter your name');
      return false;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!validateForm()) return;

    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      if (isLogin) {
        // Simulated login success
        localStorage.setItem('authToken', 'dummy-token');
        localStorage.setItem('userRole', role);
        setSuccess('Login successful!');
        setTimeout(() => {
          navigate('/homepage');
        }, 1000);
      } else {
        // Simulated registration success
        setSuccess('Registration successful! Please log in.');
        setIsLogin(true);
        setEmail('');
        setPassword('');
        setName('');
      }
    } catch (err) {
      setError(err.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signin-container">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-5">
            {/* Logo and Header */}
            <div className="text-center mb-4">
              <div className="logo-container">
                <Heart className="text-white" size={32} />
              </div>
              <h1 className="h3 text-white mb-2">Welcome to Instant Care</h1>
              <p className="text-white-50">Your trusted healthcare companion</p>
            </div>

            {/* Main Form */}
            <div className="form-card">
              <div className="card-body p-4">
                {/* Auth Type Switch */}
                <div className="d-flex justify-content-center mb-4">
                  <div className="btn-group">
                    <button
                      onClick={() => {
                        setIsLogin(true);
                        setError('');
                      }}
                      className={`auth-switch-btn ${isLogin ? 'active' : ''}`}
                    >
                      <LogIn className="me-2" size={18} />
                      Login
                    </button>
                    <button
                      onClick={() => {
                        setIsLogin(false);
                        setError('');
                      }}
                      className={`auth-switch-btn ${!isLogin ? 'active' : ''}`}
                    >
                      <UserPlus className="me-2" size={18} />
                      Register
                    </button>
                  </div>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="error-message">
                    <AlertCircle size={18} />
                    {error}
                  </div>
                )}

                {/* Success Message */}
                {success && (
                  <div className="success-message">
                    <CheckCircle size={18} />
                    {success}
                  </div>
                )}

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
                          disabled={loading}
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
                        disabled={loading}
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
                        disabled={loading}
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
                          className={`btn w-100 role-btn ${
                            role === 'patient' ? 'active' : 'btn-outline-secondary'
                          }`}
                          disabled={loading}
                        >
                          <User className="me-2" size={18} />
                          Patient
                        </button>
                      </div>
                      <div className="col">
                        <button
                          type="button"
                          onClick={() => setRole('doctor')}
                          className={`btn w-100 role-btn ${
                            role === 'doctor' ? 'active' : 'btn-outline-secondary'
                          }`}
                          disabled={loading}
                        >
                          <Stethoscope className="me-2" size={18} />
                          Doctor
                        </button>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-indigo w-100"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        <span className="loading-dots">Processing</span>
                      </>
                    ) : (
                      isLogin ? 'Sign In' : 'Create Account'
                    )}
                  </button>
                </form>

                {isLogin && (
                  <div className="text-center mt-3">
                    <a href="#" className="forgot-password">
                      Forgot your password?
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Footer */}
            <p className="text-center text-white-50 small mt-4">
              By continuing, you agree to our{' '}
              <a href="#" className="terms-link">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="terms-link">
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
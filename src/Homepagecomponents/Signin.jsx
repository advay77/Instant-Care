import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, User, Lock, Mail, UserPlus, LogIn, Stethoscope, AlertCircle, CheckCircle } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import { FaPhoneAlt } from 'react-icons/fa';
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
  const [authMethod, setAuthMethod] = useState('email'); // 'email', 'google', 'phone'
  const [phone, setPhone] = useState('');
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

  // Google Sign-In Handler (using Google Identity Services)
  const handleGoogleSignIn = async () => {
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      // Simulate Google sign-in (replace with real Google OAuth in production)
      await new Promise(resolve => setTimeout(resolve, 1200));
      localStorage.setItem('authToken', 'google-dummy-token');
      setSuccess('Signed in with Google!');
      setTimeout(() => navigate('/homepage'), 1000);
    } catch (err) {
      setError('Google sign-in failed.');
    } finally {
      setLoading(false);
    }
  };

  // Phone Sign-In Handler (simulate OTP flow)
  const handlePhoneSignIn = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (!phone || phone.length < 10) {
      setError('Enter a valid phone number');
      return;
    }
    setLoading(true);
    try {
      // Simulate OTP verification
      await new Promise(resolve => setTimeout(resolve, 1200));
      localStorage.setItem('authToken', 'phone-dummy-token');
      setSuccess('Signed in with phone!');
      setTimeout(() => navigate('/homepage'), 1000);
    } catch (err) {
      setError('Phone sign-in failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signin-container new-signin-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-5">
            {/* Logo and Header */}
            <div className="text-center mb-4">
              <div className="logo-container gradient-glow">
                <Heart className="text-white" size={38} />
              </div>
              <h1 className="h3 text-white mb-2 fw-bold">Welcome to Instant Care</h1>
              <p className="text-white-50">Your trusted healthcare companion</p>
            </div>

            {/* Auth Method Switch */}
            <div className="auth-method-switch mb-4">
              <button className={`auth-method-btn ${authMethod==='email' ? 'active' : ''}`} onClick={()=>setAuthMethod('email')} disabled={loading}>
                <Mail size={18} className="me-2" /> Email
              </button>
              <button className={`auth-method-btn ${authMethod==='google' ? 'active' : ''}`} onClick={()=>setAuthMethod('google')} disabled={loading}>
                <FcGoogle size={20} className="me-2" /> Google
              </button>
              <button className={`auth-method-btn ${authMethod==='phone' ? 'active' : ''}`} onClick={()=>setAuthMethod('phone')} disabled={loading}>
                <FaPhoneAlt size={16} className="me-2" /> Phone
              </button>
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

                {/* Google Auth */}
                {authMethod === 'google' && (
                  <div className="mb-4 text-center">
                    <button className="btn btn-google w-100" onClick={handleGoogleSignIn} disabled={loading}>
                      <FcGoogle size={22} className="me-2" />
                      {loading ? 'Signing in...' : 'Sign in with Google'}
                    </button>
                  </div>
                )}

                {/* Phone Auth */}
                {authMethod === 'phone' && (
                  <form onSubmit={handlePhoneSignIn} className="mb-4">
                    <div className="mb-3">
                      <label className="form-label" htmlFor="phone">Phone Number</label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <FaPhoneAlt size={16} />
                        </span>
                        <input
                          type="tel"
                          className="form-control"
                          id="phone"
                          value={phone}
                          onChange={e => setPhone(e.target.value)}
                          placeholder="Enter your phone number"
                          disabled={loading}
                          required
                        />
                      </div>
                    </div>
                    <button type="submit" className="btn btn-indigo w-100" disabled={loading}>
                      {loading ? 'Signing in...' : 'Sign in with Phone'}
                    </button>
                  </form>
                )}

                {/* Email Auth */}
                {authMethod === 'email' && (
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
                )}

                {isLogin && authMethod === 'email' && (
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
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top" style={{ backgroundColor: '#B2A5FF', height: '60px' }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={{ color: '#FBFBFB', display: 'flex', alignItems: 'center' }}>
          <img src= 'logo-white.png' alt="Logo" style={{ height: '80px', marginRight: '8px' }} /> {/* Logo image */}
          Instant-Care
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/"
                style={{
                  color: '#FBFBFB',
                  transition: 'font-weight 0.3s ease', // Smooth transition
                }}
                onMouseOver={(e) => (e.target.style.fontWeight = 'bold')}
                onMouseOut={(e) => (e.target.style.fontWeight = 'normal')}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/About"
                style={{
                  color: '#FBFBFB',
                  transition: 'font-weight 0.3s ease',
                }}
                onMouseOver={(e) => (e.target.style.fontWeight = 'bold')}
                onMouseOut={(e) => (e.target.style.fontWeight = 'normal')}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/services"
                style={{
                  color: '#FBFBFB',
                  transition: 'font-weight 0.3s ease',
                }}
                onMouseOver={(e) => (e.target.style.fontWeight = 'bold')}
                onMouseOut={(e) => (e.target.style.fontWeight = 'normal')}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/Contact"
                style={{
                  color: '#FBFBFB',
                  transition: 'font-weight 0.3s ease',
                }}
                onMouseOver={(e) => (e.target.style.fontWeight = 'bold')}
                onMouseOut={(e) => (e.target.style.fontWeight = 'normal')}
              >
                Contact
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/Signin"
                style={{
                  color: '#FBFBFB',
                  transition: 'font-weight 0.3s ease',
                }}
                onMouseOver={(e) => (e.target.style.fontWeight = 'bold')}
                onMouseOut={(e) => (e.target.style.fontWeight = 'normal')}
              >
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
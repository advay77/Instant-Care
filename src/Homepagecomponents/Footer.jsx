import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer" style={{ backgroundColor: "#693382", color: "white", position: 'relative', overflow: 'hidden' }}>
      <style>{`
        .footer .social-icons a {
          color: white;
          margin: 0 10px;
          transition: color 0.2s, transform 0.2s;
          display: inline-block;
          font-size: 1.5rem;
        }
        .footer .social-icons a:hover {
          color:white;
          transform: scale(1.18) rotate(-8deg);
          filter: drop-shadow(0 0 6px #cfdef3);
        }
        .footer .footer-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: flex-start;
          gap: 2rem;
          padding: 2rem 0 0.5rem 0;
        }
        .footer .footer-col {
          flex: 1 1 220px;
          min-width: 200px;
          margin-bottom: 1.5rem;
        }
        .footer .footer-brand {
          font-size: 1.7rem;
          font-weight: 700;
          letter-spacing: 1px;
          margin-bottom: 1rem;
          color: white;
          display: flex;
          align-items: center;
          gap: 0.7rem;
        }
        .footer .footer-links {
          list-style: none;
          padding: 0;
          margin: 0 0 1rem 0;
        }
        .footer .footer-links li {
          margin-bottom: 0.5rem;
        }
        .footer .footer-links a {
          color: white;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
        }
        .footer .footer-links a:hover {
          color white;
          text-decoration: underline;
        }
        .footer .footer-contact p {
          margin: 0.2rem 0;
          color: #e0eafc;
          font-size: 1rem;
        }
        .footer .footer-socials {
          margin-top: 1rem;
        }
        .footer .footer-bottom {
          border-top: 1px solid #cfdef3;
          margin-top: 1.5rem;
          padding-top: 0.7rem;
          text-align: center;
          color: #e0eafc;
          font-size: 0.98rem;
        }
        @media (max-width: 900px) {
          .footer .footer-row {
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
          }
          .footer .footer-col {
            min-width: 0;
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
      <div className="container">
        <div className="footer-row">
          <div className="footer-col">
            <div className="footer-brand">
              <img src="/logo-white.png" alt="Instant-Care Logo" style={{height: 36, marginRight: 8}} />
              Instant-Care
            </div>
            <p style={{color: 'white', fontSize: '1.05rem', marginBottom: 0}}>Live every breath, embrace every moment, for life is a precious gift.</p>
          </div>
          <div className="footer-col">
            <h5 style={{color: 'white', fontWeight: 600, marginBottom: '1rem'}}>Quick Links</h5>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/team">Our Team</a></li>
            </ul>
          </div>
          <div className="footer-col footer-contact">
            <h5 style={{color: 'white', fontWeight: 600, marginBottom: '1rem'}}>Contact</h5>
            <p><strong>Email:</strong> <a href="mailto:advayanand77@gmail.com" style={{color: 'white'}}>advayanand87@gmail.com</a></p>
            <p><strong>Phone:</strong> <a href="tel:+919876543210" style={{color: 'white'}}>+91 6386771480</a></p>
            <p><strong>Location:</strong> Prayagraj, India</p>
            <div className="footer-socials social-icons">
              <a href="https://github.com/advay77" target="_blank" rel="noopener noreferrer"><FaGithub size={24} /></a>
              <a href="https://www.linkedin.com/in/advay-anand-a89024277/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a>
              <a href="https://x.com/AnandAdvay91289" target="_blank" rel="noopener noreferrer"><FaTwitter size={24} /></a>
              <a href="https://www.instagram.com/advay_anand_7/" target="_blank" rel="noopener noreferrer"><FaInstagram size={24} /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaWhatsapp size={24} /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} Instant-Care by Advay Anand. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;

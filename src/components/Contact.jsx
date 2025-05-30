import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">
      <div className="contact-card" style={{maxWidth: 420, width: '100%', margin: '0 auto', background: '#fff', borderRadius: '1.2rem', boxShadow: '0 4px 24px rgba(105,51,130,0.10)', padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'stretch'}}>
        <h2 style={{color: '#693382', fontWeight: 700, marginBottom: '0.5rem', textAlign: 'center'}}>Contact Us</h2>
        <p style={{color: '#4a5568', marginBottom: '1.5rem', textAlign: 'center'}}>We'd love to hear from you! Fill out the form below and we'll get in touch soon.</p>
        <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '1.1rem'}}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            style={{padding: '0.85rem 1rem', border: '1.5px solid #cbd5e1', borderRadius: '0.7rem', fontSize: '1rem', outline: 'none', transition: 'border 0.2s', background: '#f7fafc'}}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            style={{padding: '0.85rem 1rem', border: '1.5px solid #cbd5e1', borderRadius: '0.7rem', fontSize: '1rem', outline: 'none', transition: 'border 0.2s', background: '#f7fafc'}}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            style={{padding: '0.85rem 1rem', border: '1.5px solid #cbd5e1', borderRadius: '0.7rem', fontSize: '1rem', outline: 'none', minHeight: 90, background: '#f7fafc', resize: 'vertical'}}
          />
          <button
            type="submit"
            style={{
              background: 'linear-gradient(90deg, #693382 60%, #0D7C66 100%)',
              color: '#fff',
              border: 'none',
              borderRadius: '0.7rem',
              padding: '0.9rem 1.1rem',
              fontSize: '1.1rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'background 0.2s, transform 0.15s',
              boxShadow: '0 2px 8px rgba(49,130,206,0.08)'
            }}
            onMouseOver={e => {
              e.currentTarget.style.background = 'linear-gradient(90deg, #0D7C66 60%, #693382 100%)';
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 4px 16px #69338233';
            }}
            onMouseOut={e => {
              e.currentTarget.style.background = 'linear-gradient(90deg, #693382 60%, #0D7C66 100%)';
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(49,130,206,0.08)';
            }}
          >
            Send Message
          </button>
        </form>
        {submitted && <div className="contact-success" style={{marginTop: '1rem', color: '#38a169', fontWeight: 500, textAlign: 'center'}}>Contact you Soon Promise 🫡</div>}
      </div>
      <div className="contact-info" style={{textAlign: 'center', background: 'linear-gradient(120deg, #e0eafc 0%, #cfdef3 100%)', borderRadius: '1.2rem', boxShadow: '0 4px 24px rgba(105,51,130,0.10)', padding: '2.5rem 1.5rem', marginTop: '2rem', maxWidth: 400, marginLeft: 'auto', marginRight: 'auto', position: 'relative'}}>
        {/* Animated icon top left */}
        <span style={{position: 'absolute', top: 18, left: 18, animation: 'dash-bounce 2.2s infinite', color: '#693382', fontSize: 28, opacity: 0.7}}><i className="fas fa-heartbeat"></i></span>
        <img src="/Advay.jpeg" alt="Advay Anand" style={{width: 120, height: 120, borderRadius: '50%', objectFit: 'cover', margin: '0 auto 1rem', boxShadow: '0 4px 24px rgba(105,51,130,0.13)'}} />
        <h3 style={{marginBottom: '0.5rem', color: '#693382', fontWeight: 700, fontSize: '1.4rem'}}>Advay Anand <span style={{animation: 'dash-bounce 2.5s 0.2s infinite', color: '#0D7C66', fontSize: 22, marginLeft: 6}}><i className="fas fa-leaf"></i></span></h3>
        <p style={{marginBottom: '0.5rem', color: '#4a5568', fontWeight: 500}}>Founder & Developer</p>
        {/* Animated icon right of email */}
        <p style={{marginBottom: '0.5rem', color: '#4a5568'}}><strong>Email:</strong> <a href="mailto:advayanand77@gmail.com" style={{color: '#3182ce'}}>advayanand87@gmail.com <span style={{animation: 'dash-bounce 2.1s 0.4s infinite', color: '#3182ce', fontSize: 18, marginLeft: 4}}><i className="fas fa-user-md"></i></span></a></p>
        <p style={{marginBottom: '0.5rem', color: '#4a5568'}}><strong>Phone:</strong> <a href="tel:+919876543210" style={{color: '#3182ce'}}>+91 6386771480</a></p>
        <p style={{marginBottom: '0.5rem', color: '#4a5568'}}><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/advay-anand-a89024277/" target="_blank" rel="noopener noreferrer" style={{color: '#3182ce'}}>linkedin.com/in/advay-anand-a89024277</a></p>
        <div className="contact-socials" style={{justifyContent: 'center', marginTop: '1.2rem', marginBottom: '1.2rem', display: 'flex', gap: '1rem'}}>
          <a href="https://github.com/advay77" target="_blank" rel="noopener noreferrer" className="contact-icon github"><i className="fab fa-github"></i></a>
          <a href="https://x.com/AnandAdvay91289" target="_blank" rel="noopener noreferrer" className="contact-icon twitter"><i className="fab fa-twitter"></i></a>
          <a href="https://www.instagram.com/advay_anand_7/" target="_blank" rel="noopener noreferrer" className="contact-icon instagram"><i className="fab fa-instagram"></i></a>
        </div>
        {/* Animated icon bottom left */}
        <span style={{position: 'absolute', bottom: 18, left: 18, animation: 'dash-bounce 2.3s 0.1s infinite', color: '#FFB300', fontSize: 22, opacity: 0.7}}><i className="fas fa-stethoscope"></i></span>
        <div style={{margin: '1.2rem 0', color: '#693382', fontWeight: 600, fontSize: '1.05rem'}}>
          <span role="img" aria-label="clock">⏰</span> Available: 9:00 AM - 7:00 PM IST
        </div>
        <div style={{margin: '1.2rem 0', color: '#3182ce', fontWeight: 500, fontSize: '1.05rem'}}>
          <span role="img" aria-label="lightning">⚡</span> Fast response guaranteed!
        </div>
        {/* Animated icon bottom right */}
        <span style={{position: 'absolute', bottom: 18, right: 18, animation: 'dash-bounce 2.4s 0.3s infinite', color: '#A3A1FB', fontSize: 22, opacity: 0.7}}><i className="fas fa-hospital-alt"></i></span>
      </div>
      {/* Animated icon near the form */}
      <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: '-2.5rem', marginBottom: '1.2rem'}}>
        <span className="dash-icon-move" style={{animation: 'dash-bounce 2.6s 0.5s infinite', color: '#38a169', fontSize: 32}}><i className="far fa-smile"></i></span>
      </div>
      <style>{`
        @media (max-width: 600px) {
          .contact-card, .contact-info {
            padding: 1.2rem 0.5rem !important;
            max-width: 98vw !important;
          }
          .contact-info img {
            width: 80px !important;
            height: 80px !important;
          }
        }
        .contact-icon {
          font-size: 26px;
          transition: color 0.2s, transform 0.2s, box-shadow 0.2s;
          border-radius: 50%;
          padding: 0.3em;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .contact-icon.github:hover {
          color: #fff;
          background: #693382;
          transform: scale(1.18) rotate(-8deg);
          box-shadow: 0 0 8px #69338244;
        }
        .contact-icon.twitter:hover {
          color: #fff;
          background: #3182ce;
          transform: scale(1.18) rotate(-8deg);
          box-shadow: 0 0 8px #3182ce44;
        }
        .contact-icon.instagram:hover {
          color: #fff;
          background: #0D7C66;
          transform: scale(1.18) rotate(-8deg);
          box-shadow: 0 0 8px #0D7C6644;
        }
        @keyframes dash-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-16px) scale(1.08); }
        }
        .dashboard-animated-icons .dash-icon-move, .dash-icon-move {
          transition: transform 0.2s;
          filter: drop-shadow(0 2px 8px rgba(49,130,206,0.10));
        }
        .dashboard-animated-icons .dash-icon-move:hover, .dash-icon-move:hover {
          transform: scale(1.18) rotate(-8deg);
          filter: drop-shadow(0 0 12px #69338233);
        }
      `}</style>
    </div>
  );
};

export default Contact;
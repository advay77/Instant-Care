import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';

function ServiceDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { service } = location.state || {};

  if (!service) {
    return (
      <div className="container py-5 text-center">
        <h2>Service not found</h2>
        <button 
          className="btn btn-primary mt-3"
          onClick={() => navigate('/services')}
        >
          Back to Services
        </button>
      </div>
    );
  }

  return (
    <div className="service-details py-5">
      <div className="container">
        <button 
          className="back-button mb-4"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={20} />
          <span>Back to Services</span>
        </button>

        <div className="row">
          <div className="col-lg-8">
            <div className="service-header" style={{ color: service.color }}>
              <h1 className="service-title mb-4">{service.title}</h1>
            </div>
            
            <div className="service-content">
              <p className="lead mb-4">{service.description}</p>
              
              <h3 className="features-title mb-4">Key Features</h3>
              <div className="features-list">
                {service.features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <Check size={20} style={{ color: service.color }} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="cta-section mt-5">
                <h3 className="mb-4">Ready to Get Started?</h3>
                <button 
                  className="book-appointment-btn"
                  onClick={() => navigate('/appointments')}
                  style={{ 
                    backgroundColor: service.color,
                    borderColor: service.color
                  }}
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="service-sidebar">
              <div className="contact-box">
                <h4>Need Help?</h4>
                <p>Our healthcare experts are here to assist you 24/7</p>
                <div className="contact-info">
                  <div className="contact-item">
                    <strong>Phone:</strong>
                    <span>1-800-INSTANT</span>
                  </div>
                  <div className="contact-item">
                    <strong>Email:</strong>
                    <span>care@instant-care.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .service-details {
          background-color: #f8f9fa;
          min-height: 100vh;
        }

        .back-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: none;
          border: none;
          color: #666;
          padding: 0.5rem;
          transition: color 0.3s;
        }

        .back-button:hover {
          color: #333;
        }

        .service-header {
          margin-bottom: 2rem;
        }

        .service-title {
          font-size: 2.5rem;
          font-weight: 700;
        }

        .features-list {
          display: grid;
          gap: 1rem;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }

        .book-appointment-btn {
          padding: 1rem 2rem;
          font-size: 1.1rem;
          color: white;
          border: none;
          border-radius: 8px;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .book-appointment-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }

        .service-sidebar {
          position: sticky;
          top: 2rem;
        }

        .contact-box {
          background-color: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }

        .contact-info {
          margin-top: 1.5rem;
        }

        .contact-item {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
          padding: 0.5rem 0;
          border-bottom: 1px solid #eee;
        }

        @media (max-width: 768px) {
          .service-title {
            font-size: 2rem;
          }

          .service-sidebar {
            margin-top: 2rem;
            position: static;
          }
        }
      `}</style>
    </div>
  );
}

export default ServiceDetails; 
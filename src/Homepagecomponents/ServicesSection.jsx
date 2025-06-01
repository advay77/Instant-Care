



import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Heart, 
  Stethoscope, 
  Pill, 
  Calendar, 
  Droplet, 
  Clock, 
  Phone, 
  Activity 
} from 'lucide-react';
import './ServicesSection.css';

function ServicesSection() {
  const navigate = useNavigate();

  const services = [
    {
      icon: <Stethoscope size={32} />,
      title: "Medical Consultation",
      description: "Expert medical consultation from experienced healthcare professionals available 24/7.",
      color: "#FF6B6B",
      path: "/services/appointment",
    },
    {
      icon: <Calendar size={32} />,
      title: "Online Appointments",
      description: "Easy and quick appointment booking with your preferred healthcare provider.",
      color: "#4ECDC4",
      path: "https://melodious-duckanoo-16659d.netlify.app/", // External link
    },
    {
      icon: <Pill size={32} />,
      title: "Ayurvedic Treatment",
      description: "Traditional Ayurvedic treatments and therapies for holistic healing.",
      color: "#45B7D1",
      path: "/services/ayurvedic-treatment",
    },
    {
      icon: <Droplet size={32} />,
      title: "Blood Bank",
      description: "24/7 blood bank services with quick processing and safe blood supply.",
      color: "#96CEB4",
      path: "/services/blood-bank",
    },
    // Add other services here
  ];

  const handleLearnMore = (service) => {
    if (service.path.startsWith("http")) {
      window.location.href = service.path; // Open external links
    } else {
      navigate(service.path); // Navigate to internal routes
    }
  };

  return (
    <section className="services-section">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Comprehensive Healthcare Solutions for Your Well-being</p>
        </div>

        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="service-card">
                <div 
                  className="icon-wrapper"
                  style={{ 
                    backgroundColor: `${service.color}15`,
                    color: service.color 
                  }}
                >
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <button 
                  className="learn-more-btn"
                  onClick={() => handleLearnMore(service)}
                >
                  Click Here 
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;

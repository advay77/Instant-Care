import React, { useState } from 'react';
import './ServicesSection.css';
import "bootstrap/dist/css/bootstrap.min.css";

function ServicesSection() {
  const [selectedService, setSelectedService] = useState('');

  const services = [
    {
      id: 'hospital-bed',
      title: 'Real-time Hospital Bed Availability',
      description: 'Find available beds in nearby hospitals quickly and easily.',
      image: 'https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/08/07/Pictures/noida-covid-hospital_3fb50948-d8a4-11ea-a06f-e722baeaa470.jpg',
      link: '/hospital-beds',
    },
    {
      id: 'emergency-services',
      title: 'Emergency Services Contact',
      description: 'Get instant access to emergency contacts and services in your area.',
      image: 'https://thumbs.dreamstime.com/b/vector-character-illustration-emergency-service-teams-isolated-firefighters-next-to-fire-engine-police-officers-car-197130020.jpg',
      link: '/emergency-services',
    },
    {
      id: 'blood-bank',
      title: 'Blood Bank Availability',
      description: 'Check real-time blood availability at nearby blood banks.',
      image: 'https://images.onlymyhealth.com/imported/images/2024/June/14_Jun_2024/mn-donor.jpg',
      link: '/blood-bank',
    },
    {
      id: 'appointment-booking',
      title: 'Appointment Booking',
      description: 'Book appointments with doctors and specialists online.',
      image: 'https://heloix.com/wp-content/uploads/2023/10/doctor-appoint.jpg',
      link: '/appointment',
    },
    {
      id: 'nearby-hospitals',
      title: 'Nearby Hospital Map',
      description: 'Locate nearby hospitals on an interactive map.',
      image: 'https://static01.nyt.com/images/2020/12/15/us/covid-hospitals-near-you-promo-1608045359674/covid-hospitals-near-you-promo-1608045359674-superJumbo-v4.jpg',
      link: 'https://melodious-duckanoo-16659d.netlify.app/',
    },
  ];

  const handleServiceChange = (e) => {
    setSelectedService(e.target.value);
  };

  return (
    <section className="services-section" style={{ backgroundColor: "#F9F9FF" }}>
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <div className="search-bar">
          <select value={selectedService} onChange={handleServiceChange}>
            <option value="">Select a service...</option>
            {services.map((service) => (
              <option key={service.id} value={service.id}>
                {service.title}
              </option>
            ))}
          </select>
          {selectedService && (
            <a
              href={services.find((s) => s.id === selectedService).link}
              className="go-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Go
            </a>
          )}
        </div>
        <div className="row justify-content-center">
          {services.map((service) => (
            <div className="col-md-4" key={service.id}>
              <div className="service-box">
                <a href={service.link} target="_blank" rel="noopener noreferrer">
                  <img src={service.image} alt={service.title} className="img-fluid" />
                  <div className="overlay">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
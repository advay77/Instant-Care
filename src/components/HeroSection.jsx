import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const HeroSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Lazy load video for better performance
    if (videoRef.current) {
      videoRef.current.load();
    }

    // Add intersection observer for animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div
      className="hero-section"
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Video Background with loading optimization */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        aria-hidden="true"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 0,
        }}
      >
        <source
          src="/vecteezy_animation-of-doctor-checking-patient-s-health-condition_46664534.mp4"
          type="video/mp4"
        />
        <track kind="captions" />
      </video>

      {/* Overlay with gradient */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4))",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <section
        className="hero text-white py-5"
        style={{ position: "relative", zIndex: 2 }}
        role="banner"
        aria-label="Hero section"
      >
        <div className="container text-center py-5 my-5">
          <h1
            className="display-4 mb-4 fw-bold animate-on-scroll"
            style={{
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
            }}
          >
            Find Available HealthCare Facilities in Real-Time
          </h1>
          <p
            className="lead mb-5 fw-semibold animate-on-scroll"
            style={{
              textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            Quickly locate and secure hospital beds during emergencies or
            planned visits. Get instant access to healthcare services when you need them most.
          </p>

          <div className="d-flex justify-content-center gap-3 animate-on-scroll">
            <Link
              to="/Signin"
              className="btn btn-danger btn-lg hero-button"
              role="button"
              aria-label="Get Started with Instant-Care"
            >
              Get Started
            </Link>
            <Link
              to="/emergency-services"
              className="btn btn-outline-light btn-lg emergency-button"
              role="button"
              aria-label="Access Emergency Services"
            >
              Emergency Services
            </Link>
          </div>
        </div>
      </section>

      <style>
        {`
          @keyframes pulse {
            0% {
              box-shadow: 0 0 0 0 rgba(220, 53, 69, 0.7);
            }
            70% {
              box-shadow: 0 0 0 10px rgba(220, 53, 69, 0);
            }
            100% {
              box-shadow: 0 0 0 0 rgba(220, 53, 69, 0);
            }
          }

          .hero {
            max-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .animate-on-scroll {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
          }

          .animate-fade-in {
            opacity: 1;
            transform: translateY(0);
          }

          .hero-button {
            margin-top: 20px;
            padding: 15px 30px;
            font-size: clamp(1rem, 1.5vw, 1.2rem);
            font-weight: bold;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
          }

          .hero-button::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              120deg,
              transparent,
              rgba(255, 255, 255, 0.2),
              transparent
            );
            transition: 0.5s;
          }

          .hero-button:hover::before {
            left: 100%;
          }

          .hero-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(220, 53, 69, 0.4);
          }

          .emergency-button {
            margin-top: 20px;
            padding: 15px 30px;
            font-size: clamp(1rem, 1.5vw, 1.2rem);
            font-weight: bold;
            border-width: 2px;
            transition: all 0.3s ease;
          }

          .emergency-button:hover {
            background-color: rgba(255, 255, 255, 0.1);
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(255, 255, 255, 0.2);
          }

          @media (max-width: 768px) {
            .container {
              padding: 0 1rem;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .hero-button,
            .emergency-button,
            .animate-on-scroll {
              transition: none;
              animation: none;
            }
          }
        `}
      </style>
    </div>
  );
};

export default HeroSection;
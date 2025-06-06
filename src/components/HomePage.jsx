import React, { Suspense, lazy, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RatingSection from '../Homepagecomponents/RatingSection';
import { FaHeartbeat, FaUserMd, FaStethoscope, FaLeaf, FaHospitalAlt, FaRegSmile } from 'react-icons/fa';

// Lazy load components with error logging
const withErrorLogging = (importFn, componentName) => {
  console.log(`Attempting to load component: ${componentName}`);
  return importFn().catch(err => {
    console.error(`Error loading ${componentName}:`, {
      error: err,
      message: err.message,
      stack: err.stack
    });
    throw err;
  });
};

// Lazy load components
const HeroSectionHomepage = lazy(() => withErrorLogging(
  () => import("../Homepagecomponents/HeroSectionHomepage"),
  "HeroSectionHomepage"
));

const Trusted = lazy(() => withErrorLogging(
  () => import("../Homepagecomponents/Trusted"),
  "Trusted"
));

const AyurvedicLifestyleTracker = lazy(() => withErrorLogging(
  () => import("../Homepagecomponents/AyurvedicLifestyleTracker"),
  "AyurvedicLifestyleTracker"
));

const ServicesSection = lazy(() => withErrorLogging(
  () => import("../Homepagecomponents/ServicesSection"),
  "ServicesSection"
));

const AyurvedicHealthReports = lazy(() => withErrorLogging(
  () => import("../Homepagecomponents/AyurvedicHealthReports"),
  "AyurvedicHealthReports"
));

const AboutPage = lazy(() => withErrorLogging(
  () => import("../Homepagecomponents/AboutPage"),
  "AboutPage"
));

const TestimonialsSection = lazy(() => withErrorLogging(
  () => import("../Homepagecomponents/TestimonialsSection"),
  "TestimonialsSection"
));

// Loading component
const SectionLoader = () => (
  <div className="section-loader d-flex justify-content-center align-items-center py-5">
    <div className="spinner-grow text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

const searchOptions = [
  { label: 'Ayurveda', path: '/services/ayurvedic-treatment' },
  { label: 'Online Booking', path: '/services/appointment' },
  { label: 'Map Booking', path: '/map' },
  { label: 'Blood Bank', path: '/services/blood-bank' },
  { label: 'Emergency Care', path: '/services/emergency' },
  { label: 'Health Monitoring', path: '/services/monitoring' },
  { label: 'Specialized Care', path: '/services/specialized' },
  { label: 'Telemedicine', path: '/services/telemedicine' },
  { label: 'Contact', path: '/contact' },
];

function HomePage() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      console.log('Checking authentication...');
      const authToken = localStorage.getItem('authToken');
      console.log('Auth check:', { 
        hasToken: !!authToken,
        tokenLength: authToken ? authToken.length : 0,
        currentPath: window.location.pathname
      });
      
      if (!authToken) {
        console.log('No auth token found, redirecting to signin');
        navigate('/signin');
      } else {
        console.log('Auth token found, staying on page');
      }
    } catch (error) {
      console.error('Authentication error:', {
        error: error,
        message: error.message,
        stack: error.stack,
        currentPath: window.location.pathname
      });
      navigate('/signin');
    }
  }, [navigate]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    if (value.trim() === '') {
      setResults([]);
      return;
    }
    setResults(
      searchOptions.filter(opt =>
        opt.label.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleResultClick = (path) => {
    setSearch('');
    setResults([]);
    navigate(path);
  };

  return (
    <>
      <div className="homepage">
        {/* Hero Section */}
        <section className="hero-section">
          <Suspense fallback={<SectionLoader />}>
            <HeroSectionHomepage />
          </Suspense>
        </section>

        {/* Search Bar - now above Trusted section */}
        <div className="search-bar-container themed-search-bar" style={{
          maxWidth: 480,
          margin: '0 auto',
          marginTop: 32,
          marginBottom: 32,
          position: 'relative',
          zIndex: 10,
          boxShadow: '0 6px 32px #a084e822',
          background: 'linear-gradient(90deg, #ede7f6 0%, #a084e8 60%, #693382 100%)',
          borderRadius: '2rem',
          border: '2.5px solid #a084e8',
        }}>
          <input
            type="text"
            className="search-bar-input"
            placeholder="Search Ayurveda, Booking, Blood Bank, ..."
            value={search}
            onChange={handleSearch}
            style={{
              width: '100%',
              padding: '1.1rem 1.4rem',
              borderRadius: '2rem',
              border: 'none',
              fontSize: '1.13rem',
              outline: 'none',
              background: 'transparent',
              color: '#693382',
              fontWeight: 600,
              boxShadow: 'none',
              transition: 'border 0.2s, box-shadow 0.2s',
            }}
          />
          {results.length > 0 && (
            <div className="search-results-dropdown" style={{
              position: 'absolute',
              top: '110%',
              left: 0,
              right: 0,
              background: '#fff',
              borderRadius: '1.2rem',
              boxShadow: '0 4px 24px #a084e822',
              zIndex: 10,
              padding: '0.5rem 0',
            }}>
              {results.map((opt, idx) => (
                <div
                  key={opt.label}
                  className="search-result-item"
                  style={{
                    padding: '0.8rem 1.4rem',
                    cursor: 'pointer',
                    color: '#693382',
                    fontWeight: 500,
                    borderBottom: idx !== results.length - 1 ? '1px solid #f3e9fa' : 'none',
                    background: 'transparent',
                    transition: 'background 0.2s',
                  }}
                  onClick={() => handleResultClick(opt.path)}
                  onMouseOver={e => e.currentTarget.style.background = '#ede7f6'}
                  onMouseOut={e => e.currentTarget.style.background = 'transparent'}
                >
                  {opt.label}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Trust Indicators */}
        <section className="trusted-section bg-light">
          <Suspense fallback={<SectionLoader />}>
            <Trusted />
          </Suspense>
        </section>

        {/* Main Content */}
        <main>
          {/* Ayurvedic Lifestyle Section */}
          <section className="lifestyle-section py-5">
            <Suspense fallback={<SectionLoader />}>
              <AyurvedicLifestyleTracker />
            </Suspense>
          </section>

          {/* Services Section */}
          <section className="services-section bg-light">
            <Suspense fallback={<SectionLoader />}>
              <ServicesSection />
            </Suspense>
          </section>

          {/* Health Reports Section */}
          <section className="health-reports-section py-5">
            <Suspense fallback={<SectionLoader />}>
              <AyurvedicHealthReports />
            </Suspense>
          </section>

          {/* Rating Section */}
          <section className="rating-section bg-light">
            <Suspense fallback={<SectionLoader />}>
              <RatingSection />
            </Suspense>
          </section>

          {/* About Section */}
          <section className="about-section">
            <Suspense fallback={<SectionLoader />}>
              <AboutPage />
            </Suspense>
          </section>

          {/* Application Section */}
          <section className="application-section bg-light">
            <Suspense fallback={<SectionLoader />}>
            </Suspense>
          </section>

          {/* Testimonials Section */}
          <section className="testimonials-section">
            <Suspense fallback={<SectionLoader />}>
              <TestimonialsSection />
            </Suspense>
          </section>
        </main>

        {/* Animated Icons Row */}
        <div className="dashboard-animated-icons" style={{display: 'flex', justifyContent: 'center', gap: '2.5rem', margin: '2.5rem 0 1.5rem 0', flexWrap: 'wrap'}}>
          <span className="dash-icon-move" style={{animation: 'dash-bounce 2.2s infinite', color: '#693382', fontSize: 38}}><FaHeartbeat title="Health" /></span>
          <span className="dash-icon-move" style={{animation: 'dash-bounce 2.5s 0.2s infinite', color: '#0D7C66', fontSize: 38}}><FaLeaf title="Ayurveda" /></span>
          <span className="dash-icon-move" style={{animation: 'dash-bounce 2.1s 0.4s infinite', color: '#3182ce', fontSize: 38}}><FaUserMd title="Doctor" /></span>
          <span className="dash-icon-move" style={{animation: 'dash-bounce 2.3s 0.1s infinite', color: '#FFB300', fontSize: 38}}><FaStethoscope title="Consultation" /></span>
          <span className="dash-icon-move" style={{animation: 'dash-bounce 2.4s 0.3s infinite', color: '#A3A1FB', fontSize: 38}}><FaHospitalAlt title="Hospital" /></span>
          <span className="dash-icon-move" style={{animation: 'dash-bounce 2.6s 0.5s infinite', color: '#38a169', fontSize: 38}}><FaRegSmile title="Wellness" /></span>
        </div>
      </div>

      <style>
        {`
          .homepage {
            overflow-x: hidden;
            padding-top: 60px; /* Add padding to account for fixed navbar */
          }

          .section-loader {
            min-height: 200px;
          }

          /* Smooth scroll behavior */
          html {
            scroll-behavior: smooth;
          }

          /* Section transitions */
          section {
            transition: opacity 0.3s ease-in-out;
            opacity: 0;
            animation: fadeIn 0.5s ease-in-out forwards;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Section spacing and backgrounds */
          section {
            position: relative;
            overflow: hidden;
          }

          section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: inherit;
            filter: brightness(0.98);
            z-index: -1;
          }

          .bg-light {
            background-color: #f8f9fa !important;
          }

          /* Responsive spacing */
          @media (max-width: 768px) {
            .homepage {
              padding-top: 56px;
            }

            section {
              padding: 2rem 0;
            }
          }

          /* Improved accessibility */
          @media (prefers-reduced-motion: reduce) {
            html {
              scroll-behavior: auto;
            }
            
            section {
              transition: none;
              animation: none;
            }
          }

          @keyframes dash-bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-16px) scale(1.08); }
          }
          .dashboard-animated-icons .dash-icon-move {
            transition: transform 0.2s;
            filter: drop-shadow(0 2px 8px rgba(49,130,206,0.10));
          }
          .dashboard-animated-icons .dash-icon-move:hover {
            transform: scale(1.18) rotate(-8deg);
            filter: drop-shadow(0 0 12px #69338233);
          }

          .themed-search-bar input.search-bar-input::placeholder {
            color: #a084e8;
            opacity: 1;
            font-weight: 500;
            letter-spacing: 0.5px;
          }
          .themed-search-bar input.search-bar-input:focus {
            border: 2px solid #693382;
            box-shadow: 0 0 0 2px #a084e855;
            background: linear-gradient(90deg, #ede7f6 0%, #a084e8 60%, #693382 100%);
            color: #693382;
          }
        `}
      </style>
    </>
  );
}

export default HomePage;
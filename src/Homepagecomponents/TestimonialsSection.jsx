import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import './TestimonialsSection.css';

const testimonials = [
  {
    id: 1,
    text: "This platform has been a lifesaver! I was able to find a hospital bed for my grandmother in minutes, and the blood bank information was incredibly helpful.",
    author: "Tanish Suneeta Pareek",
    role: "Patient's Family Member",
    image: "/tanish.png"
  },
  {
    id: 2,
    text: "I'm so grateful for the emergency services contact feature. It gave me peace of mind knowing I could quickly access help in a critical situation.",
    author: "Aarna Bhardwaj",
    role: "Regular User",
    image: "/aarna.jpg"
  },
  {
    id: 3,
    text: "Booking appointments online has never been easier. This website has made managing my healthcare needs so much more convenient.",
    author: "Advay Anand",
    role: "Patient",
    image: "/Advay.jpeg"
  },
  {
    id: 4,
    text: "The Ayurvedic health reports are incredibly detailed and helpful. It's amazing to get such personalized health insights instantly.",
    author: "Sanskar Singh",
    role: "Wellness Enthusiast",
    image: "/sanskar.png"
  },
  {
    id: 5,
    text: "The blood donation tracking feature is excellent. It helps me keep track of my donations and reminds me when I'm eligible to donate again.",
    author: "Kritika",
    role: "Regular Donor",
    image: "/kritika.png"
  }
];

function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    const autoPlayTimer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(autoPlayTimer);
  }, []);

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-title">What People Say About Us</h2>
        <div className="testimonials-container">
          <button 
            className="nav-button prev"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="testimonials-content">
            <div className="quote-icon">
              <Quote size={40} />
            </div>
            
            <div className="testimonial-card" key={currentIndex}>
              <p className="testimonial-text">{testimonials[currentIndex].text}</p>
              
              <div className="testimonial-author">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].author}
                  className="author-image"
                />
                <div className="author-info">
                  <h4>{testimonials[currentIndex].author}</h4>
                  <p>{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>

            <div className="testimonial-indicators">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => {
                    if (!isAnimating) {
                      setIsAnimating(true);
                      setCurrentIndex(index);
                    }
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <button 
            className="nav-button next"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
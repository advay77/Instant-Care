import React, { useState, useEffect } from "react";
import "./HeroSectionHomepage.css";

function HeroSectionHomepage() {
  const text = "Live every breath, embrace every moment, for life is a precious gift.";
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100); 

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <div className="hero-section">
      <div className="hero-image">
        <img src="https://i.pinimg.com/736x/ea/52/1f/ea521f18b9e415fdd61204fbeb38941d.jpg" alt="Hero Background" />
      </div>
      <div className="hero-text">
        <h2>{displayedText}</h2>
        {displayedText === text && ( 
          <p>
            Because it's a gift. Because it's an opportunity to experience, to
            love, to learn, to grow. Because it's a chance to make a difference
            in the world.
          </p>
        )}
      </div>
    </div>
  );
}

export default HeroSectionHomepage;
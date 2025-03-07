import React from "react";
import Navbar from "../Homepagecomponents/Navbar";
import HeroSectionHomepage from "../Homepagecomponents/HeroSectionHomepage";
import Trusted from "../Homepagecomponents/Trusted";
import ServicesSection from "../Homepagecomponents/ServicesSection";
import AboutPage from "../Homepagecomponents/AboutPage";
import ApplicationSection from "../Homepagecomponents/ApplicationSection";
import TestimonialsSection from "../Homepagecomponents/TestimonialsSection";
import Footer from "../Homepagecomponents/Footer";
import Chatbot from "../Homepagecomponents/Chatbot";

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSectionHomepage />
      <Trusted />
      <ServicesSection />
      <AboutPage />
      <ApplicationSection />
      <TestimonialsSection />
      <Footer />
      <Chatbot />
    </>
  );
}

export default HomePage;
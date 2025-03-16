import React from "react";
import Navbar from "../Homepagecomponents/Navbar";
import HeroSectionHomepage from "../Homepagecomponents/HeroSectionHomepage";
import Trusted from "../Homepagecomponents/Trusted";
import AyurvedicLifestyleTracker from "../Homepagecomponents/AyurvedicLifestyleTracker";
import ServicesSection from "../Homepagecomponents/ServicesSection";
import AyurvedicHealthReports from "../Homepagecomponents/AyurvedicHealthReports";
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
      <AyurvedicLifestyleTracker />
      <ServicesSection />
      <AyurvedicHealthReports />
      <AboutPage />
      <ApplicationSection />
      <TestimonialsSection />
      <Footer />
      <Chatbot />
    </>
  );
}

export default HomePage;
import React from 'react';
import Navbar from '../Homepagecomponents/Navbar';
import Footer from '../Homepagecomponents/Footer';
import Chatbot from '../Homepagecomponents/Chatbot';

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <Chatbot />
    </>
  );
}

export default Layout;
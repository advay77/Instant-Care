import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "../Homepagecomponents/Navbar";
import HeroSectionHomepage from "../Homepagecomponents/HeroSectionHomepage";
import Trusted from "../Homepagecomponents/Trusted";
import ServicesSection from "../Homepagecomponents/ServicesSection";
import AboutPage from "../Homepagecomponents/AboutPage";
import ApplicationSection from "../Homepagecomponents/ApplicationSection";
import TestimonialsSection from "../Homepagecomponents/TestimonialsSection";
import Footer from "../Homepagecomponents/Footer";
import Chatbot from "../Homepagecomponents/Chatbot";
import { BloodBank } from "../Features.jsx/BloodBank";
import { Appointment } from "../Features.jsx/Appointment";
import { EmergencyServices } from "../Features.jsx/EmergencyServices";
import { HospitalBed } from "../Features.jsx/HospitalBed";
import Signin from "../Homepagecomponents/Signin";

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
      <Outlet />
      <Footer />
      <Chatbot />
      <Routes>
        <Route path="hospital-beds" element={<HospitalBed />} />
        <Route path="blood-bank" element={<BloodBank />} />
        <Route path="appointment-booking" element={<Appointment />} />
        <Route path="emergency-services" element={<EmergencyServices />} />
        <Route path="services" element={<ServicesSection />} />
        <Route path="signin" element={<Signin />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ApplicationSection />} />
      </Routes>
    </>
  );
}

export default HomePage;
// import { Routes, Route, Outlet } from "react-router-dom";
// import Navbar from "./Homepagecomponents/Navbar";
// import HeroSectionHomepage from "./Homepagecomponents/HeroSectionHomepage";
// import Trusted from "./Homepagecomponents/Trusted";
// import ServicesSection from "./Homepagecomponents/ServicesSection";
// import AboutPage from "./Homepagecomponents/AboutPage";
// import ApplicationSection from "./Homepagecomponents/ApplicationSection";
// import TestimonialsSection from "./Homepagecomponents/TestimonialsSection";
// import Footer from "./Homepagecomponents/Footer";
// import Chatbot from "./Homepagecomponents/Chatbot";

// import { BloodBank } from "./Features.jsx/BloodBank";
// import { Appointment } from "./Features.jsx/Appointment";
// import { EmergencyServices } from "./Features.jsx/EmergencyServices";
// import { HospitalBed } from "./Features.jsx/HospitalBed";
// import Signin from "./Homepagecomponents/Signin";
// // import Map from "./Homepagecomponents/Map";
// // import BookingForm from "./Features.jsx/BookingForm";

 
// function HomePage() {
//   return (
//     <>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
//             {/* <HeroSection /> */}
//               <Navbar />
//               <Outlet />
//               <Footer />
//               <Chatbot />
//             </>
//           }
//         >
//           <Route
//             index
//             element={
//               <>
//                 <HeroSectionHomepage />
//                 <Trusted />
//                 <ServicesSection />
//                 <AboutPage />
//                 <ApplicationSection />
//                 <TestimonialsSection />
//               </>
//             }
//           />

//           <Route path="hospital-beds" element={<HospitalBed />} />
//           <Route path="blood-bank" element={<BloodBank />} />
//           <Route path="appointment-booking" element={<Appointment />} />
//           <Route path="emergency-services" element={<EmergencyServices />} />
//           <Route path="services" element={<ServicesSection />} />
//           <Route path="Signin" element={<Signin />} />
//           <Route path="About" element={<AboutPage />} />
//           <Route path="Contact" element={<ApplicationSection/>} />
//           {/* <Route path="Map" element={<Map/>} /> */}
//         </Route>
//       </Routes>
//     </>
//   );
// }
// export default HomePage
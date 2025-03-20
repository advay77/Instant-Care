import { Routes, Route } from 'react-router-dom';
import Signin from "./Homepagecomponents/Signin";
import HomePage from "./components/HomePage";
// import { BloodBank } from "./Features/BloodBank";
// import { Appointment } from "./Features.jsx/Appointment";
// import { EmergencyServices } from "./Features.jsx/EmergencyServices";
// import { HospitalBed } from "./Features.jsx/HospitalBed";
import ServicesSection from './Homepagecomponents/ServicesSection';
import { Appointment } from './Services/Appointment';
import { AyurvedicTreatment } from './Services/AyurvedicTreatment';
import { BloodBank } from './Services/BloodBank';
import Layout from './components/Layout';
import ServiceDetails from './components/ServiceDetails';
import Feature from './Services/feature';


function App() {
  return (
    <Routes>
      <Route path="/signin" element={<Signin />} />
      <Route path="/" element={
        <Layout>
          <HomePage />
        </Layout>
      } />
      <Route path="/homepage" element={
        <Layout>
          <HomePage />
        </Layout>
      } />
      {/* <Route path="/hospital-beds" element={
        <Layout>
          <HospitalBed />
        </Layout>
      } />
      
      <Route path="/appointment" element={
        <Layout>
          <Appointment />
        </Layout>
      } />
      <Route path="/emergency-services" element={
        <Layout>
          <EmergencyServices />
        </Layout>
      } /> */}
      {/* <Route path="/blood-bank" element={
        <Layout>
          <BloodBank />
        </Layout>
      } /> */}
      <Route path="/services" element={<ServicesSection />} />
        <Route path="/services/appointment" element={<Appointment />} />
        <Route path="/services/ayurvedic-treatment" element={<AyurvedicTreatment />} />
        <Route path="/services/blood-bank" element={<BloodBank />} />
      <Route path='Feature' element = {
        <Layout>
        <Feature />
        </Layout>
      } />
      <Route path="/services/:serviceId" element={
        <Layout>
          <ServiceDetails />
        </Layout>
      } />
    </Routes>
  );
}

export default App;

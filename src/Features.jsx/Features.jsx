import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ServicesSection from "./ServicesSection";
import ServiceDetails from './components/ServiceDetails';
import { BloodBank } from "./pages/BloodBank"; // Import all service pages
import { MedicalConsultation } from "./pages/MedicalConsultation";
import { OnlineAppointments } from "./pages/OnlineAppointments";
import { AyurvedicTreatment } from "./pages/AyurvedicTreatment";
import { EmergencyCare } from "./pages/EmergencyCare";
import { HealthMonitoring } from "./pages/HealthMonitoring";
import { SpecializedCare } from "./pages/SpecializedCare";
import { Telemedicine } from "./pages/Telemedicine";

function Features() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ServiceDetails />} />
        <Route path="/services/blood-bank" element={<BloodBank />} />
        <Route path="/services/medical-consultation" element={<MedicalConsultation />} />
        <Route path="/services/appointments" element={<OnlineAppointments />} />
        <Route path="/services/ayurvedic" element={<AyurvedicTreatment />} />
        <Route path="/services/emergency" element={<EmergencyCare />} />
        <Route path="/services/monitoring" element={<HealthMonitoring />} />
        <Route path="/services/specialized" element={<SpecializedCare />} />
        <Route path="/services/telemedicine" element={<Telemedicine />} />
      </Routes>
    </Router>
  );
}

export default Features;

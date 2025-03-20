// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import ServicesSection from './components/ServicesSection';
// // import ServiceDetails from './components/ServiceDetails';

// // import {MedicalConsultation} from './Services/MedicalConsultation';
// // import {OnlineAppointments} from './Services/OnlineAppointments';
// // import {AyurvedicTreatment} from './Services/AyurvedicTreatment';
// import {BloodBank} from './Services/BloodBank';
// // import {EmergencyCare} from './Services/EmergencyCare';
// // import {HealthMonitoring} from './Services/HealthMonitoring';
// // import {SpecializedCare} from './Services/SpecializedCare';
// // import {Telemedicine} from './Services/Telemedicine';
// import ServicesSection from '../Homepagecomponents/ServicesSection';

// function Feature() {
//   return (
//     <Router>
//       <Routes>
//       <Route path="/services/:serviceId" element={
//         <Layout>
//           <ServicesSection/>
//         </Layout>
//       } />
//         {/* <Route path="/" element={<ServicesSection />} /> */}
//         {/* <Route path="/services/medical-consultation" element={<MedicalConsultation />} />
//         <Route path="/services/appointments" element={<OnlineAppointments />} />
//         <Route path="/services/ayurvedic" element={<AyurvedicTreatment />} /> */}
//         <Route path="/services/blood-bank" element={<BloodBank />} />
//         {/* <Route path="/services/emergency" element={<EmergencyCare />} />
//         <Route path="/services/monitoring" element={<HealthMonitoring />} />
//         <Route path="/services/specialized" element={<SpecializedCare />} />
//         <Route path="/services/telemedicine" element={<Telemedicine />} /> */}
//       </Routes>
//     </Router>
//   );
// }

// export default Feature;







import React from 'react';
import ServicesSection from '../Homepagecomponents/ServicesSection';

function Feature() {
  return (
    <div>
      <ServicesSection />
    </div>
  );
}

export default Feature;







// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Appointment } from "../Services/Appointment";
// import { AyurvedicTreatment } from '../Services/AyurvedicTreatment'
// import { BloodBank } from "../Services/BloodBank";
// import ServicesSection from '../Homepagecomponents/ServicesSection';

// function Feature() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<ServicesSection />} />
//         <Route path="/services/appointment" element={<Appointment />} />
//         <Route path="/services/ayurvedic-treatment" element={<AyurvedicTreatment />} />
//         <Route path="/services/blood-bank" element={<BloodBank />} />
//       </Routes>
//     </Router>
//   );
// }

// export default Feature;
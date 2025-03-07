import { Routes, Route, Outlet } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import Signin from "./Homepagecomponents/Signin";
import HomePage from "./components/HomePage";
import { BloodBank } from "./Features.jsx/BloodBank";
import { Appointment } from "./Features.jsx/Appointment";
import { EmergencyServices } from "./Features.jsx/EmergencyServices";
import { HospitalBed } from "./Features.jsx/HospitalBed";
import Navbar from "./Homepagecomponents/Navbar";
import Footer from "./Homepagecomponents/Footer";
import Chatbot from "./Homepagecomponents/Chatbot";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/hospital-beds" element={<HospitalBed />} />
        <Route path="/blood-bank" element={<BloodBank />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/emergency-services" element={<EmergencyServices />} />
      </Routes>
      <Footer />
      <Chatbot />
      </>
  );
}

export default App;



/*bol.new page*/
// import "bootstrap/dist/css/bootstrap.min.css";
// import React, { useState } from 'react';
// import { Container, Nav, Navbar, Button, Card, Row, Col, Form } from 'react-bootstrap';
// import { Users, Heart, TrendingUp, Building2, Star, MessageCircle } from 'lucide-react';

// function App() {
//   const [rating, setRating] = useState(0);
//   const [comment, setComment] = useState('');

//   const services = [
//     {
//       title: 'Hospital Care',
//       image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=2000',
//       description: 'State-of-the-art facilities and expert medical care'
//     },
//     {
//       title: 'Emergency Response',
//       image: 'https://images.unsplash.com/photo-1587745416684-47953f16f02f?auto=format&fit=crop&q=80&w=2000',
//       description: '24/7 emergency medical services'
//     },
//     {
//       title: 'Blood Donation',
//       image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&q=80&w=2000',
//       description: 'Regular blood donation camps and storage facilities'
//     },
//     {
//       title: 'Find Hospitals',
//       image: 'https://images.unsplash.com/photo-1582560475093-ba66e482082e?auto=format&fit=crop&q=80&w=2000',
//       description: 'Locate nearby healthcare facilities'
//     }
//   ];

//   const testimonials = [
//     {
//       text: "This platform has been a lifesaver! I was able to find a hospital bed for my grandmother in minutes, and the blood donation service was exactly what we needed.",
//       author: "Sarah Jones",
//       image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
//     },
//     {
//       text: "I'm so grateful for the emergency services contact feature. It gives me peace of mind knowing I could quickly get help if needed.",
//       author: "David Lee",
//       image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
//     },
//     {
//       text: "Booking appointments online has never been easier. This website has made managing my healthcare needs so much simpler!",
//       author: "Maria Garcia",
//       image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150"
//     }
//   ];

//   return (
//     <div className="min-vh-100">
//       {/* Header */}
//       <Navbar bg="primary" variant="dark" expand="lg" className="py-3">
//         <Container>
//           <Navbar.Brand href="#" className="d-flex align-items-center">
//             <MessageCircle size={24} className="me-2" />
//             <span>Instant-Care</span>
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto">
//               <Nav.Link href="#">Home</Nav.Link>
//               <Nav.Link href="#">About</Nav.Link>
//               <Nav.Link href="#">Services</Nav.Link>
//               <Nav.Link href="#">Contact</Nav.Link>
//             </Nav>
//             <Button variant="light">Sign In</Button>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       {/* Hero Section */}
//       <section className="py-5 bg-light">
//         <Container>
//           <Row className="align-items-center">
//             <Col md={6}>
//               <h1 className="display-4 fw-bold mb-4">Welcome to Health Sahayak: Your Trusted Healthcare Partner</h1>
//               <p className="lead text-muted mb-4">
//                 At Health Sahayak, we are dedicated to providing comprehensive healthcare services to our community. Our team of experienced medical professionals is committed to your well-being.
//               </p>
//               <div className="d-flex gap-3">
//                 <Button variant="primary" size="lg">Book Now</Button>
//                 <Button variant="outline-primary" size="lg">Contact Us</Button>
//               </div>
//             </Col>
//             <Col md={6}>
//               <img
//                 src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&q=80&w=2000"
//                 alt="Healthcare"
//                 className="img-fluid rounded shadow"
//               />
//             </Col>
//           </Row>
//         </Container>
//       </section>

//       {/* Stats */}
//       <section className="py-5">
//         <Container>
//           <Row className="text-center">
//             <Col md={4}>
//               <Users size={48} className="text-primary mb-3" />
//               <h3 className="h2 fw-bold">1000+</h3>
//               <p className="text-muted">People Trusted Us</p>
//             </Col>
//             <Col md={4}>
//               <Heart size={48} className="text-primary mb-3" />
//               <h3 className="h2 fw-bold">500+</h3>
//               <p className="text-muted">People Helped by Blood Donation</p>
//             </Col>
//             <Col md={4}>
//               <TrendingUp size={48} className="text-primary mb-3" />
//               <h3 className="h2 fw-bold">900+</h3>
//               <p className="text-muted">Daily Users</p>
//             </Col>
//           </Row>
//         </Container>
//       </section>

//       {/* Services */}
//       <section className="py-5 bg-light">
//         <Container>
//           <h2 className="text-center mb-5">Our Services</h2>
//           <Row>
//             {services.map((service, index) => (
//               <Col md={6} key={index} className="mb-4">
//                 <Card className="h-100 shadow-sm">
//                   <Card.Img variant="top" src={service.image} height={200} style={{ objectFit: 'cover' }} />
//                   <Card.Body>
//                     <Card.Title>{service.title}</Card.Title>
//                     <Card.Text>{service.description}</Card.Text>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             ))}
//           </Row>
//         </Container>
//       </section>

//       {/* Mission */}
//       <section className="py-5 text-center">
//         <Container>
//           <h2 className="mb-4">Our Mission</h2>
//           <p className="lead text-muted mx-auto" style={{ maxWidth: '800px' }}>
//             To bridge the gap between patients and healthcare providers by offering real-time information, streamlined booking, and convenient access to clinical services, empowering individuals to take control of their health.
//           </p>
//         </Container>
//       </section>

//       {/* Contact Cards */}
//       <section className="py-5 bg-light">
//         <Container>
//           <h2 className="text-center mb-5">Reach Out</h2>
//           <Row>
//             <Col md={4} className="mb-4">
//               <Card className="h-100">
//                 <Card.Body>
//                   <Card.Title>Location</Card.Title>
//                   <Card.Text>Find the nearest hospitals, clinics and emergency resources with our interactive map.</Card.Text>
//                   <div className="d-flex gap-2">
//                     <Button variant="primary">Book Now</Button>
//                     <Button variant="outline-primary">Contact</Button>
//                   </div>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col md={4} className="mb-4">
//               <Card className="h-100">
//                 <Card.Body>
//                   <Card.Title>Call</Card.Title>
//                   <Card.Text>Get in touch with our team for personalized assistance and support.</Card.Text>
//                   <div className="d-flex gap-2">
//                     <Button variant="primary">Book Appointment</Button>
//                     <Button variant="outline-primary">Contact</Button>
//                   </div>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col md={4} className="mb-4">
//               <Card className="h-100">
//                 <Card.Body>
//                   <Card.Title>Explore</Card.Title>
//                   <Card.Text>Discover our network of healthcare providers and access a wide range of medical services across your region.</Card.Text>
//                   <div className="d-flex gap-2">
//                     <Button variant="primary">Book Now</Button>
//                     <Button variant="outline-primary">Contact</Button>
//                   </div>
//                 </Card.Body>
//               </Card>
//             </Col>
//           </Row>
//         </Container>
//       </section>

//       {/* Rating Section */}
//       <section className="py-5">
//         <Container>
//           <div className="mx-auto" style={{ maxWidth: '600px' }}>
//             <h2 className="text-center mb-4">Rate Our Services</h2>
//             <Card className="shadow-sm">
//               <Card.Body>
//                 <div className="d-flex justify-content-center gap-2 mb-3">
//                   {[1, 2, 3, 4, 5].map((star) => (
//                     <Star
//                       key={star}
//                       size={32}
//                       className={`cursor-pointer ${star <= rating ? 'text-warning' : 'text-muted'}`}
//                       onClick={() => setRating(star)}
//                       style={{ cursor: 'pointer' }}
//                     />
//                   ))}
//                 </div>
//                 <Form.Control
//                   as="textarea"
//                   rows={4}
//                   placeholder="Additional Comments"
//                   value={comment}
//                   onChange={(e) => setComment(e.target.value)}
//                   className="mb-3"
//                 />
//                 <Button variant="primary" className="w-100">Submit Rating</Button>
//               </Card.Body>
//             </Card>
//           </div>
//         </Container>
//       </section>

//       {/* Testimonials */}
//       <section className="py-5 bg-light">
//         <Container>
//           <h2 className="text-center mb-5">What People Say About Us</h2>
//           <Row>
//             {testimonials.map((testimonial, index) => (
//               <Col md={4} key={index} className="mb-4">
//                 <Card className="h-100">
//                   <Card.Body>
//                     <Card.Text className="mb-4">"{testimonial.text}"</Card.Text>
//                     <div className="d-flex align-items-center">
//                       <img
//                         src={testimonial.image}
//                         alt={testimonial.author}
//                         className="rounded-circle me-3"
//                         width={48}
//                         height={48}
//                       />
//                       <span className="fw-bold">{testimonial.author}</span>
//                     </div>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             ))}
//           </Row>
//         </Container>
//       </section>

//       {/* Footer */}
//       <footer className="bg-dark text-white py-4">
//         <Container className="text-center">
//           <p className="text-muted mb-2">
//             Live every breath, embrace every moment, for life is a precious gift.
//           </p>
//           <p className="small mb-0">
//             © 2025 Your Website Name. All rights reserved.
//           </p>
//         </Container>
//       </footer>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import './AboutPage.css'; 

function AboutPage() {
  return (
    <div className="about-page" >

       <section className="mission-section"> 
        <div className="container">
          <div className="row" style={{textAlign : 'center' , alignItems: 'center'}}>
            <div className="col-md-6">
                <img src="https://img.freepik.com/premium-vector/people-working-together-science-lab_23-2148477009.jpg?w=360" alt="Our Mission" className="img-fluid" /> 
            </div>
            <div className="col-md-6" style={{textAlign : 'center'}}>
              <h3 style={{fontSize: "-webkit-xxx-large"}}>Our Mission</h3>
              <p>
                To bridge the gap between patients and healthcare providers by offering 
                real-time information, streamlined booking, and convenient access to 
                critical services, empowering individuals to take control of their health.
              </p>
            </div>
          </div>
        </div>
      </section>

{/* <section className="contact-section py-5" style={{ backgroundColor: "#F9F9FF" }}>
      <div className="container text-center">
        <h2 className="fw-bold">Reach Out</h2>
        <p className="text-secondary">
          Connect with our team of healthcare professionals and get the support you need, whether it's booking an appointment.
        </p>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card shadow border-0 p-4">
              <div className="card-body">
                <i className="bi bi-geo-alt fs-1 text-danger"></i>
                <h5>Location</h5>
                <p className="text-muted">
                  Find the nearest healthcare facility and emergency resources with our interactive map.
                </p>
                <button className="btn btn-danger">Book Now</button>
                <button className="btn btn-outline-secondary ms-2">Contact</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow border-0 p-4">
              <div className="card-body">
                <i className="bi bi-telephone fs-1 text-danger"></i>
                <h5>Call</h5>
                <p className="text-muted">
                  Get in touch with our team for personalized assistance and support.
                </p>
                <button className="btn btn-danger">Book Appointment</button>
                <button className="btn btn-outline-secondary ms-2">Contact</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow border-0 p-4">
              <div className="card-body">
                <i className="bi bi-search fs-1 text-danger"></i>
                <h5>Explore</h5>
                <p className="text-muted">
                  Discover our network of healthcare providers and access a wide range of medical services across your region.
                </p>
                <button className="btn btn-danger">Book Now</button>
                <button className="btn btn-outline-secondary ms-2">Contact</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}

    </div>
  );
}

export default AboutPage;
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

      <section className="team-section">
        <div className="container">
          <h2 className="section-title">Our Founders</h2> 
          <div className="row">
            <div className="col-md-6"> 
              <div className="team-member">
                <img src="Divyanshi.jpg" alt="Founder 1" className="img-fluid" />
                <h4>Divyanshi Gupta</h4>
                <p>Divyanshi Gupta contributed significantly to the development of the frontend of website by working collaboratively with the ideas to create an intuitive and engaging user experience.</p> 
              </div>
            </div>
            <div className="col-md-6"> 
              <div className="team-member">
                <img src="Advay.jpeg" alt="Founder 2" className="img-fluid" />
                <h4>Advay Anand</h4>
                <p>Advay Anand has shown exceptional dedication by developing a database that provides users with hospital details and by working on integrating APIs. His innovative solutions have been pivotal to the development of our website.</p> 
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
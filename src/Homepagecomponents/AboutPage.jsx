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
    </div>
  );
}

export default AboutPage;
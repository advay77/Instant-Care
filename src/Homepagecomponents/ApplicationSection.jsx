import React from 'react';
import './ApplicationSection.css';

function ApplicationSection() {
  return (
    <div className="application-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img 
              src="https://img.freepik.com/free-vector/medical-video-call-consultation-illustration_88138-415.jpg?w=740&t=st=1709907552~exp=1709908152~hmac=6c3c2d0f6c0c4c7f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3" 
              alt="Mobile Application" 
              className="img-fluid"
            />
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div className="content">
              <h2>Download Our Mobile App</h2>
              <p>
                Get instant access to healthcare services, book appointments, and track your health journey with our user-friendly mobile application.
              </p>
              <div className="app-buttons">
                <a href="#" className="app-button">
                  <i className="fab fa-google-play"></i>
                  <div className="button-text">
                    <span>GET IT ON</span>
                    <strong>Google Play</strong>
                  </div>
                </a>
                <a href="#" className="app-button">
                  <i className="fab fa-apple"></i>
                  <div className="button-text">
                    <span>Download on the</span>
                    <strong>App Store</strong>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplicationSection;

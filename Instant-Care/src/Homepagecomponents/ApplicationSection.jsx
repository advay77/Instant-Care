import React, { useState } from 'react';

function ApplicationSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., sending data to a server
    console.log('Form submitted:', formData); 
  };

  return (
    <section className="application-section" style={{padding: "50px 0"}}>
      <div className="container">
        <h2 className="section-title text-align-center" style={{marginBottom: "20px"}}>Fill Up Application</h2>
        <p className="section-description text-align-center" style={{marginBottom: "30px"}}>
          Join us in our mission to improve healthcare access. Fill out the application below and become a part of our growing team.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group" style={{marginBottom: "20px"}}>
                <label htmlFor="name" style={{marginBottom: "5px"}} className='d-block'>Name:</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group" style={{marginBottom: "20px"}}>
                <label htmlFor="email" style={{marginBottom: "5px"}} className='d-block'>Email:</label>
                <input 
                  type="email" 
                  className="form-control" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group" style={{marginBottom: "20px"}}>
                <label htmlFor="phone" style={{marginBottom: "5px"}} className='d-block'>Phone:</label>
                <input 
                  type="tel" 
                  className="form-control" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  required 
                />
              </div>
            </div>
          </div>
          <div className="form-group" style={{marginBottom: "20px"}}>
            <label htmlFor="message" style={{marginBottom: "5px"}} className='d-block'>Message:</label>
            <textarea 
              className="form-control" 
              id="message" 
              name="message" 
              rows="5" 
              value={formData.message} 
              onChange={handleChange} 
            />
          </div>
          <button type="submit" className="btn" style={{backgroundColor :'#B2A5FF'}}>Submit Application</button>
        </form>
      </div>
    </section>
  );
}

export default ApplicationSection;
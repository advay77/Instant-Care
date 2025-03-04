import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export const Appointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    speciality: "",
    preferredDate: "",
    preferredTime: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const specialities = [
    "General Medicine",
    "Cardiology",
    "Neurology",
    "Orthopedics",
    "Pediatrics",
    "Gynecology",
    "Dermatology",
    "Ophthalmology",
    "ENT",
    "Psychiatry",
    "Dental",
    "Other"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment booked:", formData);
    setSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      speciality: "",
      preferredDate: "",
      preferredTime: "",
      message: ""
    });
    setSubmitted(false);
  };

  return (
    <div className="container mt-3">
      <div className="d-flex justify-content-between align-items-center">
        <h2 style={{color: '#640D5F'}}>Book Your Appointment</h2>
        {/* <button className="btn btn-outline-primary" onClick={() => navigate("/feature")}>
          Back to Features
        </button> */}
      </div>

      <div className="modal-content">
        <div className="modal-body p-4">
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <div className="row mb-3">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      pattern="[0-9]{10}"
                      title="Please enter a valid 10-digit phone number"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Speciality</label>
                <select
                  className="form-select"
                  name="speciality"
                  value={formData.speciality}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select speciality</option>
                  {specialities.map((spec, index) => (
                    <option key={index} value={spec}>{spec}</option>
                  ))}
                </select>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Preferred Date</label>
                    <input
                      type="date"
                      className="form-control"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Preferred Time</label>
                    <select
                      className="form-select"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select preferred time</option>
                      <option value="Morning (9AM - 12PM)">Morning (9AM - 12PM)</option>
                      <option value="Afternoon (12PM - 3PM)">Afternoon (12PM - 3PM)</option>
                      <option value="Evening (3PM - 6PM)">Evening (3PM - 6PM)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <label className="form-label">Additional Information (Optional)</label>
                <textarea
                  className="form-control"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Enter any additional information about your appointment"
                ></textarea>
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-primary btn-lg">
                  Book Appointment
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-4">
              <div className="mb-4">
                <span className="text-success display-1">✓</span>
              </div>
              <h3 className="mb-3">Appointment Booked Successfully!</h3>
              <p className="mb-4">
                Thank you for booking an appointment with us. We have sent a confirmation to your email and SMS with all the details.
                Our team will contact you shortly to confirm your appointment time.
              </p>
              <button className="btn" onClick={resetForm} style={{color: '#640D5F'}}>
                Book Another Appointment
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

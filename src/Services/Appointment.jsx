import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    age: "",
    gender: "",
    medicalIssue: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const genders = ["Male", "Female", "Other"];
  const medicalIssues = [
    "Fever",
    "Cough & Cold",
    "Headache",
    "Stomach Pain",
    "Skin Issues",
    "Diabetes",
    "Hypertension",
    "Mental Health",
    "Other",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Medical Consultation booked:", formData);
    setSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      age: "",
      gender: "",
      medicalIssue: "",
      preferredDate: "",
      preferredTime: "",
      message: "",
    });
    setSubmitted(false);
  };

  return (
    <div className="container py-5 mt-3">
      <div className="d-flex justify-content-between align-items-center">
        <h2 style={{ color: "#640D5F" }}>Book Online Medical Consultation</h2>
      </div>

      <div className="modal-contents w-100">
        <div className="modal-body">
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

              <div className="row mb-3">
                <div className="col-md-6">
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
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Age</label>
                    <input
                      type="number"
                      className="form-control"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      placeholder="Enter your age"
                      min="0"
                      max="120"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Gender</label>
                    <select
                      className="form-select"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select gender</option>
                      {genders.map((gender, index) => (
                        <option key={index} value={gender}>
                          {gender}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Medical Issue</label>
                    <select
                      className="form-select"
                      name="medicalIssue"
                      value={formData.medicalIssue}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select medical issue</option>
                      {medicalIssues.map((issue, index) => (
                        <option key={index} value={issue}>
                          {issue}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
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
                      min={new Date().toISOString().split("T")[0]}
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
                      <option value="Morning (9AM - 12PM)">
                        Morning (9AM - 12PM)
                      </option>
                      <option value="Afternoon (12PM - 3PM)">
                        Afternoon (12PM - 3PM)
                      </option>
                      <option value="Evening (3PM - 6PM)">
                        Evening (3PM - 6PM)
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <label className="form-label">
                  Additional Information (Optional)
                </label>
                <textarea
                  className="form-control"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Describe your symptoms or concerns"
                ></textarea>
              </div>

              <div className="d-grid">
                <button
                  type="submit"
                  className="btn btn-lg"
                  style={{ backgroundColor: "#982cca", color: "#FFFFFF" }}
                >
                  Book Consultation
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-4">
              <div className="mb-4">
                <span className="text-success display-1">✓</span>
              </div>
              <h3 className="mb-3">Consultation Booked Successfully!</h3>
              <p className="mb-4">
                Thank you for booking an online medical consultation with us. We
                have sent a confirmation to your email and SMS with all the
                details. Our team will contact you shortly to confirm your
                consultation time.
              </p>
              <button
                className="btn"
                onClick={resetForm}
                style={{ color: "#640D5F" }}
              >
                Book Another Consultation
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Appointment;
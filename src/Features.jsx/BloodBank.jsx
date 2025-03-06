import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export const BloodBank = () => {
  const [updates, setUpdates] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUpdates();
  }, []);

  async function fetchUpdates() {
    try {
      setLoading(true);
      setError(null);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API delay
      setUpdates(generateMockData());
    } catch (err) {
      setError("Failed to fetch blood bank updates");
    } finally {
      setLoading(false);
    }
  }

  function generateMockData() {
    const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
    const locations = ["City Blood Bank", "Regional Health Center", "Yashoda Hospital", "Apollo Blood Bank"];
    return bloodTypes.map((bloodType) => ({
      bloodType,
      availability: ["Low", "Medium", "High"][Math.floor(Math.random() * 3)],
      lastUpdated: new Date().toISOString(),
      location: locations[Math.floor(Math.random() * locations.length)],
      urgentNeed: Math.random() < 0.2, // 20% chance of urgent need
    }));
  }

  return (
    <div className="container mt-3">
      <div className="d-flex justify-content-between align-items-center ">
        <h2 style={{color: '#640D5F'}}>Blood Bank Availability</h2>
        {/* <button className="btn btn-outline-primary" onClick={() => navigate("/ServicesSection")}>
          Back to Features
        </button> */}
      </div>

      {loading && (
        <div className="text-center py-4">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {error && <div className="alert alert-danger">{error}</div>}

      {!loading && !error && updates.length > 0 && (
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Blood Type</th>
                <th>Availability</th>
                <th>Location</th>
                <th>Last Updated</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {updates.map((update, index) => (
                <tr key={index}>
                  <td>{update.bloodType}</td>
                  <td>
                    <span className={`badge bg-${update.availability === "Low" ? "danger" : update.availability === "Medium" ? "warning" : "success"}`}>
                      {update.availability}
                    </span>
                  </td>
                  <td>{update.location}</td>
                  <td>{new Date(update.lastUpdated).toLocaleString()}</td>
                  <td>{update.urgentNeed && <span className="badge bg-danger">Urgent Need</span>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

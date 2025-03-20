import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./HospitalBed.css";

// Define the dummy data inside the component
const dummyHospitals = [
  {
    hospital_id: 2190,
    name: "Central Hospital",
    city: "New Delhi",
    state: "Delhi",
    hospital_bed_count: 250,
    zip_code: 110018,
    county: "India",
  },
  {
    hospital_id: 5120,
    name: "Mercy Medical Center",
    city: "Ghaziabad NCR Region",
    state: "Uttar Pradesh",
    hospital_bed_count: 280,
    zip_code: "201002",
    county: "India",
  },
  {
    hospital_id: 2510,
    name: "Yashoda Super Speciality Hospital",
    city: "Vasundhara Sector 15",
    state: "Uttar Pradesh",
    hospital_bed_count: 200,
    zip_code: "201002",
    county: "India",
  },
  {
    hospital_id: 1563,
    name: "Max Super Speciality Hospital",
    city: "Saket, New Delhi",
    state: "Delhi",
    hospital_bed_count: 350,
    zip_code: "110017",
    county: "India",
  },
  {
    hospital_id: 4651,
    name: "Yatharth Super Speciality Hospital",
    city: "Plot No. 1, Lotus Panache, Sector 110, Noida ",
    state: "Uttar Pradesh",
    hospital_bed_count: 120,
    zip_code: "201304",
    county: "India",
  },
  {
    hospital_id: 2195,
    name: "Shuddhi Hiims Ayurvedic Clinics and Hospitals",
    city: "Plot B-26, Rohtak Road,New Multan Nagar",
    state: "Delhi",
    hospital_bed_count: 302,
    zip_code: "110056",
    county: "India",
  },
  {
    hospital_id: 3124,
    name: "Shree Krishna Hospital",
    city: "62, near Police Chowki, Block B, Surya Vihar, Sector 4, Gurugram",
    state: "Haryana",
    hospital_bed_count: 254,
    zip_code: "122001",
    county: "India",
  },
  {
    hospital_id: 5468,
    name: "AROGAYA HOSPITAL",
    city: "SEC G-3, GREATER NOIDA WEST,, GAUTAM BUDH NAGAR, noida extension, Greater Noida",
    state: "Uttar Pradesh",
    hospital_bed_count: 442,
    zip_code: "201308",
    county: "India",
  },
  {
    hospital_id: 5342,
    name: "GMS Hospital",
    city: "Ravli Rd, near BSNL Telephone Exchange, Muradnagar, Sarna Murad Nagar",
    state: "Uttar Pradesh",
    hospital_bed_count: 531,
    zip_code: "201206",
    county: "India",
  },
  {
    hospital_id: 4665,
    name: "Prakash Hospital",
    city: "D-12, 12A,12B, next to ISKCON Mandir, Block D, Sector 33, Noida",
    state: "Uttar Pradesh",
    hospital_bed_count: 450,
    zip_code: "201301",
    county: "India",
  },
];

export const HospitalBed = () => {
  const [hospitals, setHospitals] = useState(dummyHospitals);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchHospitals();
  }, []);

  async function fetchHospitals() {
    setLoading(true);
    setError(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setHospitals(dummyHospitals);
    } catch (err) {
      setError("Failed to fetch hospital data");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container mt-3">
      <div className="d-flex justify-content-between align-items-center ">
        <h2 style={{color: '#640D5F'}}>Hospital Bed Availability</h2>
        {/* <button 
          className="btn btn-outline-primary"
          onClick={() => navigate('/feature')}
        >
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

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      {!loading && !error && hospitals.length > 0 && (
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Hospital Name</th>
                <th>Location</th>
                <th>Total Beds</th>
                <th>Zip Code</th>
                <th>County</th>
              </tr>
            </thead>
            <tbody>
              {hospitals.map((hospital) => (
                <tr key={hospital.hospital_id}>
                  <td>{hospital.name}</td>
                  <td>{`${hospital.city}, ${hospital.state}`}</td>
                  <td>{hospital.hospital_bed_count}</td>
                  <td>{hospital.zip_code}</td>
                  <td>{hospital.county}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

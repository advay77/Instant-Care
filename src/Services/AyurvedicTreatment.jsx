import React, { useState } from "react";
import axios from "axios";

const AyurvedicTreatment = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const apiKey = 'AIzaSyB4OPrYOlBCIC3Gl66vZ7Aj3hYJsCaNH1I';

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      setError("Please enter a search query.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
        {
          contents: [
            {
              parts: [
                {
                  text: searchQuery,
                },
              ],
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const result = response.data.candidates[0].content.parts[0].text;
      setSearchResults(result);
    } catch (err) {
      setError("Failed to fetch Ayurvedic treatment details. Please try again.");
      console.error(err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-4 mt-5">
      <h1 className="text-center mb-4">Ayurvedic Treatment</h1>
      <p className="lead text-center">
        Discover the ancient wisdom of Ayurveda for holistic healing and well-being.
      </p>

      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <img
              src="https://samwarthika.com/articles/wp-content/uploads/2023/08/blog-image-ayurveda-treatment-in-singapore.jpg"
              className="card-img-top"
              alt="Panchakarma Therapy"
            />
            <div className="card-body">
              <h5 className="card-title">Panchakarma Therapy</h5>
              <p className="card-text">
                It offers a wealth of natural curative methods intended for the betterment of humanity. Among its various branches, Panchakarma stands out as particularly prominent.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card">
            <img
              src="https://media.post.rvohealth.io/wp-content/uploads/2024/02/Ayurvedic-header.jpg"
              className="card-img-top"
              alt="Ayurvedic Herbs and Spices"
            />
            <div className="card-body">
              <h5 className="card-title">Ayurvedic Herbs and Spices</h5>
              <p className="card-text">
                Ayurveda is a traditional Indian system of medicine. It aims to preserve health and wellness by keeping the mind, body, and spirit in balance and preventing disease rather than treating it.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card">
            <img
              src="https://atmabodhwellness.com/wp-content/uploads/2023/11/image-3-1024x576.png"
              className="card-img-top"
              alt="Shirodhara Treatment"
            />
            <div className="card-body">
              <h5 className="card-title">Shirodhara Treatment</h5>
              <p className="card-text">
                Shirodhara involves the application of oil to the forehead and scalp, constituting a remarkable body cleansing therapy coupled with a relaxation procedure.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Content */}
      <div className="mt-5">
        <h2>About Ayurvedic Treatments</h2>
        <p>
          Ayurveda is a 5,000-year-old system of natural healing that originated in India. It focuses on balancing the mind, body, and spirit through personalized treatments, herbal remedies, and lifestyle changes.
        </p>
        <p>
          Our Ayurvedic therapies are designed to detoxify, rejuvenate, and restore harmony to your life.
        </p>
      </div>

      {/* Search Bar */}
      <div className="mt-5">
        <h2>Search for Ayurvedic Treatments</h2>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            style={{marginRight : "24px"}}
            placeholder="Enter a treatment or herb name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className="btn"
            style={{backgroundColor : "#693382", color : "#FFFFFF"}}
            onClick={handleSearch}
            disabled={loading}
          >
            {loading ? "Searching..." : "Search"}
          </button>
        </div>

        {/* Display Search Results in a Card */}
        {error && <div className="alert alert-danger">{error}</div>}
        {searchResults && (
          <div className="card mt-3">
            <div className="card-body">
              <h3 className="card-title">Search Results</h3>
              <p className="card-text">{searchResults}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AyurvedicTreatment;
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AyurvedicLifestyleTracker = () => {
  const [diet, setDiet] = useState('');
  const [sleep, setSleep] = useState('');
  const [stress, setStress] = useState('');
  const [wellnessTips, setWellnessTips] = useState('');
  const [loading, setLoading] = useState(false);

  const apiKey = 'AIzaSyAC3TovZwqUEW9lrvYuXLBjIiZY2sqXBpE'; // Replace with your actual API key

  const handleTrack = async () => {
    setLoading(true);
    setWellnessTips('');

    try {
      const prompt = `Provide daily Ayurvedic wellness tips based on the following information: Diet: ${diet}, Sleep: ${sleep}, Stress: ${stress}. Keep the tips concise and practical.`;

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      });

      const data = await response.json();
      if (data.candidates && data.candidates.length > 0 && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts.length > 0) {
        setWellnessTips(data.candidates[0].content.parts[0].text);
      } else {
        setWellnessTips("Could not retrieve wellness tips.");
      }
    } catch (error) {
      console.error('Error fetching wellness tips:', error);
      setWellnessTips("Error retrieving wellness tips.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2>Ayurvedic Lifestyle Tracker</h2>
            <p className="lead">
              Monitor your diet, sleep, stress, and receive personalized daily wellness tips.
            </p>
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="diet" className="form-label">Diet:</label>
              <input
                type="text"
                className="form-control"
                id="diet"
                placeholder="e.g., Vegetarian, Balanced"
                value={diet}
                onChange={(e) => setDiet(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="sleep" className="form-label">Sleep:</label>
              <input
                type="text"
                className="form-control"
                id="sleep"
                placeholder="e.g., 7 hours, Restless"
                value={sleep}
                onChange={(e) => setSleep(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="stress" className="form-label">Stress:</label>
              <input
                type="text"
                className="form-control"
                id="stress"
                placeholder="e.g., High, Moderate"
                value={stress}
                onChange={(e) => setStress(e.target.value)}
              />
            </div>
            <div className="d-grid">
              <button className="btn" style={{ backgroundColor: '#693382', color: '#FFFFFF'}} onClick={handleTrack} disabled={loading}>
                {loading ? 'Loading...' : 'Get Wellness Tips'}
              </button>
            </div>
          </div>
        </div>
        {wellnessTips && (
          <div className="row justify-content-center mt-4">
            <div className="col-lg-8">
              <div className="card shadow-sm">
                <div className="card-body d-flex align-items-center flex-column">
                  <h5 className="card-title">Daily Wellness Tips</h5>
                  <p className="card-text">{wellnessTips}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AyurvedicLifestyleTracker;
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AyurvedicHealthReports = () => {
  const [healthQuery, setHealthQuery] = useState('');
  const [doshaAnalysis, setDoshaAnalysis] = useState('');
  const [dietaryGuidance, setDietaryGuidance] = useState('');
  const [lifestyleTips, setLifestyleTips] = useState('');
  const [loading, setLoading] = useState(false);

  const apiKey = 'AIzaSyAC3TovZwqUEW9lrvYuXLBjIiZY2sqXBpE'; // Replace with your actual API key

  const handleSearch = async () => {
    if (!healthQuery.trim()) return;

    setLoading(true);
    setDoshaAnalysis('');
    setDietaryGuidance('');
    setLifestyleTips('');

    try {
      const promptDosha = `Provide Dosha Analysis (Vata, Pitta, Kapha) related to the health problem: ${healthQuery}. Keep it short and concise.`;
      const promptDiet = `Provide Dietary Guidance related to the health problem: ${healthQuery}. Keep it short and concise.`;
      const promptLifestyle = `Provide Lifestyle Tips related to the health problem: ${healthQuery}. Keep it short and concise.`;

      const fetchGeminiResponse = async (prompt) => {
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
          return data.candidates[0].content.parts[0].text;
        } else {
          return "Could not retrieve information.";
        }
      };

      const doshaResponse = await fetchGeminiResponse(promptDosha);
      const dietResponse = await fetchGeminiResponse(promptDiet);
      const lifestyleResponse = await fetchGeminiResponse(promptLifestyle);

      setDoshaAnalysis(doshaResponse);
      setDietaryGuidance(dietResponse);
      setLifestyleTips(lifestyleResponse);
    } catch (error) {
      console.error('Error fetching response from Gemini:', error);
      setDoshaAnalysis("Error retrieving Dosha Analysis.");
      setDietaryGuidance("Error retrieving Dietary Guidance.");
      setLifestyleTips("Error retrieving Lifestyle Tips.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2>Personalized Ayurvedic Health Reports</h2>
            <p className="lead">
              Experience AI-driven analysis of your dosha (Vata, Pitta, Kapha) and receive personalized diet recommendations.
            </p>
            <div className="input-group mb-3 d-flex align-items-center">
              <input
                type="text"
                className="form-control"
                placeholder="Enter health problem..."
                value={healthQuery}
                onChange={(e) => setHealthQuery(e.target.value)}
              />
              <div className="input-group-append mx-3">
                <button className="btn" type="button" style={{ backgroundColor: '#693382', color: '#FFFFFF'}} onClick={handleSearch} disabled={loading}>
                  {loading ? 'Loading...' : 'Search'}
                </button>
              </div>
            </div>
          </div>
        </div>
        {doshaAnalysis && (
          <div className="row justify-content-center mt-4">
            <div className="col-md-4 mb-4" style={{ backgroundColor: '#0D7C66'}}>
              <div className="card shadow-sm">
                <div className="card-body d-flex align-items-center flex-column">
                  <h4>Dosha Analysis</h4>
                  <p className="card-text">{doshaAnalysis}</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4" style={{ backgroundColor: '#693382'}}>
              <div className="card shadow-sm">
                <div className="card-body d-flex align-items-center flex-column">
                  <h4>Dietary Guidance</h4>
                  <p className="card-text">{dietaryGuidance}</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4" style={{ backgroundColor: '#0D7C66'}}>
              <div className="card shadow-sm">
                <div className="card-body d-flex align-items-center flex-column">
                  <h4>Lifestyle Tips</h4>
                  <p className="card-text">{lifestyleTips}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AyurvedicHealthReports;
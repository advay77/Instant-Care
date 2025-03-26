import React, { useState } from 'react';
import { Moon, Sun, Brain, Utensils, Activity, Heart, X } from 'lucide-react';
import './AyurvedicLifestyleTracker.css';

function AyurvedicLifestyleTracker() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    diet: '',
    sleep: '',
    stress: '',
    exercise: '',
    symptoms: ''
  });

  const apiKey = 'AIzaSyAC3TovZwqUEW9lrvYuXLBjIiZY2sqXBpE';
  //Gemini API KEY USED HERE

  const [analysis, setAnalysis] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const generatePrompt = (data) => {
    return `As an Ayurvedic health expert, provide a concise 100-150 word analysis and personalized suggestions based on the following information:
    Diet: ${data.diet}
    Sleep Pattern: ${data.sleep}
    Stress Level: ${data.stress}
    Exercise Routine: ${data.exercise}
    Current Symptoms: ${data.symptoms}
    
    Format the response in markdown with two sections:
    1. Analysis of Current State
    2. Personalized Recommendations`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [{ parts: [{ text: generatePrompt(formData) }] }],
          }),
        }
      );
  
      const data = await response.json();
  
      if (data.candidates && data.candidates.length > 0) {
        setAnalysis(data.candidates[0].content.parts[0].text);
      } else {
        setAnalysis("No insights available at the moment. Please try again.");
      }
    } catch (error) {
      console.error('Error:', error);
      setAnalysis("We're experiencing technical difficulties. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="lifestyle-tracker">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Ayurvedic Lifestyle Tracker</h2>
          <p className="section-subtitle">
            Monitor your diet, sleep, stress, and receive personalized daily wellness tips.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <Utensils size={32} />
            </div>
            <h3>Diet Tracking</h3>
            <p>Track your meals and receive personalized dietary recommendations based on your dosha type.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Moon size={32} />
            </div>
            <h3>Sleep Analysis</h3>
            <p>Monitor your sleep patterns and get insights to improve your rest quality.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Brain size={32} />
            </div>
            <h3>Stress Management</h3>
            <p>Track stress levels and receive guided meditation and breathing exercises.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Activity size={32} />
            </div>
            <h3>Activity Monitoring</h3>
            <p>Log your daily activities and get recommendations for balanced exercise.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Heart size={32} />
            </div>
            <h3>Wellness Score</h3>
            <p>Get a daily wellness score based on your lifestyle choices and habits.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Sun size={32} />
            </div>
            <h3>Daily Routine</h3>
            <p>Personalized daily routine suggestions aligned with Ayurvedic principles.</p>
          </div>
        </div>

        <div className="cta-container">
          <button className="start-tracking-btn" onClick={() => setIsModalOpen(true)}>
            Start Tracking Your Lifestyle
            <span className="btn-arrow">→</span>
          </button>
          <p className="cta-subtitle">Get personalized Ayurvedic insights based on your lifestyle</p>
        </div>

        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <button className="modal-close" onClick={() => setIsModalOpen(false)}>
                <X size={24} />
              </button>
              
              <h3 className="modal-title">Track Your Ayurvedic Lifestyle</h3>
              
              <form onSubmit={handleSubmit} className="tracker-form">
                <div className="form-group">
                  <label htmlFor="diet">What did you eat today?</label>
                  <textarea
                    id="diet"
                    name="diet"
                    value={formData.diet}
                    onChange={handleInputChange}
                    placeholder="List your meals and timing..."
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="sleep">How was your sleep last night?</label>
                  <textarea
                    id="sleep"
                    name="sleep"
                    value={formData.sleep}
                    onChange={handleInputChange}
                    placeholder="Sleep duration and quality..."
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="stress">Current stress level and mood?</label>
                  <textarea
                    id="stress"
                    name="stress"
                    value={formData.stress}
                    onChange={handleInputChange}
                    placeholder="Describe your stress level and emotional state..."
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="exercise">Physical activity today?</label>
                  <textarea
                    id="exercise"
                    name="exercise"
                    value={formData.exercise}
                    onChange={handleInputChange}
                    placeholder="Type and duration of exercise..."
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="symptoms">Any current health concerns?</label>
                  <textarea
                    id="symptoms"
                    name="symptoms"
                    value={formData.symptoms}
                    onChange={handleInputChange}
                    placeholder="Current symptoms or health issues..."
                    required
                  />
                </div>

                <button type="submit" className="submit-btn" disabled={loading}>
                  {loading ? 'Analyzing...' : 'Get Ayurvedic Insights'}
                </button>
              </form>

              {analysis && (
                <div className="analysis-results">
                  <h4>Your Personalized Ayurvedic Insights</h4>
                  <div className="markdown-content">
                    {analysis}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AyurvedicLifestyleTracker;

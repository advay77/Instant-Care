import React, { useState } from 'react';
import { Star } from 'lucide-react';
import './RatingSection.css';

function RatingSection() {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (rating === 0) return;

    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <section className="rating-section">
        <div className="container">
          <div className="thank-you-container">
            <div className="thank-you-content">
              <div className="stars-container submitted">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={32}
                    fill={star <= rating ? "currentColor" : "none"}
                    className={star <= rating ? "star active" : "star"}
                  />
                ))}
              </div>
              <h2>Thank You for Your Feedback!</h2>
              <p>Your rating helps us improve our services for everyone.</p>
              <button 
                className="rate-again-btn"
                onClick={() => {
                  setSubmitted(false);
                  setRating(0);
                  setComment('');
                }}
              >
                Rate Again
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="rating-section">
      <div className="container">
        <div className="rating-container">
          <h2 className="section-title">Rate Our Services</h2>
          <p className="section-subtitle">
            Your feedback helps us improve. Please rate your experience with our healthcare services.
          </p>

          <form onSubmit={handleSubmit} className="rating-form">
            <div className="stars-container">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={32}
                  fill={star <= (hoveredRating || rating) ? "currentColor" : "none"}
                  className={star <= (hoveredRating || rating) ? "star active" : "star"}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                />
              ))}
            </div>

            <div className="rating-labels">
              {rating > 0 && (
                <span className="rating-text">
                  {rating === 1 && "Poor"}
                  {rating === 2 && "Fair"}
                  {rating === 3 && "Good"}
                  {rating === 4 && "Very Good"}
                  {rating === 5 && "Excellent"}
                </span>
              )}
            </div>

            <div className="comment-container">
              <textarea
                placeholder="Additional comments (optional)"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows={4}
                className="comment-input"
              />
            </div>

            <button 
              type="submit" 
              className={`submit-button ${loading ? 'loading' : ''}`}
              disabled={rating === 0 || loading}
            >
              {loading ? 'Submitting...' : 'Submit Rating'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default RatingSection; 
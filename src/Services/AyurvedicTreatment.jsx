import React from 'react';

const AyurvedicTreatment = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Ayurvedic Treatment</h1>
      <p className="lead text-center">
        Discover the ancient wisdom of Ayurveda for holistic healing and well-being.
      </p>

      <div className="row">
        {/* Image and Description 1 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img
              src="https://via.placeholder.com/300x200" // Replace with your image URL
              className="card-img-top"
              alt="Panchakarma Therapy"
            />
            <div className="card-body">
              <h5 className="card-title">Panchakarma Therapy</h5>
              <p className="card-text">
                A detoxification process that cleanses the body and restores balance.
              </p>
            </div>
          </div>
        </div>

        {/* Image and Description 2 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img
              src="https://via.placeholder.com/300x200" // Replace with your image URL
              className="card-img-top"
              alt="Abhyanga Massage"
            />
            <div className="card-body">
              <h5 className="card-title">Abhyanga Massage</h5>
              <p className="card-text">
                A full-body oil massage that rejuvenates the skin and relaxes the muscles.
              </p>
            </div>
          </div>
        </div>

        {/* Image and Description 3 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img
              src="https://via.placeholder.com/300x200" // Replace with your image URL
              className="card-img-top"
              alt="Shirodhara Treatment"
            />
            <div className="card-body">
              <h5 className="card-title">Shirodhara Treatment</h5>
              <p className="card-text">
                A calming therapy where warm oil is poured on the forehead to relieve stress.
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
    </div>
  );
};

export default AyurvedicTreatment;
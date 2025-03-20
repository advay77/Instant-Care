import React from 'react';

const AyurvedicTreatment = () => {
  return (
    <div className="container py-4 mt-5 ">
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

        {/* Image and Description 3 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img
              src="https://atmabodhwellness.com/wp-content/uploads/2023/11/image-3-1024x576.png" // Replace with your image URL
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
    </div>
  );
};

export default AyurvedicTreatment;
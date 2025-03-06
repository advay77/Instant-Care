import React from 'react';
import './TestimonialsSection.css'; // Import your CSS file

function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-title">What People Say About Us</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="testimonial">
              <p>
                "This platform has been a lifesaver! I was able to find a hospital bed for my 
                grandmother in minutes, and the blood bank information was incredibly helpful."
              </p>
              <div className="testimonial-author">
                <img src="https://media.istockphoto.com/id/1395408488/photo/portrait-of-happy-senior-woman-and-her-grandson-at-home.jpg?s=612x612&w=0&k=20&c=-PdK2KaSEhMFatUmRd-QmzJszJBMHzd4L7BxqFd70B0=" alt="Testimonial Author 1" />
                <h5>Sarah Jones</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="testimonial">
              <p>
                "I'm so grateful for the emergency services contact feature. It gave me peace of mind 
                knowing I could quickly access help in a critical situation."
              </p>
              <div className="testimonial-author">
                <img src="https://media.istockphoto.com/id/878468904/photo/portrait-of-mature-white-man-40-to-50-years-old-smiling-happy-showing-nice-and-positive-face.jpg?s=612x612&w=0&k=20&c=iOGvPAXRPpjReiWqGsxNIrHbRr9KQhyckGt4mrcEwxQ=" alt="Testimonial Author 2" />
                <h5>David Lee</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="testimonial">
              <p>
                "Booking appointments online has never been easier. This website has made managing my 
                healthcare needs so much more convenient."
              </p>
              <div className="testimonial-author">
                <img src="https://engageware.com/wp-content/uploads/2023/02/Setup-appointment-booking-system.jpg" alt="Testimonial Author 3" />
                <h5>Maria Garcia</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
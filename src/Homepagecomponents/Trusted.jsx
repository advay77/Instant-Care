import React, { useState, useEffect } from 'react';
import './Trusted.css'; // Import your CSS file

function Trusted() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    const interval1 = setInterval(() => {
      if (count1 < 1000) {
        setCount1(count1 + 10); 
      }
    }, 50);

    const interval2 = setInterval(() => {
      if (count2 < 500) {
        setCount2(count2 + 5);
      }
    }, 50);

    const interval3 = setInterval(() => {
      if (count3 < 900) {
        setCount3(count3 + 9);
      }
    }, 50);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, [count1, count2, count3]);

  return (
    <section className="trusted-section">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="trusted-box box1"> 
          <i className="fas fa-users fa-3x"></i> 
          <h3 className="count">{count1}+</h3>
          <p>People Trusted Us</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="trusted-box box2"> 
          <i className="fas fa-hand-holding-heart fa-3x"></i>
            <h3 className="count">{count2}+</h3>
            <p>People Helped by Blood Donation</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="trusted-box box3"> 
          <i className="fas fa-chart-line fa-3x"></i>
           <h3 className="count">{count3}+</h3>
           <p>Daily Users</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Trusted;

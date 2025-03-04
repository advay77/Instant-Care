import React from 'react';

function Footer() {
  return (
    <footer className="footer" style={{backgroundColor: "#343a40", color:" white", padding: "30px 0"}}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p className="punchline text-align-center" style={{fontSize: "1.2rem" ,marginBottom: "10px"}}>
              Live every breath, embrace every moment, for life is a precious gift.
            </p>
            <p className="copyright text-align-center" style={{fontSize: "0.9rem"}}>
              &copy; {new Date().getFullYear()} Your Website Name. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
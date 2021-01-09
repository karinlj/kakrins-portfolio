import React from "react";
import react_logo from "../../images/react_logo.png";

const Footer = () => {
  //UI component
  return (
    <footer className="footer-main" id="contact">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-8">
            <section className="logo_section">
              <h5>Powered by</h5>
              <div className="powered_by">
                <a href="https://reactjs.org/">
                  React
                  <img src={react_logo} alt="React logo" />
                </a>
                and
              </div>
            </section>
          </div>
          <div className="col-4">
            <div className="back">
              <a href="#nav">
                To top
                {/* <i className="fas fa-chevron-up arrow" title="Back to top"></i> */}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container lower">
        <div className="row justify-content-between align-items-end">
          <div className="col-md-3">
            <div className="footer-copy">
              <p className="">© {new Date().getFullYear()}- Karin Ljunggren</p>
            </div>
          </div>
          <div className="col-md-9">
            {/* social */}
            <ul className="social">
              <li className="social-item">
                <a href="mailto:kaljunggren@gmail.com" target="_top">
                  <i className="fas fa-envelope" aria-hidden="true"></i>
                  kaljunggren@gmail.com
                </a>
              </li>
              <li className="social-item">
                <a href="https://se.linkedin.com/in/karin-ljunggren">
                  <i className="fab fa-linkedin"></i>LinkedIn Profile
                </a>
              </li>
              <li className="social-item">
                <a href="https://github.com/karinlj">
                  <i className="fab fa-github"></i>GitHub Profile
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

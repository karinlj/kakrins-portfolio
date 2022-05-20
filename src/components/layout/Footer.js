import React from "react";
import contentful_logo_small from "../../images/contentful_logo_small.png";
import react_logo_small from "../../images/react_logo_small.png";
import SocialIcons from "../SocialIcons";

const Footer = () => {
  //UI component
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-6 col-sm-9">
            <section className="footer_logo_section">
              <h5>Powered by</h5>
              <div className="powered_by">
                <a href="https://reactjs.org/">
                  <img
                    src={react_logo_small}
                    alt="React logo"
                    className="react_logo"
                  />
                </a>
                &amp; &nbsp;
                <a href="https://www.contentful.com/">
                  <img
                    src={contentful_logo_small}
                    alt="Contentful logo"
                    className="contentful_logo"
                  />
                </a>
              </div>
            </section>
          </div>
          <div className="col-6 col-sm-3">
            <div className="back">
              <a href="#nav">To top</a>
            </div>
          </div>
        </div>
      </div>
      <div className="container lower">
        <div className="row justify-content-between align-items-end">
          <div className="col-lg-3">
            <div className="footer_copy">
              <p className="">© {new Date().getFullYear()}- Karin Ljunggren</p>
            </div>
          </div>
          <div className="col-lg-9">
            <SocialIcons footerLocation="true" />
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

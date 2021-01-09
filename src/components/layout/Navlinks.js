import React from "react";
import { NavLink } from "react-router-dom";

const Navlinks = ({ clickLink }) => {
  return (
    <>
      <div className="link_item home_link">
        <NavLink
          to="/"
          exact
          onClick={clickLink}
          className="link cursive"
          activeClassName="current_home"
        >
          Karin
        </NavLink>
      </div>
      <div className="nav_links">
        <ul>
          <li className="link_item">
            <NavLink
              to="/projects"
              onClick={clickLink}
              className="link"
              activeClassName="current"
            >
              Client Projects
            </NavLink>
          </li>

          <li className="link_item">
            <NavLink
              to="/personalProjects"
              onClick={clickLink}
              className="link"
              activeClassName="current"
            >
              Personal Projects
            </NavLink>
          </li>

          <li className="link_item">
            <NavLink
              to="/curriculum"
              onClick={clickLink}
              className="link"
              activeClassName="current"
            >
              CV
            </NavLink>
          </li>
        </ul>
        <div className="social">
          <ul>
            <li className="social_item">
              <a href="mailto:kaljunggren@gmail.com" target="_top">
                <i className="fas fa-envelope" aria-hidden="true"></i>
              </a>
            </li>
            <li className="social_item">
              <a href="https://se.linkedin.com/in/karin-ljunggren">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li className="social_item">
              <a href="https://github.com/karinlj">
                <i className="fab fa-github"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Navlinks;

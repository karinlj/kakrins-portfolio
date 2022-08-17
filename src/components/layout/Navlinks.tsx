import React from "react";
import { NavLink } from "react-router-dom";
import SocialIcons from "../SocialIcons";
interface IProps {
  clickLink?(): void;
}
const Navlinks = ({ clickLink }: IProps) => {
  return (
    <>
      <div className="link_item home_link">
        <NavLink to="/" exact onClick={clickLink} className="link cursive">
          Karin
        </NavLink>
      </div>
      <div className="nav_links">
        <ul className="nav_links_list">
          <li className="link_item">
            <NavLink to="/projects" onClick={clickLink} className="link">
              Client Projects
            </NavLink>
          </li>
          <li className="link_item">
            <NavLink
              to="/personalProjects"
              onClick={clickLink}
              className="link"
            >
              Personal Projects
            </NavLink>
          </li>
          <li className="link_item">
            <NavLink to="/curriculum" onClick={clickLink} className="link">
              CV
            </NavLink>
          </li>
        </ul>
        <div className="social_icons">
          <SocialIcons />
        </div>
      </div>
    </>
  );
};
export default Navlinks;

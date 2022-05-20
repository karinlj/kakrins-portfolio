import React, { useState, useEffect } from "react";
import Navlinks from "./Navlinks";
import ToggleBtn from "../../components/ToggleBtn";

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [btnRotate, setBtnRotate] = useState(false);

  const toggleMenu = () => {
    //menu open class toggle
    setMobileOpen(!mobileOpen);
    //btn rotate class toggle
    setBtnRotate(!btnRotate);
  };
  const clickLink = () => {
    if (mobileOpen) {
      //menu open class removed
      setMobileOpen(false);
    }
    if (btnRotate) {
      //btn rotate class removed
      setBtnRotate(false);
    }
  };

  //prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.toggle("no_scroll", mobileOpen);
    }
  }, [mobileOpen]);

  return (
    <header className="nav_header" id="nav">
      <div className="container">
        <div className="row">
          <div className="col">
            <nav className="navbar_bigscreen">
              <Navlinks />
              <ToggleBtn toggleMenu={toggleMenu} btnRotate={btnRotate} />
            </nav>
            <nav
              className={`navbar_mobile ${
                mobileOpen ? "navbar_mobile_open" : ""
              }`}
            >
              <Navlinks clickLink={clickLink} />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
export default NavBar;

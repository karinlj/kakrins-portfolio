import React, { useState, useEffect } from "react";
import Navlinks from "./Navlinks";
import ToggleBtn from "../../components/ToggleBtn";

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [btnClicked, setBtnClicked] = useState(false);

  const toggleMenu = () => {
    //click on btn -> menu toggle
    setMobileOpen(!mobileOpen);
    //click on btn -> toggle class on btn
    setBtnClicked(!btnClicked);
  };
  //click on link -> menu closing
  //click on link -> class changing in ToggleBtn
  const clickLink = () => {
    if (mobileOpen) {
      setMobileOpen(false);
    }
    if (btnClicked) {
      setBtnClicked(false);
    }
  };

  //prevent scroll when mobile menu is open
  useEffect(() => {
    document.body.classList.toggle("no_scroll", mobileOpen);
  }, [mobileOpen]);

  useEffect(() => {
    // console.log("mobileOpen_NavBar", mobileOpen);
    // console.log("btnClicked_NavBar", btnClicked);
  }, [mobileOpen, btnClicked]);

  return (
    <header className="nav_header" id="nav">
      <div className="container">
        <div className="row">
          <div className="col">
            <nav className="navbar_bigscreen">
              <Navlinks />
              <ToggleBtn handleClick={toggleMenu} btnClicked={btnClicked} />
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

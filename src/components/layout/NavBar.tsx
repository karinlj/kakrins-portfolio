import { useState, useEffect } from "react";
import Navlinks from "./Navlinks";
import ToggleBtn from "../../components/ToggleBtn";

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = () => {
    //menu open class toggle and btn rotate class toggle
    setMobileOpen(!mobileOpen);
  };
  const clickLink = () => {
    if (mobileOpen) {
      //menu open class removed
      setMobileOpen(false);
    }
  };

  //prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      //console.log("mobileOpen:", mobileOpen);
      document.body.classList.add("no_scroll");
    } else {
      document.body.classList.remove("no_scroll");
    }
  }, [mobileOpen]);

  return (
    <header className="nav_header" id="nav">
      <div className="container">
        <div className="row">
          <div className="col">
            <nav className="navbar_bigscreen">
              <Navlinks />
              <ToggleBtn toggleMenu={toggleMenu} mobileOpen={mobileOpen} />
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

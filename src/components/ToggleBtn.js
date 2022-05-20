import React from "react";

const ToggleBtn = ({ toggleMenu, btnRotate }) => {
  return (
    <button
      className={`menu_btn ${btnRotate ? "menu_btn_clicked" : ""}`}
      aria-label="Mobile Menu"
      aria-expanded={btnRotate ? "true" : "false"}
      onClick={toggleMenu}
    >
      <div aria-hidden="true"></div>
    </button>
  );
};
export default ToggleBtn;

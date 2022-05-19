import React from "react";

const ToggleBtn = ({ handleClick, btnClicked }) => {
  //click on link or btn -> class changing in btn
  return (
    <button
      className={`menu_btn ${btnClicked ? "menu_btn_clicked" : ""}`}
      aria-label="Mobile Menu"
      aria-expanded={btnClicked ? "true" : "false"}
      onClick={handleClick}
    >
      <div aria-hidden="true"></div>
    </button>
  );
};
export default ToggleBtn;

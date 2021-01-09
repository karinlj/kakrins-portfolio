import React from "react";

const ToggleBtn = ({ handleClick, btnClicked }) => {
  //toggle open menu
  //click on link or btn -> class changing in btn
  return (
    <div
      className={`toggle_btn ${btnClicked ? "clicked" : ""}`}
      onClick={handleClick}
    >
      <div></div>
    </div>
  );
};
export default ToggleBtn;

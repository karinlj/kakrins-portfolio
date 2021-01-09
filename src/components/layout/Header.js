import React from "react";

const Header = ({ heading, subHeading }) => {
  //UI component
  return (
    <header className="header">
      <h1 className="heading cursive">{heading}</h1>
      <h6 className="sub_heading">{subHeading}</h6>
    </header>
  );
};
export default Header;

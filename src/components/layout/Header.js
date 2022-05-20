import React from "react";

const Header = ({ heading, subHeading }) => {
  return (
    <header className="header_pages">
      <h1 className="heading cursive">
        {heading}
        <span className="sub_heading">{subHeading}</span>
      </h1>
    </header>
  );
};
export default Header;

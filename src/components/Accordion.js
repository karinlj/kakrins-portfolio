import React from "react";

const Accordion = ({ heading, content }) => {
  // The CURRENTTARGET property always refers to the element whose event listener triggered the event,
  //  opposed to the TARGET  property, which returns the element that triggered the event.
  return (
    <div
      className="accordion"
      onClick={(e) => e.currentTarget.classList.toggle("open")}
    >
      <div className="heading">
        <h6>{heading}</h6>
        <i className="fas fa-chevron-down arrow"></i>
        {/* <i className="material-icons arrow text-white">expand_more</i> */}
      </div>
      <p className="content">{content}</p>
    </div>
  );
};
export default Accordion;

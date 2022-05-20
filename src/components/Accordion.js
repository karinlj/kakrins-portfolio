import React, { useState } from "react";

const Accordion = ({ heading, content }) => {
  // The CURRENTTARGET property always refers to the element whose event listener triggered the event,
  //  opposed to the TARGET  property, which returns the element that triggered the event.
  const [openAccordion, setOpenAccordion] = useState(false);

  const toggleAccordion = (e) => {
    e.currentTarget.classList.toggle("open");
    setOpenAccordion(!openAccordion);
  };

  return (
    <button
      className="accordion"
      onClick={toggleAccordion}
      aria-label="Courses content"
      aria-expanded={openAccordion ? "true" : "false"}
    >
      <div className="heading">
        <h3>{heading}</h3>
        <i className="fas fa-chevron-down arrow" aria-hidden="true"></i>
      </div>
      <p className="content">{content}</p>
    </button>
  );
};
export default Accordion;

import React from "react";
import Accordion from "./Accordion";

function CurriculumSection({ entry }) {
  // console.log("entry_CurriculumSection", entry);
  const {
    title,
    titleLink,
    date,
    description,
    siteList,
    subItemList,
  } = entry.fields;

  return (
    <article className="curriculumItem">
      <h4>
        <a href={titleLink} target="_blank" rel="noopener noreferrer">
          {title}
          {""}
        </a>
      </h4>
      <div className="small_text">
        <span className="date">{date} </span>
      </div>
      <div className="description">
        <p>{description} </p>
      </div>
      {siteList &&
        siteList.map((site, index) => {
          return (
            // <div className="sites">
            <div className="site" key={index}>
              <a
                href={site}
                alt={site}
                target="_blank"
                rel="noopener noreferrer"
              >
                {site}
                {""}
              </a>
            </div>
            // </div>
          );
        })}

      {/* course_items accordion */}
      {subItemList &&
        subItemList.map((item, i) => {
          return (
            <section className="course_items">
              <Accordion
                //key should be here in big comp
                key={i}
                heading={item.heading}
                content={item.content}
              />
            </section>
          );
        })}
    </article>
  );
}

export default CurriculumSection;

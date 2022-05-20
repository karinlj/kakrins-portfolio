import React from "react";
import Accordion from "./Accordion";

function CurriculumSection({ entry }) {
  const { title, titleLink, date, description, siteList, subItemList } =
    entry.fields;

  return (
    <article className="curriculum_item">
      <h2>
        <a
          href={titleLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Company homepage"
        >
          {title}
          {""}
        </a>
      </h2>
      <p className="date">{date} </p>
      <p className="description">{description}</p>
      {siteList &&
        siteList.map((site, index) => {
          return (
            <div className="site" key={index}>
              <a
                href={site}
                alt={site}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Site page"
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

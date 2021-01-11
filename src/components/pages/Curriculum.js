import React, { useState, useEffect } from "react";
import Header from "../layout/Header";
import Accordion from "../Accordion";
import { client } from "../../client";
import monstera_vertical_big from "../../images/monstera_vertical_big.jpg";

const Curriculum = () => {
  const [workItems, setWorkItems] = useState(null);
  const [schoolItems, setSchoolItems] = useState(null);

  //get workItem from contentful
  useEffect(() => {
    client
      .getEntries({
        content_type: "workItem",
        order: "-fields.sortDate",
      })

      .then((response) => {
        console.log("response_workItem", response.items);
        setWorkItems(response.items);
      })
      .catch((error) => console.log("error", error));
  }, []);

  //get schoolItem from contentful
  useEffect(() => {
    client
      .getEntries({
        content_type: "schoolItem",
        order: "-fields.sortDate",
      })

      .then((response) => {
        // console.log("response_schoolItems", response.items);
        setSchoolItems(response.items);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <main className="curriculum">
      {/* <Header heading="Curriculum" subHeading="Some of my experiences." /> */}

      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* education */}
            <div
              className="bg_wrapper"
              style={{ background: `url(${monstera_vertical_big})` }}
            >
              <div className="wrapper">
                {/* <h2 className="cursive text-center">Work Experience</h2> */}
                <Header heading="Work Experience" />

                <section className="workItems">
                  <div className="container">
                    <div className="row">
                      {workItems &&
                        workItems.map((workItem) => {
                          return (
                            <article className="workItem" key={workItem.sys.id}>
                              <h4>
                                <a
                                  href={workItem.fields.titleLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {workItem.fields.title}
                                  {""}
                                </a>
                              </h4>
                              <div className="small_text">
                                <span className="date">
                                  {workItem.fields.date}{" "}
                                </span>
                              </div>
                              <div className="description">
                                <p>{workItem.fields.description} </p>
                              </div>
                              <div className="sites">
                                <ul>
                                  {workItem.fields.siteList &&
                                    workItem.fields.siteList.map(
                                      (site, index) => {
                                        return (
                                          <li key={index}>
                                            <a
                                              href={site}
                                              alt={site}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                            >
                                              {site}
                                              {""}
                                            </a>
                                          </li>
                                        );
                                      }
                                    )}
                                </ul>
                              </div>
                            </article>
                          );
                        })}
                    </div>
                  </div>
                </section>
              </div>
            </div>
            {/* education */}
            <div
              className="bg_wrapper"
              style={{ background: `url(${monstera_vertical_big})` }}
            >
              <div className="wrapper">
                <Header heading="Education" />
                {/* <h2 className="cursive text-center">Education</h2> */}

                <section className="schoolItems">
                  <div className="container">
                    <div className="row">
                      {schoolItems &&
                        schoolItems.map((schoolItem, index) => {
                          return (
                            <article className="schoolItem" key={index}>
                              <h4>
                                <a
                                  href={schoolItem.fields.titleLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {schoolItem.fields.title}
                                </a>
                              </h4>
                              <div className="small_text">
                                <span className="date">
                                  {schoolItem.fields.date}{" "}
                                </span>
                              </div>
                              <div className="description">
                                <p>{schoolItem.fields.description} </p>
                              </div>
                              {/* course_items accordion */}
                              <section className="course_items">
                                {schoolItem.fields.subItemList &&
                                  schoolItem.fields.subItemList.map(
                                    (item, i) => {
                                      return (
                                        <Accordion
                                          //key should be here in big comp
                                          key={i}
                                          heading={item.heading}
                                          content={item.content}
                                        />
                                      );
                                    }
                                  )}
                              </section>
                            </article>
                          );
                        })}
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Curriculum;

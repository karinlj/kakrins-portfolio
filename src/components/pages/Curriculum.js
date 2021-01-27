import React, { useState, useEffect } from "react";
import Header from "../layout/Header";
import { client } from "../../client";
import CurriculumSection from "../CurriculumSection";

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
        //console.log("response_workItem", response.items);
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
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* Work Experience */}
            <div className="bg_wrapper">
              <div className="wrapper">
                <Header heading="Work Experience" />
                <section className="curriculumItems">
                  <div className="container">
                    <div className="row">
                      <div className="col-12">
                        {workItems &&
                          workItems.map((entry) => {
                            return (
                              <CurriculumSection
                                entry={entry}
                                key={entry.sys.id}
                              />
                            );
                          })}
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            {/* education */}
            <div className="bg_wrapper">
              <div className="wrapper">
                <Header heading="Education" />
                <section className="curriculumItems">
                  <div className="container">
                    <div className="row">
                      <div className="col-12">
                        {schoolItems &&
                          schoolItems.map((entry, index) => {
                            return (
                              <CurriculumSection
                                entry={entry}
                                key={entry.sys.id}
                              />
                            );
                          })}
                      </div>
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

import React, { useState, useEffect } from "react";
import HeaderPages from "../layout/HeaderPages";
import { client } from "../../client";
import CurriculumSection from "../CurriculumSection";
import { ICurriculumItem } from "../../interfaces";

const Curriculum = () => {
  const [workItems, setWorkItems] = useState<ICurriculumItem[] | null>(null);
  const [schoolItems, setSchoolItems] = useState<ICurriculumItem[] | null>(
    null
  );
  const [loadingWorkItems, setLoadingWorkItems] = useState(false);
  const [loadingSchoolItems, setLoadingSchoolItems] = useState(false);

  const getWorkItems = () => {
    client
      .getEntries({
        content_type: "workItem",
        order: "-fields.sortDate",
      })
      .then((response) => {
        setWorkItems(response.items as any);
        setLoadingWorkItems(false);
      })
      .catch((error) => console.log("error", error));
  };
  const getSchoolItems = () => {
    client
      .getEntries({
        content_type: "schoolItem",
        order: "-fields.sortDate",
      })
      .then((response) => {
        setSchoolItems(response.items as any);
        setLoadingSchoolItems(false);
      })
      .catch((error) => console.log("error", error));
  };
  //get Items from contentful
  useEffect(() => {
    setLoadingWorkItems(true);
    getWorkItems();
    setLoadingSchoolItems(true);
    getSchoolItems();
  }, []);

  return (
    <main className="curriculum">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* Work Experience */}
            <div className="bg_wrapper">
              <div className="wrapper">
                <HeaderPages heading="Work Experience" />
                <section className="curriculum_items">
                  <div className="container">
                    <div className="row">
                      <div className="col-12">
                        {loadingWorkItems && (
                          <p className="loading">...Loading</p>
                        )}
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
                <HeaderPages heading="Education" />
                <section className="curriculum_items">
                  <div className="container">
                    <div className="row">
                      <div className="col-12">
                        {loadingSchoolItems && (
                          <p className="loading">...Loading</p>
                        )}
                        {schoolItems &&
                          schoolItems.map((entry) => {
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

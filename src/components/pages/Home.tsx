import { useState, useEffect } from "react";
import monstera_lighter_s from "../../images/monstera_lighter_s.jpg";
import { client } from "../../client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import monstera_square2 from "../../images/monstera_square2.jpg";

import { IAbout, ISkillColumn, IWorkingWays } from "../../interfaces";

const Home = () => {
  const [aboutData, setAboutData] = useState<IAbout | null>(null);
  const [skillColumns, setSkillColumns] = useState<ISkillColumn[] | null>(null);
  const [workingWays, setWorkingWays] = useState<IWorkingWays[] | null>(null);
  const [loadingAbout, setLoadingAbout] = useState(false);
  const [loadingSkills, setLoadingskills] = useState(false);
  const [loadingWorkingWays, setLoadingWorkingWays] = useState(false);

  //stop the fetch when component using it unmounts
  const abortContrl = new AbortController();

  const getAboutData = () => {
    client
      .getEntries({
        content_type: "aboutData",
        signal: abortContrl.signal,
      })
      .then((response) => {
        setAboutData(response.items[0] as any);
        setLoadingAbout(false);
      })
      .catch((error) => console.log("error", error));
  };

  const getSkillColumns = () => {
    client
      .getEntries({
        content_type: "skillColumn",
        order: "fields.sortNumber",
        signal: abortContrl.signal,
      })
      .then((response) => {
        setSkillColumns(response.items as any);
        setLoadingskills(false);
      })
      .catch((error) => console.log("error", error));
  };

  const getworkingWays = () => {
    client
      .getEntries({
        content_type: "workingWays",
        order: "fields.sortNumber",
        signal: abortContrl.signal,
      })
      .then((response) => {
        console.log("getworkingWays", workingWays);
        setWorkingWays(response.items as any);
        setLoadingWorkingWays(false);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    setLoadingAbout(true);
    setLoadingskills(true);
    getAboutData();
    getSkillColumns();
    getworkingWays();
    //clean up
    return () => {
      abortContrl.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="home">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="home_img_wrapper"
              style={{
                background: `url(${monstera_lighter_s})`,
              }}
            >
              <section className="heading_box_section">
                {loadingAbout && <p className="loading">...Loading</p>}
                {aboutData ? (
                  <h1 className="home_name cursive">
                    {aboutData.fields.heading}
                    <span className="home_name_sub cursive">
                      {aboutData.fields.text}
                    </span>
                  </h1>
                ) : (
                  ""
                )}
              </section>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="home_text">
              <h2 className="text-center cursive">About Me</h2>
              {aboutData
                ? documentToReactComponents(aboutData.fields.aboutContent)
                : ""}
            </div>
          </div>
        </div>
      </div>

      <section className="skills_section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <section className="boxes">
                <h2 className="text-center cursive">Skills</h2>
                <p className="text-center">
                  <strong>
                    Some of my skills. Always wanting to learn more...
                  </strong>
                </p>

                <div className="boxes_inner">
                  {loadingSkills && <p className="loading">...Loading</p>}

                  {skillColumns &&
                    skillColumns.map((entry, index) => {
                      const { icon, title, content } = entry.fields;
                      return (
                        <div
                          className="box"
                          style={{
                            background: `url(${monstera_square2}) no-repeat`,
                          }}
                          key={entry.sys.id}
                        >
                          <div className="boxes_text_part_outer">
                            <div className="boxes_text_part_inner">
                              <i
                                className={`fas fa-${icon} boxes_icon`}
                                aria-hidden="true"
                              ></i>
                              <i
                                className={`fab fa-${icon} boxes_icon`}
                                aria-hidden="true"
                              ></i>
                              <h3 className="heading"> {title}</h3>
                              <div className="text">
                                {documentToReactComponents(content)}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </section>

              <section className="boxes">
                <h2 className="text-center cursive">How I like to work</h2>
                <div className="boxes_inner workingWays">
                  {loadingWorkingWays && <p className="loading">...Loading</p>}

                  {workingWays &&
                    workingWays.map((entry, index) => {
                      const { icon, title, list } = entry.fields;

                      return (
                        <div className="box workingWays">
                          <div className="boxes_text_part_outer" key={index}>
                            <div className="boxes_text_part_inner">
                              <i
                                className={`fas fa-${icon} boxes_icon`}
                                aria-hidden="true"
                              ></i>
                              <h3 className="heading">{title}</h3>

                              <ul>
                                {list.map((item, index) => {
                                  return <li key={index}>{item}</li>;
                                })}
                              </ul>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Home;

import React, { useState, useEffect } from "react";
import monstera_lighter from "../../images/monstera_lighter.jpg";
import { client } from "../../client";

const Home = () => {
  // const [skillItems, setSkillItems] = useState(null);
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    client
      .getEntries({
        content_type: "aboutData",
      })
      .then((response) => {
        console.log("response_aboutData", response.items[0]);
        setAboutData(response.items[0]);
      })
      .catch((error) => console.log("error", error));
  }, []);

  // useEffect(() => {
  //   const { heading, text, content } = aboutData.fields;
  // }, [aboutData]);

  // useEffect(() => {
  //   //GROQ sanity query language
  //   sanityClient
  //     .fetch(
  //       `*[_type=="skill"] | order(sortNumber){
  //         title,
  //         icon,
  //         content,
  //         sortNumber
  //   }`
  //     )
  //     .then((response) => {
  //       //console.log("response-skillItems", response);
  //       setSkillItems(response);
  //     })
  //     .catch((error) => console.log("error", error));
  // }, []);

  return (
    <main className="home">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="home_img_wrapper"
              style={{
                background: `url(${monstera_lighter})`,
              }}
            >
              <section className="heading_box">
                {aboutData ? (
                  <div>
                    <h1 className="home_name cursive">
                      {aboutData.fields.heading}
                    </h1>
                    <h3 className="home_name_sub cursive">
                      {aboutData.fields.text}
                    </h3>
                  </div>
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
              <h2 className="section-heading text-center cursive">About Me</h2>
              {aboutData ? (
                <div>
                  {aboutData.fields.content.content[0].content[0].value}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>

      <section className="skills_section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <section className="boxes">
                <h2 className="section-heading text-center cursive">Skills</h2>

                <div className="boxes-inner"></div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Home;

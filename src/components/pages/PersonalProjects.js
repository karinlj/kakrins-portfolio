import React, { useState, useEffect } from "react";
import { client } from "../../client";
import { Filter } from "../Filter";
import Header from "../layout/Header";

const PersonalProjects = () => {
  const [projects, setProjects] = useState(null);

  const [checkedTecniqueNames, setCheckedTecniqueNames] = useState([]);

  const activeFilter = [
    { id: 1, name: "vuejs", isChecked: true },
    { id: 2, name: "reactjs", isChecked: true },
    { id: 3, name: "wordpress", isChecked: true },
    { id: 4, name: "aureliajs", isChecked: true },
    { id: 5, name: "typescript", isChecked: true },
  ];

  //functon with names of checked items as parameter from 'litte' comp
  const displayItems = (checkedItemNames) => {
    //set state
    setCheckedTecniqueNames(checkedItemNames);
  };

  //help function
  const intersection = (array1, array2) => {
    return array1.filter((element) => {
      //return true or false depending on if array2 includes one element from array1
      return array2.includes(element);
    });
  };
  //get personalProject from contentful
  useEffect(() => {
    client
      .getEntries({
        content_type: "personalProject",
        order: "-fields.releaseDate",
      })
      .then((response) => {
        console.log("response_personalProject", response.items);
        setProjects(response.items);
      })
      .catch((error) => console.log("error", error));
  }, []);

  useEffect(() => {
    //console.log("projects", projects);
  }, [projects]);

  useEffect(() => {
    // console.log("personal_checkedTecniqueNames", checkedTecniqueNames);
  }, [checkedTecniqueNames]);

  return (
    <main className="">
      <Header
        heading="Personal Projects Page"
        subHeading="Recent projects to explore various tecniques."
      />
      <section className="projects">
        <div className="container">
          {/* Filter component */}
          <Filter displayItems={displayItems} activeFilter={activeFilter} />

          <div className="row">
            {projects &&
              //if project.techniques includes name from checkedTecniqueNames
              projects.map((project) => {
                return intersection(
                  project.fields.techniques,
                  checkedTecniqueNames
                ).length > 0 ? (
                  <div
                    className="col-12 col-md-6 col-lg-4"
                    key={project.sys.id}
                  >
                    <article className="project">
                      <a
                        href={project.fields.link}
                        alt={project.fields.title}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        {""}
                      </a>
                      <div className="featured_image">
                        <img
                          src={project.fields.image.fields.file.url}
                          alt={project.fields.image.fields.file.title}
                        />
                      </div>
                      <div className="content_container">
                        <h4 className="title">{project.fields.title}</h4>

                        <div className="small_text">
                          <div className="date">
                            <span>
                              <strong className="font_bold">
                                Finished on:{" "}
                              </strong>
                            </span>

                            {new Date(
                              project.fields.releaseDate
                            ).toLocaleDateString()}
                          </div>

                          <div className="techniques">
                            <span>
                              <strong className="font_bold">
                                Techniques:{" "}
                              </strong>
                            </span>

                            {project.fields.techniques.map(
                              (technique, index) => {
                                return (
                                  <div key={index} className="technique">
                                    {technique}
                                    {index ===
                                    project.fields.techniques.length - 1
                                      ? ""
                                      : ","}
                                  </div>
                                );
                              }
                            )}
                          </div>
                          <div className="date">
                            <span>
                              <strong className="font_bold">Thanks to: </strong>
                            </span>
                            {project.fields.acknowledgement}
                          </div>
                        </div>

                        <p className="description">
                          {project.fields.description}
                        </p>
                      </div>
                    </article>
                  </div>
                ) : (
                  ""
                );
              })}
          </div>
        </div>
      </section>
    </main>
  );
};
export default PersonalProjects;

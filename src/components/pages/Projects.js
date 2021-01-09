import React, { useState, useEffect } from "react";
import { Filter } from "../Filter";
import Header from "../layout/Header";
import { client } from "../../client";

const Projects = () => {
  const [projects, setProjects] = useState(null);

  const [checkedTecniqueNames, setCheckedTecniqueNames] = useState([]);

  const activeFilter = [
    { id: 1, name: "vuejs", isChecked: true },
    { id: 2, name: "reactjs", isChecked: true },
    { id: 3, name: "wordpress", isChecked: true },
    { id: 4, name: "angular1", isChecked: true },
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

  useEffect(() => {
    // console.log(
    //   "checkedTecniqueNames_state_project_comp",
    //   checkedTecniqueNames
    // );
  }, [checkedTecniqueNames]);

  //get data from contentful
  useEffect(() => {
    client
      .getEntries({
        content_type: "project",
        order: "-fields.releaseDate",
        // order: "-sys.createdAt",
      })

      .then((response) => {
        // console.log("response_projects", response.items);
        setProjects(response.items);
      })
      .catch((error) => console.log("error", error));
  }, []);

  useEffect(() => {
    console.log("projects", projects);
  }, [projects]);

  return (
    <main className="">
      <Header heading="Client Projects Page" subHeading="My Client Projects." />

      <section className="projects">
        <div className="container">
          {/* Filter component */}
          <Filter displayItems={displayItems} activeFilter={activeFilter} />

          <div className="row">
            {projects &&
              //if project.techniques includes name from checkedTecniqueNames
              projects.map((project, index) => {
                const {
                  title,
                  link,
                  image,
                  releaseDate,
                  techniques,
                  description,
                } = project.fields;

                //[]returns true
                return intersection(
                  project.fields.techniques,
                  checkedTecniqueNames
                ).length > 0 ? (
                  <div className="col-12 col-md-6 col-lg-4" key={index}>
                    <article className="project">
                      <a
                        href={link}
                        alt={title}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        {""}
                      </a>
                      <div className="featured_image">
                        <img
                          src={image.fields.file.url}
                          alt={image.fields.file.title}
                          className=""
                        />
                      </div>
                      <div className="content_container">
                        <h4 className="title">{title}</h4>
                        <div className="small_text">
                          <div className="date">
                            <span>
                              <strong className="font_bold">
                                Finished on:{" "}
                              </strong>
                            </span>

                            {new Date(releaseDate).toLocaleDateString()}
                          </div>

                          <div className="techniques">
                            <span>
                              {" "}
                              <strong className="font_bold">
                                Techniques:{" "}
                              </strong>
                            </span>

                            {techniques.map((technique, index) => {
                              return (
                                <div key={index} className="technique">
                                  {technique}
                                  {index === techniques.length - 1 ? "" : ","}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                        <p className="description">{description}</p>
                      </div>
                    </article>
                  </div>
                ) : null;
              })}
          </div>
        </div>
      </section>
    </main>
  );
};
export default Projects;

import React, { useState, useEffect } from "react";
import { Filter } from "../Filter";
import HeaderPages from "../layout/HeaderPages";
import { client } from "../../client";
import SingleProject from "../SingleProject";
import { IProject } from "../../interfaces";

const Projects = () => {
  const [projects, setProjects] = useState<IProject[] | null>(null);
  const [loading, setLoading] = useState(false);
  const abortContrl = new AbortController();
  const [checkedTecniqueNames, setCheckedTecniqueNames] = useState<string[]>(
    []
  );
  const activeFilter = [
    { id: 1, name: "vuejs", isChecked: true },
    { id: 2, name: "reactjs", isChecked: true },
    { id: 3, name: "wordpress", isChecked: true },
    { id: 4, name: "angular1", isChecked: true },
    { id: 5, name: "sass", isChecked: true },
  ];
  //functon with names of checked items as parameter from Filter comp
  const displayItems = (names: string[]) => {
    //set state
    setCheckedTecniqueNames(names);
  };

  //help function
  const intersection = (array1: string[], array2: string[]) => {
    return array1.filter((element) => {
      //return true or false depending on if array2 includes one element from array1
      return array2.includes(element);
    });
  };
  const getProjects = () => {
    client
      .getEntries({
        content_type: "project",
        signal: abortContrl.signal,
        order: "-fields.releaseDate",
      })
      .then((response) => {
        setProjects(response.items as any); // 👈️ type assertion
        setLoading(false);
      })
      .catch((error) => console.log("error", error));
  };
  //get project from contentful
  useEffect(() => {
    setLoading(true);
    getProjects();
    return () => {
      abortContrl.abort();
    };
    //eslint-disable-next-line
  }, []);

  return (
    <main className="">
      <HeaderPages
        heading="Client Projects Page"
        subHeading="My Client Projects."
      />

      <section className="projects">
        <div className="container">
          <Filter displayItems={displayItems} activeFilter={activeFilter} />

          <div className="row">
            {loading && <p className="loading">...Loading</p>}
            {projects &&
              //if project.techniques includes name from checkedTecniqueNames
              projects.map((project) => {
                //[]returns true
                return intersection(
                  project.fields.techniques,
                  checkedTecniqueNames
                ).length > 0 ? (
                  <SingleProject project={project} key={project.sys.id} />
                ) : null;
              })}
          </div>
        </div>
      </section>
    </main>
  );
};
export default Projects;

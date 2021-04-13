import React, { useState, useEffect } from "react";
import { client } from "../../client";
import { Filter } from "../Filter";
import Header from "../layout/Header";
import SingleProject from "../SingleProject";

const PersonalProjects = () => {
  const [projects, setProjects] = useState(null);
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    client
      .getEntries({
        content_type: "personalProject",
        order: "-fields.releaseDate",
      })
      .then((response) => {
        //  console.log("response_personalProject", response.items);
        setProjects(response.items);
        setLoading(false);
      })
      .catch((error) => console.log("error", error));
    //eslint-disable-next-line
  }, []);

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
                  <SingleProject project={project} key={project.sys.id} />
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

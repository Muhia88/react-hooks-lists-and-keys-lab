import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{
        projects.map(proj => <ProjectItem key={proj.id} name={proj.name} technologies={proj.technologies}></ProjectItem>)
        }</div>
    </div>
  );
}

export default ProjectList;

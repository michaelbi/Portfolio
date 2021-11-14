import React from "react";
import Project from "./Project";
import "./projects.css";
import { projects } from "../../data/ProjectsData/Projects_Info";

const Projects = () => {
  return (
    <div className="projects_container">
      <h3>My Projects</h3>
      <div className="projects">
        {projects.map((project, index) => {
          return <Project project={project} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Projects;

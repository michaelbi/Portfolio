import React from "react";
import Project from "./Project";
import Container from "../Container/Container";
import PSvg from "../../svg/projects.svg";
import "./projects.css";
import { projects } from "../../data/ProjectsData/Projects_Info";

const Projects = () => {
  return (
    <Container divId="projects">
      <div className="projects_container">
        <h3>My Projects</h3>
        <div className="projects">
          {projects.map((project, index) => {
            return <Project project={project} key={index} />;
          })}
        </div>
      </div>
      <img src={PSvg} alt="" className="psvg" />
    </Container>
  );
};

export default Projects;

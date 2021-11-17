import React from "react";
import "./project.css";

const Project = ({ project: { title, url, description, img } }) => {
  return (
    <div className="project_container">
      <img src={img} className="p_img" alt="" />

      <a
        className="p_link"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3>{title}</h3>
        {description}
      </a>
    </div>
  );
};

export default Project;

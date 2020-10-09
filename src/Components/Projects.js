import React from "react";
import '../Styles/projects.css';
import ProjectCard from "./projectCard";
const Projects = () => {
  return (
    <a id="projects">
      <div className="projects__wrapper">
        <ProjectCard 
          title="Adventurer's Market Place"
          description="Come sell you wares"
          body="I'm a fan of Dungeons and Dragons "
        />
      </div>
    </a>
  );
};

export default Projects;

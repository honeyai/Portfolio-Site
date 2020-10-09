import React from "react";
import '../Styles/projects.css';
import ProjectCard from "./projectCard";
import Marketplace from '../Assets/Images/adventuermarketplace.gif';

const Projects = () => {
  return (
    <a id="projects">
      <div className="projects__wrapper">
        <a target="_blank" rel="noopener" href="http://adventurer-s-marketplace.surge.sh/">
          <ProjectCard 
            image={backgroundImage=`url(${Marketplace})`}
            title="Adventurer's Market Place"
            description="Come sell you wares"
            body="I'm a fan of Dungeons and Dragons, this is one of many D&D related projects. With a springboot backend and a react frontend, the &quot;marketplace&quot; has a page for sellers where one can fill out the their ware's information and another for buyers that can see the wares one is selling. Create, read, and delete functionalities, but no update just yet. Future plans include a shopping cart, update, and login functionalities."
          />
        </a>
      </div>
    </a>
  );
};

export default Projects;

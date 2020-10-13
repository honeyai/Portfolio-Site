import React from "react";
import '../Styles/projects.css';
import ProjectCard from "./ProjectCard";
import Marketplace from '../Assets/Images/adventuermarketplace.gif';
import Wordsmith from '../Assets/Images/wordsmith.gif';
import Quiz from '../Assets/Images/dndquiz.gif';

const Projects = () => {
  return (
    <a id="projects">
      <div className="projects__wrapper">
        <a target="_blank" rel="noopener" href="http://adventurer-s-marketplace.surge.sh/">
          <ProjectCard 
            image={Marketplace}
            title="Adventurer's Market Place"
            description="Come sell your wares"
            body="I'm a fan of Dungeons and Dragons, this is one of many D&D related projects. With a springboot backend and a react frontend, the &quot;marketplace&quot; has a page for sellers where one can fill out the their ware's information and another for buyers that can see the wares one is selling. Create, read, and delete functionalities, but no update just yet. Future plans include a shopping cart, update, and login functionalities."
          />
        </a>
        <a target="_blank" rel="noopener" href="https://honeyai.github.io/WordSmith/">
          <ProjectCard 
            image={Wordsmith}
            title="Wordsmith"
            description="2 player word game"
            body="One of the first projects I made. It's sweet and it was fun to program."
          />
        </a>
        <a target="_blank" rel="noopener" href="http://character-quiz.surge.sh/">
          <ProjectCard 
            image={Quiz}
            title="Dungeon and Dragons Character Quiz"
            description="The fun of creating a character, but less hassle"
            body="I love dungeons and dragons, I want everyone to get into it, but I know that the entry to the game is the seemingly complicated character creation. Using a dungeon and dragons, core fifth edition api the quiz presents a race to play as at the end of the quiz!"
          />
        </a>
      </div>
    </a>
  );
};

export default Projects;

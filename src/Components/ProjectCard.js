import React from 'react';
import { Card, Typography } from '@material-ui/core';
import '../Styles/projectCard.css';
const ProjectCard = ({title, description, body, image}) => {
  return (
    <Card id="projectCard__wrapper">
      {/* <div className="projectCard__image" style={ {backgroundImage:`url(${image})`} }></div> */}
      <img src={image} className="projectCard__image"/>
      <div className="projectCard__text"> 
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          {description}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {body}
        </Typography>
      </div>
    </Card>
  );
};

export default ProjectCard;
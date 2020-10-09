import React from 'react';
import Typography from '@material-ui/core';
const ProjectCard = ({title, description, body}) => {
  return (
    <div className="projectCard__wrapper">
      <div className="projectCard__image"></div>
      <div className="projectCard__text"> 
        <Typography variant="h2" gutterBottom>
          {title}
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          {description}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {body}
        </Typography>
      </div>
    </div>
  );
};

export default ProjectCard;
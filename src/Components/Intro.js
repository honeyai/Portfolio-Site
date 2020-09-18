import React from "react";
import "../Styles/intro.css";
import myPic from "../Assets/Images/myPic.jpg"; // Tell webpack this JS file uses this image

const Intro = () => {
  console.log(myPic);
  return (
    <div className="intro__wrapper">
      <div className="intro__image">
        <img alt="Jessica" src={myPic} />
      </div>
      <p className="intro__text">
        <span className="intro__span">
          Hey there!
          <span role="img" aria-label="Waving hand emoji">
            👋
          </span>
        </span>
        <span className="intro__body">
          My name is Jessica Sanchez. 
        </span>
        <span className="intro__body">
          I'm a full stack developer, an artist, and
          a polyglot.
        </span>  
      </p>
      
    </div>
  );
};

export default Intro;

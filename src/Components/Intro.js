import React from "react";
import "../Styles/intro.css";
import myPic from "../Assets/Images/myPic.jpg"; // Tell webpack this JS file uses this image

const Intro = () => {
  return (
    <div className="intro__wrapper">
      <span id="pls">
        <div className="intro__image">
          <img alt="Jessica" src={myPic} />
        </div>
        <p className="intro__text intro__body">
          <span className="intro__span">
            Hey there!
            <span role="img" aria-label="Waving hand emoji">
              👋
            </span>
          </span>
          <br></br>
          <span className="intro__body">
            My name is Jessica Sanchez. 
          </span>
          <br></br>
          <span className="intro__body"> 
            I'm a full stack developer, an artist, and
            a polyglot.

          </span>  
        </p>
      </span>
      
    </div>
  );
};

export default Intro;

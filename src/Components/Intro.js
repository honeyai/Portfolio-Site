import React from 'react';
import '../Styles/intro.css';
import myPic from '../Assets/Images/myPic.jpg'; // Tell webpack this JS file uses this image

const Intro = () => {
  console.log(myPic);
  return (
    <div className="intro__wrapper">
      <p className="intro__text">
        Hey there! <span role="img" aria-label="Waving hand emoji"> 👋 </span> <br/>
        My name is Jessica Sanchez. 
        <br/>
        I'm a full stack developer, an artist, and a polyglot.
      </p>
      <div className="intro__image">
        <img alt="Jessica" src={myPic} />
      </div>
    </div>
  );
};

export default Intro;
import React, { useState } from "react";
import "../Styles/intro.css";
import myPic from "../Assets/Images/myPic.jpg"; // Tell webpack this JS file uses this image
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const Intro = ({ ref, func }) => {
  //i want my animation to trigger th second that intro__wrapper is right at the top of the screen

  const [startAnimation, setAnimate] = useState(false);

  useScrollPosition(({ prevPos, currPos }) => {
    console.log(currPos.x);
    console.log(currPos.y);

    if (currPos.y <= -400) {
      console.log("this is when the emoji should animate");
      setAnimate(true);
    }
  });

  return (
    <div className="intro__wrapper">
      <span id="pls">
        <div className="intro__image">
          <img alt="Jessica" src={myPic} />
        </div>
        <p className="intro__text intro__body">
          <span className="intro__span">
            Hey there!
            <div className={startAnimation ? "intro__emojiAnimate" : null}>
              <span role="img" aria-label="Waving hand emoji">
                👋
              </span>
            </div>
          </span>
          <span className="intro__body">My name is Jessica Sanchez.</span>
          <br></br>
          <span className="intro__body">
            {" "}
            I'm a <a onClick={func}> full stack developer </a>,
            <a
              href="https://www.instagram.com/owlturdeth/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              artist
            </a>
            , and a <a> polyglot </a>.
          </span>
        </p>
      </span>
    </div>
  );
};

export default Intro;

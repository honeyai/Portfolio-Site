import React, { useEffect } from "react";
import "../Styles/intro.css";
import myPic from "../Assets/Images/myPic.jpg"; // Tell webpack this JS file uses this image

const Intro = () => {
  //!from: https://dev.to/n8tb1t/tracking-scroll-position-with-react-hooks-3bbj

  //serverside rendering + unnecessary bugs => check if dom is ready and context exists

  const browserReady = typeof window !== "undefined";

  const getScrollPos = ({ element, useWindow }) => {
    if (!browserReady) return { x: 0, y: 0 };

    const target = element ? element.current : document.body;
    const position = target.getBoundingClientRect(); // The getBoundingClientRect() is a powerful method to get the size and the position of an element's bounding box, relative to the viewport.

    return useWindow
      ? { x: window.scrollX, y: window.scrollY }
      : { x: position.left, y: position.top };
  };

  //i want my animation to trigger th second that intro__wrapper is right at the top of the screen

  //if i can do the equivalence of
  //let scrollTop = window.scrollY
  //let introWrapper = document.querySelector('intro__wrapper')

  //target === srcElement (latter is for compatibility)

  //event.target.introWrapper.scrollTop >= a number i have to find that number.

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
          <span className="intro__body">My name is Jessica Sanchez.</span>
          <br></br>
          <span className="intro__body">
            I'm a full stack developer, an artist, and a polyglot.
          </span>
        </p>
      </span>
    </div>
  );
};

export default Intro;

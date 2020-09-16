import React, { useState, useEffect } from "react";
import "../Styles/animations.css";
import "../Styles/colorCascade.css";
import Hero from "./Hero";

const ColorCascade = () => {
  const [isOnScreen, setIsOnScreen] = useState(true);

  const offScreen = () => {
    setTimeout(() => {
      setIsOnScreen(false);
    }, 1500);
  };

  useEffect(() => {
    offScreen();
  }, []);

  return (
    <div className="color__CascadeWrapper">
      <div className={isOnScreen? "colorBox animation__topDiv" : "hidden"}></div>
      <div className={isOnScreen? "colorBox animation__midDiv" : "hidden"}></div>
      <div className={isOnScreen? "colorBox animation__bottomDiv" : "hidden"}></div>
      <Hero />
    </div>
  );
};

export default ColorCascade;

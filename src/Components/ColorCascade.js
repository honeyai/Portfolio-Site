import React, { useState, useEffect } from "react";
import "../Styles/animations.css";
import "../Styles/colorCascade.css";

const ColorCascade = () => {
  const [isOffScreen, setIsOffScreen] = useState({
    isOnScreen: true,
  });

  const detectOffScreen = () => {
    const colorBoxes = document.getElementsByClassName("colorBox");
    console.log(colorBoxes);
  }

  useEffect(() => {
    setTimeout(detectOffScreen(), 3000);
  }, []);

  return (
    <div className="color__CascadeWrapper">
      <div className="colorBox animation__topDiv"></div>
      <div className="colorBox animation__midDiv"></div>
      <div className="colorBox animation__bottomDiv"></div>
    </div>
  );
};

export default ColorCascade;

import React from 'react';
import './App.css';
import ColorCascade from './Components/ColorCascade';
import Intro from './Components/Intro';
import Projects from './Components/Projects';


function App() {


  return (
    <div className="App">
      <ColorCascade />
      <div className="App__parallaxWindow"></div>
      <Intro />
      <Projects />
    </div>
  );
}

export default App;

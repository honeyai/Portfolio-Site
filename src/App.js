import React from 'react';
import './App.css';
import ColorCascade from './Components/ColorCascade';
import Intro from './Components/Intro';

function App() {
  return (
    <div className="App">
      <ColorCascade />
      <div className="App__parallaxWindow"></div>
      <Intro />
    </div>
  );
}

export default App;

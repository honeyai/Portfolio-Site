import React, { useRef } from 'react';
import './App.css';
import ColorCascade from './Components/ColorCascade';
import Intro from './Components/Intro';
import Projects from './Components/Projects';
import { scrollTo } from './scrollTo';
function App() {

  const testRef = useRef("projects");
  const doTheScroll = () => scrollTo(testRef);

  return (
    <div className="App">
      <ColorCascade />
      <div className="App__parallaxWindow"></div>
      <Intro func={doTheScroll}/>
      {React.createElement(Projects, {ref: testRef })}
    </div>
  );
}

export default App;

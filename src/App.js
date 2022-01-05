import logo from './logo.svg';

import { useState } from 'react';
import { ColorContext } from './components/colorContext';
import SchemeNav from './components/SchemeNav';

import './App.css';
import Triad from './components/Triad';
import Quad from './components/Quad';
import Analogic from './components/Analogic';
import Home from './components/Home';
import ColorNav from './components/ColorNav';
import Mono from './components/Mono';
import Complementary from './components/Complementary';


function App() {

  const [color, setColor] = useState(null)
  const [scheme, setScheme] = useState(null)

  return (
    <div className="App">
      <ColorContext.Provider value={{color, setColor, scheme, setScheme}}>
        <ColorNav />
        <SchemeNav />
        <Home />
        <Analogic />
        <Triad />
        <Quad />
        <Mono />
        <Complementary />
      </ColorContext.Provider>
    </div>
  );
}

export default App;

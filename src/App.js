import { useState } from 'react';
import { ColorContext } from './Components/colorContext';
import { Routes, Route, Link } from 'react-router-dom';

import './App.css';
import SchemeNav from './Components/SchemeNav';
import Triad from './Components/Triad';
import Quad from './Components/Quad';
import Analogic from './Components/Analogic';
import Home from './Components/Home';
import ColorNav from './Components/ColorNav';
import Mono from './Components/Mono';
import Complementary from './Components/Complementary';


function App() {

  const [color, setColor] = useState('000000');

  return (
		<div className='App'>
			<ColorContext.Provider value={{ color, setColor}}>
				<SchemeNav />
				<ColorNav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/monochromatic' element={<Mono />} />
          <Route path='/quad' element={<Quad />} />
          <Route path='/triad' element={<Triad />} />
          <Route path='/complementary' element={<Complementary />} />
          <Route path='/analogic' element={<Analogic />} />
        </Routes>
			</ColorContext.Provider>
		</div>
	);
}

export default App;

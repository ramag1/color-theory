import logo from './logo.svg';

import { useState } from 'react';
import { ColorContext } from './components/colorContext';
import { Routes, Route, Link } from 'react-router-dom';

import './App.css';
import SchemeNav from './components/SchemeNav';
import Triad from './components/Triad';
import Quad from './components/Quad';
import Analogic from './components/Analogic';
import Home from './components/Home';
import ColorNav from './components/ColorNav';
import Mono from './components/Mono';
import Complementary from './components/Complementary';


function App() {

  const [color, setColor] = useState("28b89b");
  const [scheme, setScheme] = useState([]);

  return (
		<div className='App'>
			<ColorContext.Provider value={{ color, setColor, scheme, setScheme }}>
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

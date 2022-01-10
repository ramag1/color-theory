import { useState } from 'react';
import { ColorContext } from './colorContext';
import { Routes, Route} from 'react-router-dom';

import './App.css';
import Analogic from './components/Analogic';
import ColorNav from './components/ColorNav';
import Complementary from './components/Complementary';
import Home from './components/Home';
import Mono from './components/Mono';
import Quad from './components/Quad';
import SchemeNav from './components/SchemeNav';
import Triad from './components/Triad';


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

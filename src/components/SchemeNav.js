import React from 'react';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { ColorContext } from './colorContext';

function SchemeNav(props) {
     const { scheme, setScheme } = useContext(ColorContext);

    function setState(event) {
        setScheme(event.target.id)
        console.log(scheme)

    }

    return (
			<div className='schemeNav__div'>
				<h1 className='schemeNav__h1'>Color Theory</h1>
				<ul className='schemeNav__ul'>
					<Link to={'/home'} id='home' onClick={setState}>
						<li id='home'>Home</li>
					</Link>
					<Link to={'/monochromatic'}>
						<li id='monochrome'>Monochromatic</li>
					</Link>
					<Link to={'/analogic'}>
						<li id='analogic'>Analogic</li>
					</Link>
					<Link to={'/complementary'}>
						<li id='complement'>Complementary</li>
					</Link>
					<Link to={'/triad'}>
						<li id='complement'>Triad</li>
					</Link>
					<Link to={'/quad'}>
						<li id='quad'>Quad</li>
					</Link>
				</ul>
			</div>
		);
}

export default SchemeNav;
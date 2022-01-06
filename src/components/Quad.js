import React from 'react';
import { useEffect, useState, useContext } from 'react';
import { ColorContext } from './colorContext';

function Quad(props) {
	const { color } = useContext(ColorContext);
	const [results, setResults] = useState(null);

	const url = `https://www.thecolorapi.com/scheme?hex=${color}&format=json&mode=quad&count=4`;

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((json) => {
				setResults(json);
				console.log(json);
			})
			.catch(console.error);
	}, [color]);

	if (!results) {
		return null;
	}

	return (
		<div key={results.hex} className='scheme__div'>
			<div className='scheme__details'>
				<h2 className='scheme__h2'>About Quadratic Colors </h2>
				<p>
					Triadic schemes are made up of hues equally spaced around color wheel
					creating 90 degree or right angles.
					<h3>When to use:</h3>
					To be most effective it is best to let one of the 4 colors dominate.
					Works well with ‘flashy’ subjects and wanting to call attention in a
					dramatic manner.
				</p>
			</div>

			<div className='scheme__colorBlocksDiv'>
				{results.colors.map((color) => {
					return (
						<div
							className='scheme__colorBlocks'
							style={{ backgroundColor: `${color.hex.value}` }}>
							{color.hex.value} <br /> {color.name.value}
						</div>
					);
				})}
			</div>
		</div>
	);
}
export default Quad;
import React from 'react';
import { useEffect, useState, useContext } from 'react';
import { ColorContext } from './colorContext';

function Mono(props) {
	const { color } = useContext(ColorContext);
	const [results, setResults] = useState(null);

	const url = `https://www.thecolorapi.com/scheme?hex=${color}&format=json&mode=monochrome&count=3`;

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((json) => {
				setResults(json);
				console.log(json);
			})
			.catch(console.error);
	}, []);

	if (!results) {
		return null;
	}

	return (
		<div key={results.hex} className='scheme__div'>
			<div className='scheme__details'>
				<h2 className='scheme__h2'>About Monochromatic Colors </h2>
				<p>
					Monochromatic color schemes are easy to create because they use only
					one color. Monochromatic schemes use different tones from the same
					angle on the color wheel (the same hue).
				</p>
			</div>

			<div className='scheme__colorBlocks'>
				{results.colors.map((color) => {
					return (
						<div style={{ backgroundColor: `${color.hex.value}` }}>
							{color.hex.value}
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Mono;
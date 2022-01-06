import React from 'react';
import { useEffect, useState, useContext } from 'react';
import { ColorContext } from './colorContext';

function Triad(props) {
	const { color } = useContext(ColorContext);
	const [results, setResults] = useState(null);

	const url = `https://www.thecolorapi.com/scheme?hex=${color}&format=json&mode=triad&count=3`;

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
				<h2 className='scheme__h2'>About Triadic Colors </h2>
				<p>
					Triadic schemes are made up of hues equally spaced around color wheel.
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


export default Triad;
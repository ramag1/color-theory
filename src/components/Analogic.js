import React from 'react';
import { useEffect, useState, useContext } from 'react';
import { ColorContext } from './colorContext';

function Analogic(props) {
	const { color } = useContext(ColorContext);
	const [results, setResults] = useState(null);

	const url = `https://www.thecolorapi.com/scheme?hex=${color}&format=json&mode=analogic&count=4`;

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
				<h2 className='scheme__h2'>About Analogous Colors </h2>
				<p>
					Analogous color schemes are also easy to create. Analogous color
					schemes are created by using colors that are next to each other on the
					color wheel. 
                    <h3> When to use:</h3> 
                    Use when seeking a calm and unified look that won't distract from
					the primary message. 
				</p>
			</div>

			<div key={results.hex} className='scheme__colorBlocksDiv'>
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


export default Analogic;
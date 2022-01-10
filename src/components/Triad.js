import React from 'react';
import { useEffect, useState, useContext } from 'react';
import { ColorContext } from '../colorContext';

function Triad(props) {
	const { color, setColor } = useContext(ColorContext);
	const [results, setResults] = useState(null);

	const url = `https://www.thecolorapi.com/scheme?hex=${color}&format=json&mode=triad&count=3`;

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((json) => {
				setResults(json);
			})
			.catch(console.error);
	}, [color]);

	if (!results) {
		return null;
	}

	return (
		<div className='scheme__div'>
			<div className='scheme__details'>
				<h2 className='scheme__h2'>About Triadic Colors </h2>
				Triadic schemes are made up of hues equally spaced around color wheel.
				<h3>When to Use:</h3>
				By combining colors using the triadic principle we get lively and
				cheerful space which is the most suitable for playful or colorful user
				interfaces. Beware of this scheme featuring warm colors as it is very
				intense and can cause the feeling of discomfort in the UI if you color
				the equal amount of space with each color.
			</div>

			<div  className='scheme__colorBlocksDiv'>
				{results.colors.map((color) => {
					return (
						<div
							key={color.hex.value}
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


export default Triad;
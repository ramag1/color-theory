import { useEffect, useState, useContext } from 'react';
import { ColorContext } from '../colorContext';

function Mono(props) {
	const { color } = useContext(ColorContext);
	const [results, setResults] = useState(null);

	const url = `https://www.thecolorapi.com/scheme?hex=${color}&format=json&mode=monochrome&count=4`;

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
				<h2 className='scheme__h2'>About Monochromatic Colors </h2>
					Monochromatic color schemes are easy to create because they use only one color. This scheme uses different tones from the same angle on the color wheel (the same hue).
					<h3>When to use:</h3>
					Use when seeking a harmonious, visually cohesive look. This scheme doesn’t draw attention to itself, instead it lets the content "shine".
			</div>

			<div className='scheme__colorBlocksDiv'>
				{results.colors.map((color) => {
					return (
						<div key={color.hex.value}
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

export default Mono;
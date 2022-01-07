import React from 'react';
import { useEffect, useState , useContext} from 'react';
import { ColorContext } from './colorContext';


function Complementary(props) {
	const { color } = useContext(ColorContext);
	const [results, setResults] = useState(null);

	const url = `https://www.thecolorapi.com/scheme?hex=${color}&format=json&mode=complement&count=4`;

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((json) => {
				setResults(json);
			})
	}, [color]);

	if (!results) {
		return null;
	}

	return (
		<div className='scheme__div'>
			<div className='scheme__details'>
				<h2 className='scheme__h2'>About Complementary Colors </h2>
					Complementary colors are shades that are located directly across from
					each other on the wheel. These colors are complementary because they
					are said to work well together. Creates a high-contrast and vibrant
					look.
					<h3>When to use:</h3>
					This color scheme is useful when you need to emphasize something as it
					focuses the attention towards a particular object. Often, a design
					with a complementary combination of colors looks more traditional.
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

export default Complementary;
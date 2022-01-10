import React, { useContext , useState} from 'react';
import { ColorContext } from '../colorContext';


function ColorNav(props) {

    const {color, setColor} = useContext(ColorContext);

    function handleClick(event) {
        const tempColor = event.target.value;
        let tempColorArr = [...tempColor.split("")]
        let tempColorArr2 = tempColorArr.splice(0, 1) ;
        setColor(tempColorArr.join(''))
    }

    return (
			<div className="colorNav__div">
				<h2 className="colorNav__h2">Select your color</h2>
				<label>
					Click Below:{' '} <br/>
					<input className="colorNav__input"
						type='color'
						onChange={handleClick}
					/>
				</label>
				<p style={{ color: `#${color}`}}>Color Selected: {color}</p>
			</div>
		);
}
export default ColorNav;

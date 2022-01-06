import React, { useContext , useState} from 'react';
import { ColorContext } from './colorContext';


function ColorNav(props) {

    const {color, setColor} = useContext(ColorContext);
    console.log(color);
    // const [tempColor, setTempColor] = useState('#0047AB');
    // console.log(tempColor)

    function handleClick(event) {
        const tempColor = event.target.value;
        let tempColorArr = [...tempColor.split("")]
        // console.log(tempColorArr)
        let tempColorArr2 = tempColorArr.splice(0, 1) ;
        // console.log(tempColorArr2)
        // console.log(tempColorArr)
        // console.log(tempColorArr.join(''));
        // tempColor = (tempColorArr.join(''))
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

// function ColorNav(props) {

//     const {color, setColor} = useContext(ColorContext);
//     console.log(color);


//     return (
//         <div>

//             <h2>Select your color!</h2>

//             <p style={{ color: color }}>
//                Color Selected: {color}
//             </p>
//             <label>
//                 Click Here to Select Color:{" "}
//                 <input
//                 type="color"
//                 onChange={(event) =>
//                     setColor(event.target.value)  
//                 }
//                 />
//             </label>

//         </div>
//     );
// }

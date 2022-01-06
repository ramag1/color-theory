import React, { useContext , useState} from 'react';
import { ColorContext } from './colorContext';


function ColorNav(props) {

    const {color, setColor} = useContext(ColorContext);
    console.log(color);
    let [tempColor, setTempColor] = useState('#0047AB');
    // console.log(tempColor)

    let tempColorArr = [...tempColor.split("")]
    // console.log(tempColorArr)
    let tempColorArr2 = tempColorArr.splice(0, 1) ;
    // console.log(tempColorArr2)
    // console.log(tempColorArr)
    // console.log(tempColorArr.join(''));
    tempColor = (tempColorArr.join(''))
    setColor(tempColor)


    return (
			<div className="colorNav__div">
				<h2 className="colorNav__h2">Select your color!</h2>

				<p style={{ color: color }}>Color Selected: {color}</p>
				<label>
					Click Here to Select Color:{' '}
					<input
						type='color'
						onChange={(event) => setTempColor(event.target.value)}
					/>
				</label>
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

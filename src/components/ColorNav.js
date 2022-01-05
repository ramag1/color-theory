import React, { useContext } from 'react';
import { ColorContext } from './colorContext';


function ColorNav(props) {

    const {color, setColor} = useContext(ColorContext);

    return (
        <div>

            <h2>Select your color!</h2>

            <p style={{ color: color }}>
               Color Selected: {color}
            </p>
            <label>
                Click Here to Select Color:{" "}
                <input
                type="color"
                onChange={(event) =>
                    setColor(event.target.value)  
                }
                />
            </label>

        </div>
    );
}

export default ColorNav;
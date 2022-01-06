import React from 'react';
import { useEffect, useState , useContext} from 'react';
import { ColorContext } from './colorContext';

function Complementary(props) {
    
    const {color} = useContext(ColorContext);
    const [results, setResults] = useState([]);
    
    const url = `https://www.thecolorapi.com/scheme?hex=${color}&format=json&mode=complement&count=6`;
    
    useEffect(() =>{
        fetch(url)
        .then((res) => res.json())
        .then((json) => {
            console.log(json)
            setResults(json);
        })
        .catch(console.error);
        
    }, [])
    
    
    return (
			<div className='complementary__div'>
				{/* Object.entries(results).forEach(([colors, hex]) => console.log(`${colors}: $
				{hex}`)) */}
			</div>
		);
}

export default Complementary;
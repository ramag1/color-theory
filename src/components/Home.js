import React from 'react';
import { useState, useEffect } from 'react';

function Home(props) {
    const [schemeResults, setSchemeResults] = useState ([]);
    const url = `https://www.thecolorapi.com/scheme?hex=0047AB&rgb=0,71,171&hsl=215,100%,34%&cmyk=100,58,0,33&format=json&mode=analogic&count=6`;

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((json) => {
                setSchemeResults(json)
                console.log(schemeResults)
            })
            .catch(console.error);
    }, []);
    
    if (!schemeResults) {
        return null;
    }

    return (
        <>
            {/* <p>{schemeResults.mode}</p>
            {schemeResults.map(color => {
                return (
                    <div style={{backgroundColor: color.colors.hex}}>hex value</div>
                )
            })} */}
        </>
    );
}

export default Home;
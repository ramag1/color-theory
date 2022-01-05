import React from 'react';
import { Link } from 'react-router-dom';

function SchemeNav(props) {
    return (
        <div className="schemeNav__div">
            <h1 className="schemeNav__h1">Color Theory</h1>
            <ul className="schemeNav__ul">
                <Link to={'/home'}><li>Home</li></Link>
                <Link to={'/monochromatic'}><li>Monochromatic</li></Link>
                <Link to={'/analogic'}><li>Analogic</li></Link>
                <Link to={'/complementary'}><li>Complementary</li></Link>
                <Link to={'/triad'}><li>Triad</li></Link>
                <Link to={'/quad'}><li>Quad</li></Link>
            </ul>
        </div>
	);
}

export default SchemeNav;
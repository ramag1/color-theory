import { Link } from 'react-router-dom';
import { useContext} from 'react';
import { ColorContext } from '../colorContext';

function SchemeNav(props) {
     const { scheme, setScheme } = useContext(ColorContext);

    function setState(event) {
        setScheme(event.target.id)
        console.log(scheme)

    }

    return (
			<div className='schemeNav__div'>
				<h1 className='schemeNav__h1'>Color Theory</h1>
				<ul className='schemeNav__ul'>
					<Link to={'/home'} id='home' onClick={setState}>
						<li id='home'>Home</li>
					</Link>
					<Link to={'/monochromatic'}>
						<li id='monochrome'>Monochromatic</li>
					</Link>
					<Link to={'/analogic'}>
						<li id='analogic'>Analogous</li>
					</Link>
					<Link to={'/complementary'}>
						<li id='complement'>Complementary</li>
					</Link>
					<Link to={'/triad'}>
						<li id='complement'>Triadic</li>
					</Link>
					<Link to={'/quad'}>
						<li id='quad'>Quadratic</li>
					</Link>
				</ul>
			</div>
		);
}

export default SchemeNav;
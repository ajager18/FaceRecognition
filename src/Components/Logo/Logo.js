import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
	return (
		<div className='ma4 mt0'>
		<Tilt className="Tilt ma3 " options={{ max : 35 }} style={{ height: 150, width: 150 }} >
 		<div className="Tilt-inner br2 shadow-2"><img alt='' style = {{paddingTop:'5px'}} src={brain}/></div>
		</Tilt>
		</div>
	)
}

export default Logo;
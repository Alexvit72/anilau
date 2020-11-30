import React from 'react';
import './Partners.css';
import logo1 from '../images/logos/logo1.png';
import logo2 from '../images/logos/logo2.png';
import logo3 from '../images/logos/logo3.png';
import logo4 from '../images/logos/logo4.png';
import logo5 from '../images/logos/logo5.png';
const logos = [];
logos.push(logo1, logo2, logo3, logo4, logo5);

function Partners(props) {
	const list = logos.map( (logo, index) => {
		return <img key={index} src={logo} alt={'logo' + (index + 1)} />;
	});
	return <div className={props.className}>
		{list}
	</div>;
}

export default Partners;

import React from 'react';

function Partners(props) {
	const logos = props.logoSrces.map( (logoSrc, index) => {
		return <img key={index} src={logoSrc} alt='logo' />;
	});
	return <div className={props.className}>
		{logos}
	</div>;
}

export default Partners;

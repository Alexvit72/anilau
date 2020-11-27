import React from 'react';

function ContLink(props) {
	return <a className={props.className} href={props.contact.href}>
		<img src={props.contact.imgSrc} alt={props.contact.type} />
	</a>;
}

export default ContLink;

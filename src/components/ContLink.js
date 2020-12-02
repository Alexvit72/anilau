import React from 'react';
import './ContLink.css';

function ContLink(props) {
	return <a className={props.className + ' ' + props.contact.slice(0, 1)} 			href={'#' + props.contact}></a>;
}

export default ContLink;

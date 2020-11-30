import React from 'react';
import './Anchor.css';

function Anchor(props) {
	return <a href={props.href} className={props.className}>
		{props.text}
	</a>;
}

export default Anchor;

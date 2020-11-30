import React from 'react';
import './Headline.css';

function Headline(props) {
	return <h2 className={props.className}>
		{props.text}<span>{props.punctuation}</span>
	</h2>;
}

export default Headline;

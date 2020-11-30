import React from 'react';
import './Poster.css';

function Poster(props) {
	return <div className={props.className}>
		<img src={props.imgSrc} alt={props.alt} />
		<p>{props.caption}</p>
	</div>;
}

export default Poster;

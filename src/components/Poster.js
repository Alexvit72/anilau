import React from 'react';

function Poster(props) {
	return <div className={props.className}>
		<img src={props.imgSrc} alt={props.alt} />
		{props.caption}
	</div>;
}

export default Poster;

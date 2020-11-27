import React from 'react';
import Headline from './Headline';

function Logo(props) {
	return <div className={props.className}>
		<Headline className='Headline' text='Anilau' punctuation='.' />
		<span>freelance group</span>
	</div>;
}

export default Logo;

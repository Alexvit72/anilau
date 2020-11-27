import React from 'react';
import Anchor from './Anchor';

function Nav(props) {
	return <nav className={props.className}>
		<Anchor className='Anchor' text='Services' href='' />
		<Anchor className='Anchor' text='Portfolio' href='' />
		<Anchor className='Anchor' text='Team' href='' />
		<Anchor className='Anchor' text='Contact' href='' />
	</nav>;
}

export default Nav;

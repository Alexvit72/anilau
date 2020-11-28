import React from 'react';
import Anchor from './Anchor';

function Nav(props) {
	return <nav className={props.className}>
		<Anchor className='Anchor' text='Services' href='#Services' />
		<Anchor className='Anchor' text='Portfolio' href='#Portfolio' />
		<Anchor className='Anchor' text='Team' href='#Team' />
		<Anchor className='Anchor' text='Contact' href='#Contact' />
	</nav>;
}

export default Nav;

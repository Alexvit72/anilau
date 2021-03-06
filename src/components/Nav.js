import React from 'react';
import Anchor from './Anchor';
import './Nav.css';

function Nav(props) {
	return <nav className={props.className} onClick={props.onClick}>
		<Anchor className='Anchor' text='Services' href='#Services' />
		<Anchor className='Anchor' text='Portfolio' href='#Portfolio' />
		<Anchor className='Anchor' text='Team' href='#Team' />
		<Anchor className='Anchor' text='Contact' href='#Contact' />
	</nav>;
}

export default Nav;

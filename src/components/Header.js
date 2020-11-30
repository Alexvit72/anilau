import React from 'react';
import Logo from './Logo';
import Nav from './Nav';
import './Header.css';

function Header(props) {
	return <header className={props.className}>
    <Logo className='Logo' />
    <Nav className='Nav' />
  </header>;
}

export default Header;

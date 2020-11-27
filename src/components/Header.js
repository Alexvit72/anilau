import React from 'react';
import Logo from './Logo';
import Nav from './Nav';

function Header(props) {
	return <header className={props.className}>
    <Logo className='Logo' />
    <Nav className='Nav' />
  </header>;
}

export default Header;

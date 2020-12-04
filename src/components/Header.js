import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import Nav from './Nav';
import './Header.css';

function Header(props) {

	const [isOpen, setIsOpen] = useState(false);

	useEffect( () => {
		window.addEventListener('resize', function() {
			let menuButton = document.querySelector('.menu');
			if (getComputedStyle(menuButton).display === 'none') {
				setIsOpen(false);
			}
		});
	});

	function handleClick() {
		setIsOpen(!isOpen);
	}

	return <header className={props.className} >
    <a href='#Presentation'><Logo className='Logo' /></a>
		<button className='menu' onClick={handleClick}>menu</button>
    <Nav
			className={isOpen ? 'Nav mobile' : 'Nav'}
			onClick={() => setIsOpen(false)}
		/>
  </header>;
}

export default Header;

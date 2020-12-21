import React from 'react';
import Header from './components/Header';
import Presentation from './components/Presentation';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import workers from './data/workers';
import portfolio from './data/portfolio';
import img1 from './images/img1.png';
import img2 from './images/img2.png';
import './reset-big.css';
import './App.css';

function toStyleHeader() {
	let header = document.querySelector('.Header');
	if (header.getBoundingClientRect().y === -40) {
		header.classList.add('sticked');
	} else {
		header.classList.remove('sticked');
	}
}

window.addEventListener('load', toStyleHeader);

window.addEventListener('scroll', function() {

	toStyleHeader();

	let elem = document.elementFromPoint(100, 200).closest('[id]');
	let anchors = document.querySelectorAll('.Nav .Anchor');
	for (let anchor of anchors) {
		anchor.classList.remove('active');
		if (elem && anchor.getAttribute('href').slice(1) === elem.id) {
			anchor.classList.add('active');
		}
	}

});

function App(props) {

	return <div className='App'>
		<Header id='Header' className='Header' />
		<Presentation id='Presentation' className='Presentation' imgSrc={img1} />
		<Services id='Services' className='Services' />
		<Portfolio id='Portfolio' className='Portfolio' portfolio={portfolio} />
		<Team id='Team' className='Team' workers={workers} />
		<Contact id='Contact' className='Contact' imgSrc={img2} />
		<Footer id='Footer' className='Footer' />
	</div>;

}

export default App;

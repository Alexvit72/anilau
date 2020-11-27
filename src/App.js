import React from 'react';
import Header from './components/Header';
import Presentation from './components/Presentation';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import workers from './components/workers';

function App() {
	return <div className='App'>
		<Header className='Header' />
		<Presentation className='Presentation' />
		<Services className='Services' />
		<Portfolio className='Portfolio' />
		<Team className='Team' workers={workers} />
		<Contact className='Contact' imgSrc='' />
		<Footer className='Footer' />
	</div>;
}

export default App;

import React from 'react';
import Headline from './Headline';
import Poster from './Poster';
import ButtonMain from './ButtonMain';
import Partners from './Partners';
import portfolio1 from '../images/portfolio/portfolio1.png';
import portfolio2 from '../images/portfolio/portfolio2.png';
import portfolio3 from '../images/portfolio/portfolio3.png';
import portfolio4 from '../images/portfolio/portfolio4.png';
import portfolio5 from '../images/portfolio/portfolio5.png';
import portfolio6 from '../images/portfolio/portfolio6.png';
import './Portfolio.css';

function Portfolio(props) {
	return <div id={props.id} className={props.className}>
	  <Headline className='Headline' text='Portfolio' punctuation='.' />
		<div className='box'>
		 	<Poster className='Poster'
				imgSrc={portfolio1}
				caption='Landing page for supermarket Viсtoria'
			/>
			<Poster className='Poster'
				imgSrc={portfolio2}
				caption='Landing page for supermarket Viсtoria'
			/>
			<Poster className='Poster'
				imgSrc={portfolio3}
				caption='Landing page for supermarket Viсtoria'
			/>
			<Poster className='Poster'
				imgSrc={portfolio4}
				caption='Landing page for supermarket Viсtoria'
			/>
			<Poster className='Poster'
				imgSrc={portfolio5}
				caption='Landing page for supermarket Viсtoria'
			/>
			<Poster className='Poster'
				imgSrc={portfolio6}
				caption='Landing page for supermarket Viсtoria'
			/>
		</div>
		<ButtonMain className='ButtonMain' text='More works'/>
		<Partners className='Partners' />
  </div>;
}

export default Portfolio;

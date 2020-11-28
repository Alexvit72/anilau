import React from 'react';
import Headline from './Headline';
import Poster from './Poster';
import ButtonMain from './ButtonMain';
import Partners from './Partners';
import portfolio1 from '../images/portfolio/portfolio1.png'
import portfolio2 from '../images/portfolio/portfolio2.png'
import portfolio3 from '../images/portfolio/portfolio3.png'
import portfolio4 from '../images/portfolio/portfolio4.png'
import portfolio5 from '../images/portfolio/portfolio5.png'
import portfolio6 from '../images/portfolio/portfolio6.png'

function Portfolio(props) {
	return <div className={props.className}>
	  <Headline className='Headline' text='Portfolio' punctuation='.' />
		<div>
		 	<Poster className='Poster'
				imgSrc={portfolio1}
				caption='Landing page for supermarket Viсtoria'
			/>
			<Poster className='Poster'
				imgSrc={portfolio2}
				caption=''
			/>
			<Poster className='Poster'
				imgSrc={portfolio3}
				caption=''
			/>
			<Poster className='Poster'
				imgSrc={portfolio4}
				caption=''
			/>
			<Poster className='Poster'
				imgSrc={portfolio5}
				caption=''
			/>
			<Poster className='Poster'
				imgSrc={portfolio6}
				caption=''
			/>
		</div>
		<ButtonMain className='ButtonMain' text='More works'/>
		<Partners className='Partners' />
  </div>;
}

export default Portfolio;

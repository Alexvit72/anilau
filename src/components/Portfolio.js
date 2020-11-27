import React from 'react';
import Headline from './Headline';
import Poster from './Poster';
import ButtonMain from './ButtonMain';
import Partners from './Partners';
import logoSrces from './logoSrces';

function Portfolio(props) {
	return <div className={props.className}>
	  <Headline className='Headline' text='Portfolio' punctuation='.' />
		<div>
		 	<Poster className='Poster' imgSrc='../images/portfolio1.png' 			caption='Landing page for supermarket Viсtoria' />
			<Poster className='Poster' imgSrc='../images/portfolio2.png' caption='' />
			<Poster className='Poster' imgSrc='../images/portfolio3.png' caption='' />
			<Poster className='Poster' imgSrc='../images/portfolio4.png' caption='' />
			<Poster className='Poster' imgSrc='../images/portfolio5.png' caption='' />
			<Poster className='Poster' imgSrc='../images/portfolio6.png' caption='' />
		</div>
		<ButtonMain className='ButtonMain' text='More works'/>
		<Partners className='' logoSrces={logoSrces} />
  </div>;
}

export default Portfolio;

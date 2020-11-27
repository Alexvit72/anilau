import React from 'react';
import Headline from './Headline';
import ButtonMain from './ButtonMain';

function Services(props) {
	return <div className={props.className}>
		<p>We specialize in creating websites of any complexity. Landings, blogs, corporate sites, online stores with individual adaptive design and a unique content management system for each project (we do not use ready-made solutions). We also create browser mini-games, instagram masks and more</p>
		<div>
		  <Headline className='Headline' text='Services' punctuation='.' />
			<Poster className='Poster' imgSrc='../images/service1.png' caption='Graphic and Web Design' />
			<Poster className='Poster' imgSrc='../images/service2.png'
				caption='Website development using Laravel' />
			<Poster className='Poster' imgSrc='../images/service3.png' caption='Team for you project' />
		</div>
  </div>;
}

export default Services;

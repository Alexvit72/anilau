import React from 'react';
import Headline from './Headline';
import Poster from './Poster';
import service1 from '../images/services/service1.png'
import service2 from '../images/services/service2.png'
import service3 from '../images/services/service3.png'

function Services(props) {
	return <div className={props.className}>
		<p>We specialize in creating websites of any complexity. Landings, blogs, corporate sites, online stores with individual adaptive design and a unique content management system for each project (we do not use ready-made solutions). We also create browser mini-games, instagram masks and more</p>
		<div>
		  <Headline className='Headline' text='Services' punctuation='.' />
			<Poster className='Poster'
				imgSrc={service1}
				caption='Graphic and Web Design'
			/>
			<Poster className='Poster'
				imgSrc={service2}
				caption='Website development using Laravel'
			/>
			<Poster className='Poster'
				imgSrc={service3}
				caption='Team for you project'
			/>
		</div>
  </div>;
}

export default Services;

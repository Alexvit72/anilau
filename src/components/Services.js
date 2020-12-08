import React from 'react';
import Headline from './Headline';
import Poster from './Poster';
import service1 from '../images/services/service1.png';
import service2 from '../images/services/service2.png';
import service3 from '../images/services/service3.png';
import './Services.css';

function Services(props) {
	return <div id={props.id} className={props.className}>
		<Headline className='Headline' text='Services' punctuation='.' />
		<p>We specialize in creating websites of any complexity. Landings, blogs, corporate sites, online stores with individual adaptive design and a unique content management system for each project (we do not use ready-made solutions). We also create browser mini-games, instagram masks and more</p>
		<div className='container'>
			<Poster className='Poster'
				imgSrc={service1}
				caption={<p><p>Graphic</p><p>and Web Design</p></p>}
			/>
			<Poster className='Poster'
				imgSrc={service2}
				caption='Website development using Laravel'
			/>
			<Poster className='Poster'
				imgSrc={service3}
				caption='Team for your project'
			/>
		</div>
  </div>;
}

export default Services;

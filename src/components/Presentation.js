import React, { useState } from 'react';
import Headline from './Headline';
import ButtonMain from './ButtonMain';
import './Presentation.css';
import detailsText from '../data/detailsText'

function Presentation(props) {

	const [isOpen, setIsOpen] = useState(false);

	function handleClick() {
		setIsOpen(!isOpen);
	}

	return <div id={props.id} className={props.className}>
		<div>
		  <Headline className='Headline' text='Wellcome' punctuation='!' />
			<p>We are a group of experienced independent web developers and will be happy to bring your ideas to life. Whether it's the design of a simple banner or the creation of a corporate portal or online store</p>
			<p className='hidden'>{isOpen ? detailsText : ''}</p>
    	<ButtonMain className='ButtonMain'
				text={isOpen ? 'Close details' : 'More details'}
				handleClick={handleClick}
			/>
		</div>
		<img src={props.imgSrc} alt='freelancer' />
  </div>;

}

export default Presentation;

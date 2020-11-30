import React, { useState } from 'react';
import Headline from './Headline';
import ButtonMain from './ButtonMain';
import './Presentation.css';

function Presentation(props) {

	const [isOpen, setIsOpen] = useState(false);

	function handleClick() {
		setIsOpen(!isOpen);
	}

	return <div className={props.className}>
		<div>
		  <Headline className='Headline' text='Wellcome' punctuation='!' />
			<p>We are a group of experienced independent web developers and will be happy to bring your ideas to life. Whether it's the design of a simple banner or the creation of a corporate portal or online store</p>
			<p className='hidden'>{ isOpen ? 'More, more, more details text' : ''}</p>
    	<ButtonMain className='ButtonMain'
				text='More details'
				handleClick={handleClick}
			/>
		</div>
		<img src={props.imgSrc} alt='picture' />
  </div>;

}

export default Presentation;

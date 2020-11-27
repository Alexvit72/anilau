import React from 'react';
import Headline from './Headline';
import ButtonMain from './ButtonMain';

function Presentation(props) {
	return <div className={props.className}>
		<div>
		  <Headline className='Headline' text='Wellcome' punctuation='!' />
			<p>We are a group of experienced independent web developers and will be happy to bring your ideas to life. Whether it's the design of a simple banner or the creation of a corporate portal or online store</p>
			<p className='hidden'>More details text</p>
    	<ButtonMain className='ButtonMain' text='More details' />
		</div>
		<div>
			<img src='../images/img1.png' alt='' />
		</div>
  </div>;
}

export default Presentation;

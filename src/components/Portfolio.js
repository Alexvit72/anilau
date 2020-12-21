import React, { useState } from 'react';
import Headline from './Headline';
import BoxOfPosters from './BoxOfPosters';
import ButtonMain from './ButtonMain';
import Partners from './Partners';
import './Portfolio.css';

function Portfolio(props) {

	const [numBlocks, setNumBlocks] = useState(0);

	function handleClick() {
		if (numBlocks === props.portfolio.length - 1) {
			setNumBlocks(0);
		} else {
			setNumBlocks(numBlocks + 1);
		}
	}

	const list = props.portfolio.map( (works, index) => {
		return index <= numBlocks ?
			<BoxOfPosters key={index} className='BoxOfPosters' works={works} /> : null;
	} );

	return <div id={props.id} className={props.className}>
	  <Headline className='Headline' text='Portfolio' punctuation='.' />
		<div className='box'>
		 	{list}
		</div>
		<ButtonMain className='ButtonMain'
			text={numBlocks < props.portfolio.length - 1 ? 'More works' : 'Close'}
			handleClick={handleClick}
		/>
		<Partners className='Partners' />
  </div>;

}

export default Portfolio;

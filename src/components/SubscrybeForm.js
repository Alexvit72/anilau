import React from 'react';
import InputField from './InputField';
import ButtonMain from './ButtonMain';

function SubscrybeForm(props) {
	return <div className={props.className}>
		<Headline className='Headline' text='Say Hello' punctuation='!' />
		<span>and we will write you</span>
		<div>
			<InputField className='InputField' name='name' imgSrc='' />
			<InputField className='InputField' name='email' imgSrc='' />
			<InputField className='InputField' name='phone' imgSrc='' />
		</div>
		<div>
			<ButtonMain className='ButtonMain' text='Send' />
			<label>
				<input type='checkbox' />
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
			</label>
		</div>

	</div>;
}

export default SubscrybeForm;

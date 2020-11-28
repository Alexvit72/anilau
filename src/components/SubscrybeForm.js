import React from 'react';
import InputField from './InputField';
import Headline from './Headline';
import ButtonMain from './ButtonMain';
import user from '../images/formicons/user.png'
import mail from '../images/formicons/mail.png'
import phone from '../images/formicons/phone.png'

function SubscrybeForm(props) {
	return <div className={props.className}>
		<Headline className='Headline' text='Say Hello' punctuation='!' />
		<span>and we will write you</span>
		<div>
			<InputField className='InputField' name='name' imgSrc={user} />
			<InputField className='InputField' name='email' imgSrc={mail} />
			<InputField className='InputField' name='phone' imgSrc={phone} />
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

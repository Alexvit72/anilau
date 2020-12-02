import React, { useState } from 'react';
import './SubscrybeForm.css';
import InputField from './InputField';
import Headline from './Headline';
import ButtonMain from './ButtonMain';
import user from '../images/formicons/user.png';
import mail from '../images/formicons/mail.png';
import tel from '../images/formicons/phone.png';

function SubscrybeForm(props) {

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [checked, setChecked] = useState(false);

	function handleChange(setFunc, event) {
		setFunc(event.target.value);
	}

	return <form className={props.className} onSubmit={(event) => 			event.preventDefault()}>
		<div className='headblock'>
			<Headline className='Headline' text='Say Hello' punctuation='!' />
			<span>and we will write you</span>
		</div>
		<div>
			<InputField className='InputField' name='name' imgSrc={user}
				value={name} handleChange={(event) => handleChange(setName, event)}
			/>
			<InputField className='InputField' name='email' imgSrc={mail}
				value={email} handleChange={(event) => handleChange(setEmail, event)}
			/>
			<InputField className='InputField' name='phone' imgSrc={tel}
				value={phone} handleChange={(event) => handleChange(setPhone, event)}
			/>
		</div>
		<div className='submit'>
			<ButtonMain className='ButtonMain' text='Send' />
			<input type='checkbox' id='checkbox' className='checkbox'
				checked={checked}
				onChange={() => setChecked(!checked)}
			/>
			<label htmlFor='checkbox'>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
			</label>
		</div>
	</form>;

}

export default SubscrybeForm;

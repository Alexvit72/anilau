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
	const [isSub, setIsSub] = useState(false);
	const [isAlarm, setIsAlarm] = useState(false);

	function handleChange(setFunc, event) {
		setIsAlarm(false);
		setFunc(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		if (email || phone) {
			setIsSub(true);
		} else {
			setIsAlarm(true);
		}
	}

	return <form className={props.className}
		onSubmit={(event) => handleSubmit(event)}>
		<div className='headblock'>
			<Headline className='Headline' text='Say Hello' punctuation='!' />
			<span>and we will write you</span>
		</div>
		<div>
			<InputField className='InputField' name='name' imgSrc={user}
				value={name} required={true} handleChange={(event) => handleChange(setName, event)}
			/>
			<InputField className='InputField' name='email' imgSrc={mail}
				value={email} required={false} handleChange={(event) => handleChange(setEmail, event)}
			/>
			<InputField className='InputField' name='phone' imgSrc={tel}
				value={phone} required={false} handleChange={(event) => handleChange(setPhone, event)}
			/>
		</div>
		{isSub ? <Headline className='Headline sub' text='We will write you' punctuation='!' /> :
		<div className='submit'>
			<ButtonMain className='ButtonMain' text='Send' />
			<input type='checkbox' id='checkbox' className='checkbox'
				checked={checked}
				onChange={() => setChecked(!checked)}
			/>
			<label htmlFor='checkbox'>
				Lorem <a href='#Contact'>ipsum dolor sit amet</a>, consectetur adipiscing elit, sed <a href='#Contact'>do eiusmod tempor</a>
			</label>
		</div>}
		<div className={isAlarm ? 'alarm shown' : 'alarm'}>
			Пожалуйста, укажите адрес почты или номер телефона.
		</div>
	</form>;

}

export default SubscrybeForm;

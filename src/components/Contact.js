import React from 'react';
import './Contact.css';
import SubscrybeForm from './SubscrybeForm';

function Contact(props) {
	return <div id={props.id} className={props.className}>
		<img src={props.imgSrc} className='user' alt='user' />
		<SubscrybeForm className='SubscrybeForm' />
	</div>;
}

export default Contact;

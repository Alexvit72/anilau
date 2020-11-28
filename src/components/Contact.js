import React from 'react';
import SubscrybeForm from './SubscrybeForm';

function Contact(props) {
	return <div id={props.id} className={props.className}>
		<img src={props.imgSrc} alt='picture' />
		<SubscrybeForm className='SubscrybeForm' />
	</div>;
}

export default Contact;

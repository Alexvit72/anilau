import React from 'react';
import './InputField.css';

function InputField(props) {
	return <div className={props.className}>
		<p>{props.name}</p>
		<div className='input'>
			<input
				type={props.name === 'name' ? 'text' : props.name}
				value={props.value}
				placeholder={props.name === 'name' ? 'Your name' : props.name === 'email' ? 'yourname@mail.ru' : '+7 999 000 22 11'}
				onChange={(event) => props.handleChange(event)}
			/>
			<img src={props.imgSrc} alt={props.name} />
		</div>
	</div>;
}

export default InputField;

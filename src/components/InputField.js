import React from 'react';

function InputField(props) {
	return <div className={props.className}>
		<span>{props.name}</span>
		<input
			type={props.name == 'name' ? 'text' : props.name}
			value={props.value}
			placeholder={props.name == 'name' ? 'name' : props.name == 'email' ? '' : ''}
			onChange={(event) => props.handleChange(event)}
		/>
		<img src={props.imgSrc} alt={props.name} />
	</div>;
}

export default InputField;

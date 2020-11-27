import React from 'react';

function InputField(props) {
	return <div className={props.className}>
		<span>{props.name}</span>
		<input type={props.name == 'name' ? 'text' : props.name}
			placeholder=''
		/>
		<img src={props.imgSrc} alt={props.name} />
	</div>;
}

export default InputField;

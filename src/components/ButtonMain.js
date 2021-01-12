import React from 'react';
import './ButtonMain.css';

function ButtonMain(props) {
	return <button className={props.className} onClick={props.handleClick}>
		{props.text}
  </button>;
}

export default ButtonMain;

import React from 'react';

function ButtonMain(props) {
	return <button className={props.className}>
		{props.text}
  </button>;
}

export default ButtonMain;

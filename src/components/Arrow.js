import React from 'react';
import './Arrow.css';

function Arrow(props) {
	return <div className={props.className} onClick={props.onClick} tabIndex='0'>
  </div>;
}

export default Arrow;

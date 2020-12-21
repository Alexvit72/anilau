import React, { useState} from 'react';
import './Partners.css';
import Arrow from './Arrow';
import logo1 from '../images/logos/logo1.png';
import logo2 from '../images/logos/logo2.png';
import logo3 from '../images/logos/logo3.png';
import logo4 from '../images/logos/logo4.png';
import logo5 from '../images/logos/logo5.png';
const logos = [];
logos.push(logo1, logo2, logo3, logo4, logo5, '', '', '', '', '');


function Partners(props) {

	const [shift, setShift] = useState(0);
	const [next, setNext] = useState(0);
	const [previous, setPrevious] = useState(0);

	function calcPrevNext() {
		let coords = document.querySelector('.Partners .container').getBoundingClientRect();
		let rightElem = document.elementFromPoint(coords.right - 1,
			coords.top + coords.height / 2);
		if (rightElem) {
			let rightElemRight = rightElem.getBoundingClientRect().right;
			if (rightElemRight > coords.right) {
				setNext(rightElemRight - coords.right);
			} else {
				setNext(rightElem.nextElementSibling ? rightElem.nextElementSibling.offsetWidth : 0);
			}
		}
		let leftElem = document.elementFromPoint(coords.left + 1,
			coords.top + coords.height / 2);
		if (leftElem) {
			let leftElemLeft = leftElem.getBoundingClientRect().left;
			if (leftElemLeft < coords.left) {
				setPrevious(coords.left - leftElemLeft);
			} else {
				setPrevious(leftElem.previousElementSibling ? leftElem.previousElementSibling.offsetWidth : 0);
			}
		}
	}

	window.addEventListener('load', calcPrevNext);
	window.addEventListener('scroll', calcPrevNext);

	function handleClickNext() {
		setShift(shift - next);
		setTimeout(calcPrevNext, 300);
	}

	function handleClickPrev() {
		setShift(shift + previous);
		setTimeout(calcPrevNext, 300);
	}

	const list = logos.map( (logo, index) => {
		return <img key={index} src={logo} alt={'logo' + (index + 1)} />;
	});

	return <div className={props.className}>
		<Arrow className={next !== 0 ? 'Arrow next active' : 'Arrow next'}
			onClick={handleClickNext}
		/>
		<div className='container'>
			<div className='view' style={{left: shift + 'px'}}>
				{list}
			</div>
		</div>
		<Arrow className={previous !== 0 ? 'Arrow prev active' : 'Arrow prev'}
			onClick={handleClickPrev}
		/>
	</div>;

}

export default Partners;

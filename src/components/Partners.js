import React, { useState} from 'react';
import './Partners.css';
import Arrow from './Arrow';

function Partners(props) {

	const [shift, setShift] = useState(0);
	const [next, setNext] = useState(0);
	const [previous, setPrevious] = useState(0);

	function calcPrevNext() {
		let coords = document.querySelector('.Partners .container').getBoundingClientRect();

		let rightElem = document.elementFromPoint(coords.right - 1,
			coords.top + coords.height / 2);
		rightElem = rightElem ? rightElem.closest('.container .view img') : null;
		if (rightElem) {
			let rightElemRight = rightElem.getBoundingClientRect().right;
			if (rightElemRight > coords.right) {
				setNext(rightElemRight - coords.right);
			} else if (rightElem.nextElementSibling) {
				setNext(rightElem.nextElementSibling.offsetWidth);
			}
		}

		let leftElem = document.elementFromPoint(coords.left + 1,
			coords.top + coords.height / 2);
		leftElem = leftElem ? leftElem.closest('.container .view img') : null;
		if (leftElem) {
			let leftElemLeft = leftElem.getBoundingClientRect().left;
			if (leftElemLeft < coords.left) {
				setPrevious(coords.left - leftElemLeft);
			} else if (leftElem.previousElementSibling) {
				setPrevious(leftElem.previousElementSibling.offsetWidth);
			}
		}

	}

	window.addEventListener('scroll', calcPrevNext);

	function handleClickNext() {
		setShift(shift - next);
		setNext(0);
	}

	function handleClickPrev() {
		setShift(shift + previous);
		setPrevious(0);
	}

	const list = props.logos.map( (logo, index) => {
		return <img key={index}
			src={process.env.PUBLIC_URL + logo}
			alt={'logo' + (index + 1)}
		/>;
	});

	return <div className={props.className}>
		<Arrow className={next ? 'Arrow next active' : 'Arrow next'}
			onClick={handleClickNext}
		/>
		<div className='container'>
			<div className='view' style={{left: shift + 'px'}} onTransitionEnd={calcPrevNext}>
				{list}
			</div>
		</div>
		<Arrow className={previous ? 'Arrow prev active' : 'Arrow prev'}
			onClick={handleClickPrev}
		/>
	</div>;

}

export default Partners;

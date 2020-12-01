import React from 'react';
import './ContLink.css';
import wa from '../images/soc-nets/wa.png';
import fb from '../images/soc-nets/fb.png';
import i from '../images/soc-nets/in.png';
let socNets = {};
socNets.wa = wa;
socNets.fb = fb;
socNets.in = i;

function ContLink(props) {
	return <a className={props.className} href={'#' + props.contact}>
		<img src={socNets[props.contact]} alt={props.contact} />
	</a>;
}

export default ContLink;

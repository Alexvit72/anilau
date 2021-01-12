import React from 'react';
import './Footer.css';

function Footer(props) {
	return <footer id={props.id} className={props.className}>
		<address>
			<p><a href='tel:+79680002211'>+7 968 000 22 11</a></p>
			<p><a href='mailto:ourmailname@mail.ru'>ourmailname@mail.ru</a></p>
		</address>
		<p>Copyright © Anilau 2020</p>
	</footer>;
}

export default Footer;

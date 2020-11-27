import React from 'react';

function Footer(props) {
	return <footer className={props.className}>
		<address>
			<a href='tel:+79680002211'>+7 968 000 22 11</a>
			<a href='mailto:ourmailname@mail.ru'>ourmailname@mail.ru</a>
		</address>
		<p>Copyright © Anilau 2020</p>
	</footer>;
}

export default Footer;

import React from 'react';
import { FaFacebook } from 'react-icons/fa';

import './style.scss';

function Footer() {
	const date = new Date();
	return (
		<div className='footer-container'>
			<p className='heading heading-tertiary'>
				&copy; Norwood Evening Garden Club {date.getFullYear()}
			</p>
			<a
				className='link'
				href='mailto:membership@norwoodeveninggardenclub.com?subject=Gardening Club'
			>
				membership@norwoodeveninggardenclub.com
			</a>
			<div className='footer-social'>
				<a
					href='https://www.facebook.com/NorwoodEveningGardenClub'
					target='_blank'
					rel='noreferrer'
				>
					<FaFacebook className='footer-social-icon' />
				</a>
				<p className='heading text-secondary'>Like us on</p>
			</div>
		</div>
	);
}

export default Footer;

import React, { useState, useEffect } from 'react';
import { news } from '../../../data';

import './style.scss';

const News = () => {
	const [toggleButton, setToggleButton] = useState(false);

	//Make Link nav to top of page
	useEffect(() => {
		window.scroll(0,0);
	}, []);

	window.onscroll = function () {
		if (window.pageYOffset > 700) setToggleButton(true);
		else setToggleButton(false);
	};

	return (
		<div className='news'>
			{toggleButton && (
				<div className='text-right btn-up'>
					<button
						type='button'
						className='btn'
						onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
					>
						Go up
					</button>
				</div>
			)}
			<h2 className='heading heading-primary'>
				News
				<div className='underline'></div>
			</h2>
			{news.map((item) => (
				<div className='news-card'>
					<div className='news-image'>
						<img src={item.image} className='news-image' alt='garden' />
					</div>
					<div className='news-info'>
						<a
							href={item.pdf}
							className='link link-green'
							target='_blank'
							rel='noreferrer noopener'
						>
							{item.info}
						</a>
						<div className='news-date'>{item.date}</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default News;

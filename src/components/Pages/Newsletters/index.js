import React from 'react';
import { Link } from 'react-router-dom';
import { ImNewspaper } from 'react-icons/im';
import { newsletter } from '../../../data';
import './style.scss';

const Newsletters = () => {
	return (
		<div className='newsletters'>
			<h2 className='heading heading-primary'>
				Newsletters
				<div className='underline'></div>
			</h2>
			<ul className='list'>
				{newsletter.map((item, i) => (
					<li className='newsletters-item' key={i}>
						<ImNewspaper className='newsletters-item-icon' />
						<Link
							to={{ pathname: item.pdf }}
							target='_blank'
							className='link link-green'
						>
							{item.name}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Newsletters;

import React from 'react';
import { SiLeaflet } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { horticultureNotes } from '../../../data';

import './styles.scss';

const Horticulture = () => {
	return (
		<div>
			<div className='heading heading-primary'>
				Horticulture Notes
				<div className='underline'></div>
			</div>
			<div className='horticulture-notes'>
				<ul>
					{horticultureNotes.map((item, i) => (
						<li className='horticulture-item' key={i}>
							<Link
								to={{ pathname: item.pdf }}
								target='_blank'
								className='btn-text link-green'
							>
								<SiLeaflet className='horticulture-icon' />
								{item.name}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Horticulture;

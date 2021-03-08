import React from 'react';
import { Link } from 'react-router-dom';
import { courses } from '../../../data';

import './style.scss';

const Courses = () => {
	return (
		<>
			<h2 className='heading heading-primary'>
				Gardening and Horticultural Courses
				<div className='underline'></div>
			</h2>
			<div className='courses'>
				{courses.map((item, i) => (
					<React.Fragment key={i}>
						<div className='courses-item'>
							<div className='courses-name'>
								<h4 className='heading heading-tertiary text-secondary'>
									{item.title}
								</h4>
								{item.subtitle && (
									<h5 className='text-primary'>{item.subtitle}</h5>
								)}
							</div>

							<div className='courses-info'>
								<p>{item.phone}</p>
								<Link to={{ pathname: item.link }} target='_blank'>
									{item.link.substring(7)}
								</Link>
							</div>
						</div>
						{i + 1 !== courses.length && <div className='line'></div>}
					</React.Fragment>
				))}
			</div>
		</>
	);
};

export default Courses;

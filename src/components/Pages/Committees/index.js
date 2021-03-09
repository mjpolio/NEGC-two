import React, { useState } from 'react';
import { GiSpotedFlower } from 'react-icons/gi';
import { committees } from '../../../data';
import './style.scss';

const Committees = () => {
	const [toggleButton, setToggleButton] = useState(false);

	window.onscroll = function () {
		if (window.pageYOffset > 700) setToggleButton(true);
		else setToggleButton(false);
	};
	return (
		<div className='committees'>
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
				Committees
				<div className='underline'></div>
			</h2>
			
			<div className='committees-info'>
				{committees.map((item, i) => (
					<React.Fragment key={i} id={item.name}>
						<h3 className='heading heading-secondary heading-underline text-secondary committees-title'>
							{item.name}
						</h3>
						<p className='committees-text'>{item.description}</p>
						{item.list && (
							<>
								<p className='m-1 committees-list'>{item.list.title}</p>
								<ul>
									{item.list.points.map((point, i2) => (
										<li key={i2} className='committees-list-items'>
											<GiSpotedFlower className='list-icon' />
											{point}
										</li>
									))}
								</ul>
							</>
						)}
					</React.Fragment>
				))}
			</div>
		</div>
	);
};

export default Committees;

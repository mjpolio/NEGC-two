import React, { useState } from 'react';
import { FaAward } from 'react-icons/fa';
import { awards } from '../../../data';

import './style.scss';

const Awards = () => {
	const [tabOn, setTabOn] = useState(awards[0].year);

	return (
		<div className='awards'>
			<h2 className='heading heading-primary'>
				Awards
				<div className='underline'></div>
			</h2>
			<section className='awards-section'>
				<div className='awards-tab'>
					{awards.map((year, i) => (
						<button
							type='button'
							className={`awards-tab-btn ${
								year.year === tabOn ? 'active' : ''
							}`}
							key={i}
							onClick={() => setTabOn(year.year)}
						>
							{year.year}
						</button>
					))}
				</div>
				{awards.map((year, i) => (
					<div
						key={i}
						className={`awards-body ${year.year === tabOn ? 'active' : ''}`}
					>
						{year.months.map((month, i2) => (
							<React.Fragment key={i2}>
								<h4 className='heading heading-secondary'>{month.month}</h4>
								{month.competitions.map((competition, i3) => (
									<div className='awards-item' key={i3}>
										<p className='text-secondary'>{competition.name}</p>
										{competition.awards.map((award, i4) => (
											<div className='awards-item-single' key={i4}>
												<FaAward className='awards-icon' />
												{award}
											</div>
										))}
									</div>
								))}
							</React.Fragment>
						))}
					</div>
				))}
			</section>
		</div>
	);
};

export default Awards;

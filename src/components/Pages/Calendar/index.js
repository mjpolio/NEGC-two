import React, { useEffect } from 'react';
import { calendar } from '../../../data';

import './style.scss';

const Calendar = () => {
	//Make Link nav to top of page
	useEffect(() => {
		window.scroll(0,0);
	}, []);

	return (
		<div className='calendar' id='calendar'>
			<h2 className='heading heading-primary'>
				Monthly Program Calendar
				<div className='underline'></div>
			</h2>
			<p className='my-2 calendar-text'>
				Guests are welcome at all meetings except those noted as ' Members Only
				' meetings. Guests may register at the door. The guest donation is $5.00
				per meeting.
			</p>
			<h3 className='heading heading-tertiary'>
				Please come at 6:45 p.m. <br /> Carriage House at the First Baptist
				Church, 71 Bond Street in Norwood
			</h3>

			<p className='text-danger mt-3'>
				Please Note: Due to COVID all programs are 'Members Only'.
			</p>

			<table className='calendar-table'>
				<thead>
					<tr>
						<th>Date</th>
						<th>Speaker/Event</th>
						<th>Topic</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{calendar.map((item, i) => (
						<tr key={i}>
							<td>{item.date}</td>
							<td>{item.speakerEvent}</td>
							<td>{item.topic}</td>
							<td>
								<button className='btn-text'>More Info &rarr;</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<h3 className='heading heading-secondary'>Norwood Evening Garden Club</h3>
			<p className="calendar-text">
				The Norwood Evening Garden Club has been providing education and public
				beautification in Norwood and Walpole Since 2096. Open to novice and
				expert gardeners, the Club is a member of The Garden Club Federation of
				Massachusetts, Inc., New England Region, and National Garden Clubs, Inc.
				and draws its members from the communities of Norwood, Walpole,
				Westwood, Dedham, Medfield, Stoughton and Randolph.
			</p>
			<p className="calendar-text">
				For information about joining the Norwood Evening Garden Club, contact{' '}
				<a
					href='mailto:donnamlane@verizon.net?subject=Gardening Club Information'
					className='link'
				>
					Donna Lane
				</a>
			</p>
		</div>
	);
};

export default Calendar;

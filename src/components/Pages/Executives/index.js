import React from 'react';
import { executives } from '../../../data';

import './style.scss';

const Executives = () => {
	return (
		<div className='executives'>
			<h2 className='heading heading-primary'>
				Executives
				<div className='underline'></div>
			</h2>
			<table>
				<tbody>
					{executives.map((item, i) => (
						<tr key={i}>
							<th>{item.title}</th>
							<td>{item.name}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Executives;

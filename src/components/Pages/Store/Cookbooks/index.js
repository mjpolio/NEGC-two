import React from 'react';
import './styles.scss';

const Cookbooks = () => {
	return (
		<>
			<h2 className='heading heading-primary'>
				Cookbooks
				<div className='underline'></div>
			</h2>
			<div className='cookbook-item'>
				<h3 className='heading-secondary heading-underline text-primary'>
					The Norwood Evening Garden Club Cookbook
				</h3>
				<h5 className='heading-tertiary text-dark'>
					NEGC Award-Winning Cookbook
				</h5>
				<div className='cookbook-item-img'></div>
				<div className='cookbook-item-description'>
					<p className='heading-primary text-secondary'>$10</p>
				</div>
			</div>
		</>
	);
};

export default Cookbooks;

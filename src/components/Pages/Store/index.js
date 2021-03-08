import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import { GiLargeDress, GiGloves } from 'react-icons/gi';
import { FaBook } from 'react-icons/fa';

const Store = () => {
	return (
		<div className='store'>
			<h2 className='heading heading-primary'>
				Ouur Store
				<div className='underline'></div>
			</h2>
			<div className='list'>
				<li className='store-item'>
					<Link to='/cookbooks' className='link link-green'>
						<FaBook className='store-icon' />
						Cookbooks
					</Link>
				</li>
				<li className='store-item'>
					<div className='link link-green'>
						<GiLargeDress className='store-icon' />
						Aprons
					</div>
				</li>
				<li className='store-item'>
					<div className='link link-green'>
						<GiGloves className='store-icon' />
						Gloves
					</div>
				</li>
			</div>
		</div>
	);
};

export default Store;

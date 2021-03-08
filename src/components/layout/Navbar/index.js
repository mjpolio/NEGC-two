import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

const Navbar = () => {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

	return (
    <div className='navbar-container'>
      <nav className='navbar'>
		<ul className={click ? 'navbar mobile' : 'navbar'}>
			<li className='navbar-item'>
				<Link onClick={closeMobileMenu} to='/' className='navbar-links'>
					Home
				</Link>
			</li>
			<li className='navbar-item'>
				About
				<i class="fas fa-chevron-right navbar-icon"></i>
				<div className="navbar-submenu">
					<li className='navbar-item'>
						<Link onClick={closeMobileMenu} to='/about' className='navbar-links'>
							About Us
						</Link>
					</li>
					<li className='navbar-item'>
						<Link onClick={closeMobileMenu} to='/news' className='navbar-links'>
							News
						</Link>
					</li>
					<li className='navbar-item'>
						<Link onClick={closeMobileMenu} to='/membership' className='navbar-links'>
							Membership
						</Link>
					</li>
					<li className='navbar-item'>
						<Link onClick={closeMobileMenu} to='/executives' className='navbar-links'>
							Board of Directors
						</Link>
					</li>
					<li className='navbar-item'>
						<Link onClick={closeMobileMenu} to='/committees' className='navbar-links'>
							Committees
						</Link>
					</li>
					<li className='navbar-item'>
						<Link onClick={closeMobileMenu} to='/awards' className='navbar-links'>
							Awards
						</Link>
					</li>
					<li className='navbar-item'>
						<Link onClick={closeMobileMenu} to='/photos' className='navbar-links'>
							Photo Gallery
						</Link>
					</li>
				</div>
			</li>
			
			<li className='navbar-item'>
				<Link onClick={closeMobileMenu} to='/calendar' className='navbar-links'>
					Upcoming Events
				</Link>
			</li>
			<li className='navbar-item'>
					Resources
					<i class="fas fa-chevron-right navbar-icon"></i>
					<div className="navbar-submenu">
						<li className='navbar-item'>
							<Link onClick={closeMobileMenu} to='/resources' className='navbar-links'>
								Horticulture Resources
							</Link>
						</li>
						<li className='navbar-item'>
							<Link onClick={closeMobileMenu} to='/newsletters' className='navbar-links'>
								Newsletters
							</Link>
						</li>
						
						<li className='navbar-item'>
							<Link onClick={closeMobileMenu} to='/courses' className='navbar-links'>
								Courses
							</Link>
						</li>
						<li className='navbar-item'>
							<Link onClick={closeMobileMenu} to='/horticulture' className='navbar-links'>
								Horticulture Notes
							</Link>
						</li>
						
						<li className='navbar-item'>
							<Link onClick={closeMobileMenu} to='/library' className='navbar-links'>
								Library
							</Link>
						</li>
						
						<li className='navbar-item'>
							<Link onClick={closeMobileMenu} to='/store' className='navbar-links'>
								Our Store
							</Link>
						</li>
					</div>
			</li>
			<li className='navbar-item'>
				<Link onClick={closeMobileMenu} to='/contact' className='navbar-links'>
					Contact Us
				</Link>
			</li>
		</ul>
		
			{/* <i class="fas fa-bars navbar-toggle"></i> */}
	  </nav>
	  <div className="navbar-toggle" onClick={handleClick}>
				<i className={click ? "fas fa-times" : "fas fa-bars" }></i>
		</div>
    </div>
		
	);
};

export default Navbar;

//OG Nav
/* <nav className='navbar'>
			<div className='navbar-container'>
				<ul>
					<li className='navbar-item'>
						<Link to='/' className='navbar-links'>
							Home
						</Link>
					</li>
					<li className='navbar-item'>
						<Link to='/about' className='navbar-links'>
							About
						</Link>
					</li>
					<li className='navbar-item'>
						<Link to='/news' className='navbar-links'>
							News
						</Link>
					</li>
					<li className='navbar-item'>
						<Link to='/membership' className='navbar-links'>
							Membership
						</Link>
					</li>
					<li className='navbar-item'>
						<Link to='/executives' className='navbar-links'>
							Board of Directors
						</Link>
					</li>
					<li className='navbar-item'>
						<Link to='/committees' className='navbar-links'>
							Committees
						</Link>
					</li>
					<li className='navbar-item'>
						<Link to='/calendar' className='navbar-links'>
							Calendar
						</Link>
					</li>
					<li className='navbar-item'>
						<Link to='/newsletters' className='navbar-links'>
							Newsletters
						</Link>
					</li>
					<li className='navbar-item'>
						<Link to='/resources' className='navbar-links'>
							Resources
						</Link>
					</li>
					<li className='navbar-item'>
						<Link to='/courses' className='navbar-links'>
							Courses
						</Link>
					</li>
					<li className='navbar-item'>
						<Link to='/horticulture' className='navbar-links'>
							Horticulture Notes
						</Link>
					</li>
					<li className='navbar-item'>
						<Link to='/awards' className='navbar-links'>
							Awards
						</Link>
					</li>
					<li className='navbar-item'>
						<Link to='/library' className='navbar-links'>
							Library
						</Link>
					</li>
					<li className='navbar-item'>
						<Link to='/photos' className='navbar-links'>
							Photo Gallery
						</Link>
					</li>
					<li className='navbar-item'>
						<Link to='/store' className='navbar-links'>
							Our Store
						</Link>
					</li>
					<li className='navbar-item'>
						<Link to='/contact' className='navbar-links'>
							Contact Us
						</Link>
					</li>
				</ul>
			</div>
		</nav> */
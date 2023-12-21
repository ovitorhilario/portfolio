import React from 'react';
import { Link } from 'react-router-dom';
import vh_logo from '../../../assets/logo/vh_logo_transparent.png'

const Header: React.FC = () => {
	return (
		<header className='w-full sm:h-28 h-20 flex flex-row sm:justify-between justify-evenly items-center'>
			<div data-aos='fade-down' data-aos-delay='0'>
				<Link to={'/'} className='cursor-pointer no-underline'>
					<div className='flex flex-row items-center gap-5'>
						<img src={vh_logo} className='object-contain w-11 h-11' />
						<span className='font-bold text-sm md:block hidden' translate='no'>VITOR HILARIO</span>
					</div>
				</Link>
			</div>
			<nav className='flex flex-row sm:gap-2 gap-1'>
				<li className='about font-bold list-none' data-aos="fade-down" data-aos-delay="0">
					<Link to={'/about'} className='text-sm hover:bg-white/10 sm:px-5 sm:py-2.5 px-2.5 py-1.5 rounded'>
						Sobre
					</Link>
				</li>
				<li className='projects font-bold list-none' data-aos="fade-down" data-aos-delay="100">
					<Link to={'/apps'} className='text-sm hover:bg-white/10 sm:px-5 sm:py-2.5 px-2.5 py-1.5 rounded'>
						Apps
					</Link>
				</li>
				<li className='contact font-bold list-none' data-aos="fade-down" data-aos-delay="200">
					<Link to={'/contact'} className='text-sm hover:bg-white/10 sm:px-5 sm:py-2.5 px-2.5 py-1.5 rounded'>
						Contato
					</Link>
				</li>
			</nav>

		</header>

	);
}

export default Header;
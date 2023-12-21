import React from 'react';
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";

const SocialLinks = () => {

	return (
		<div className='flex flex-row gap-5 justify-center items-center'>
			<a href='https://github.com/ovitorhilario' target='_blank' rel="noreferrer">
				<FaGithub size={24} color='#888' />
			</a>
			<a href='https://www.linkedin.com/in/vitor-hilario/' target='_blank' rel="noreferrer">
				<FaLinkedin size={24} color='#888' />
			</a>
			<a href='https://medium.com/@vitorhilario' target='_blank' rel="noreferrer">
				<FaMedium size={24} color='#888' />
			</a>
		</div>
	);
}

export default SocialLinks;
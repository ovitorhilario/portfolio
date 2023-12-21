import React from 'react';
import { FaWhatsapp  } from "react-icons/fa";
import SocialLinks from './elements/SocialLinks';

const Footer = () => {
	return (
		<footer className='rounded-lg border border-white/10' data-aos="fade-up">
			<div className='p-5 flex flex-col items-start gap-3'>
				<h1 className='text-lg font-bold'>Entre em Contato comigo</h1>
				<span className='text-base text-[#888]'>Quer conversar sobre Projetos, Freelances e Dúvidas? Mande-me uma Mensagem!</span>
				<button className='flex flex-row gap-3' >
					<a 
						className='flex flex-row items-center gap-2' 
						target='_blank' 
						href='https://wa.me/5518998017842' 
						rel="noreferrer"
					>
						<span href='#2' className='text-white'>Enviar Mensagem</span>
						<FaWhatsapp  color='#FFF' size={20} />
					</a>
				</button>
			</div>
			<hr className='border-white/10' />
			<div className='p-5 flex flex-col items-start gap-3'>
				<SocialLinks />
			</div>
		</footer>
	);
}

export default Footer;
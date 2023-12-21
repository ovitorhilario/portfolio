import React from 'react';
import { FaGithub, FaGooglePlay } from "react-icons/fa";
import Chip from '../../../../../atoms/Chip';

const AppCard = ({ 
	title, 
	description, 
	imageUrl,
	githubUrl,
	googlePlayUrl,
	tags
}) => {
	return (
		<div className='h-72 py-4 gap-5 flex flex-grow basis-[100%] sm:basis-[34%] sm:p-3 sm:gap-3 sm:max-w-[49%] rounded-2xl bg-white/5 border border-white/10'>
			<div className='w-[33%] min-w-[33%] ml-2'>
				<img src={imageUrl} className='w-full h-full object-contain' />	
			</div>
			<div className='flex-grow overflow-y-auto pr-4'>
				<div className='flex flex-row items-center gap-2 w-full py-3 px-5 bg-[#292831] rounded-xl'>
					<h1 className='font-bold text-sm text-start'>{title}</h1>
					<button className='p-1'>
						<a href={githubUrl} target='_blank' rel="noreferrer">
							<FaGithub size={18} color='white' />
						</a>
					</button>
					{googlePlayUrl ? (
						<button className='p-1'>
							<a href={googlePlayUrl} target='_blank' rel="noreferrer">
								<FaGooglePlay size={18} color='white' />
							</a>
						</button>
					) : null}
				</div>
				<div className='w-full flex-grow px-5 py-3 bg-white/10 rounded-xl mt-3'>
					<p className='text-sm text-white'>{description}</p>
				</div>
				<span className='block text-white text-sm mt-3'>Tecnologias:</span>
				<div className='flex flex-row flex-wrap gap-2 py-3'>
					{tags.map((tag) => {
						return (
							<Chip key={tag} title={tag} />
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default AppCard;
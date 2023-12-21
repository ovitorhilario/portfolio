import React from "react";
import { FiHeadphones } from "react-icons/fi";

const ProjectCard = ({ title, count, imgSource, onClick, color, Icon }) => {
	
	const projectStyle = {
		borderBottomWidth: '8px',
		borderColor: color
	};

	return (
		<div 
			onClick={() => onClick()} 
			style={projectStyle}
			className='flex basis-[34%] flex-grow md:flex-1 h-36 w-full rounded-xl relative overflow-hidden cursor-pointer'
			data-aos="fade-right" 
		>
			<div className='w-full h-full flex flex-col justify-between absolute left-0 top-0 right-0 bottom-0 bg-black/70 hover:bg-black/80 transition-all'>
				<div className='w-full flex flex-row items-center justify-between'>
					<div className='bg-white/20 rounded-br-lg p-2'>
						<Icon size={24} color='#FFF'/>
					</div>
					<div className='flex items-center justify-center mr-4'>
						<span>{count} items</span>
					</div>
				</div>
				<div className='p-4'>
					<span className='font-medium'>{title}</span>
				</div>
			</div>
			<img className='w-full h-full object-cover' src={imgSource} />
		</div>
	);
}

export default ProjectCard;
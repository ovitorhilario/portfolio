import { FiArrowUpRight, FiHeadphones, FiLayers, FiGrid, FiStar } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

import setup from '../../../../assets/cards/setup.jpg';
import computer from '../../../../assets/cards/computer.jpg';
import senna from '../../../../assets/cards/senna.jpg';
import stack from '../../../../assets/cards/stack.jpg';

import ProjectCard from './elements/ProjectCard';
import PulseCircle from './elements/PulseCircle';
import FadeButton from "../../../atoms/FadeButton";

const MainHome = () => {
	const navigate = useNavigate();
	
	const content = {
		title: "Hey, I'm Vitor Hilário - Mobile Developer",
		sub_title: 'Café, Código e Apps.',
		sub_title_2: 'Coding and currently listening my ',
		spotify_playlist: 'spotify playlist',
		button_social: 'Meus Projetos',
		button_others: 'Meus Artigos'
	};

	return (
		<main className='flex flex-col gap-5 items-start' data-aos="fade-in" data-aos-delay="190">
			<h1 className='font-extrabold md:max-w-3xl'>
				<span className='text-3xl md:text-4xl lg:text-5xl' translate='no'>
					{content.title}
				</span>
			</h1>
			<span className='text-lg block font-medium text-[#888]'>
				{content.sub_title}
			</span>
			<div className='flex flex-row gap-3 items-center'>
				<PulseCircle />
				<span className='text-sm' translate='no'>
					<span>{content.sub_title_2}</span>
					<a className='underline' target='_blank' rel='noreferrer' href='https://open.spotify.com/intl-pt'>
						{content.spotify_playlist}
					</a>
				</span>
			</div>
			<div className='flex sm:flex-row sm:items-center flex-col items-start gap-4'>
				<FadeButton>
					<span className='flex flex-row items-center gap-1.5'>
						<a href='#2' className='text-white'>{content.button_social}</a>
						<FiArrowUpRight color='#FFF' size={20} />
					</span>
				</FadeButton>
				<button>
					<a href='#23' className='text-white'>{content.button_others}</a>
				</button>
			</div>
			<div className='w-full flex flex-wrap flex-row items-center justify-between gap-3 md:gap-6 mt-6'>
				<ProjectCard 
					title={'Apps'}
					count={'3'}
					imgSource={computer}
					onClick={() => navigate('/apps')}
					color='#d77a88'
					Icon={FiGrid}
				/>
				<ProjectCard 
					title={'Setup'}
					count={'3'}
					imgSource={setup}
					onClick={() => navigate('/apps')}
					color='#4E4FEB'
					Icon={FiHeadphones}
				/>
				<ProjectCard 
					title={'Stack'}
					count={'3'}
					imgSource={stack}
					onClick={() => navigate('/apps')}
					color='#9BABB8'
					Icon={FiLayers}
				/>
				<ProjectCard 
					title={'Hobbies'}
					count={'3'}
					imgSource={senna}
					onClick={() => navigate('/apps')}
					color='#FF6666'
					Icon={FiStar}
				/>
			</div>
		</main>
	);
}

export default MainHome;
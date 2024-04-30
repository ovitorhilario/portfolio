import { useNavigate } from 'react-router-dom';

const MainStack = () => {
	const navigate = useNavigate();
	
	const content = {
		title: "Stack",
		sub_title: '> Mobile Developer, React Native e Android Nativo.',
		sub_title_2: 'JavaScript, TypeScript, React, React Native, Android - Jetpack Compose & XML.',
	};

	return (
		<main className='flex flex-col gap-5 items-start' data-aos="fade-in" data-aos-delay="190">
			<h1 className='font-extrabold md:max-w-3xl'>
				<span className='text-3xl md:text-4xl lg:text-5xl' translate='no'>
					{content.title}
				</span>
			</h1>
			<span className='text-lg block font-medium text-white'>
				{content.sub_title}
			</span>
			<span className='text-base block font-medium text-[#888]'>
				{content.sub_title_2}
			</span>
		</main>
	);
}

export default MainStack;
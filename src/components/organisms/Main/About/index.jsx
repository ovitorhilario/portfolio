import { useNavigate } from 'react-router-dom';

const MainStack = () => {
	const navigate = useNavigate();
	
	const content = {
		title: "Sobre",
		sub_title: 'Desenvolvedor Mobile com foco em React Native e Android Nativo (Jetpack Compose & XML). Atualmente trabalha na Epistemic como Mobile Developer e está cursando Bacharelado em Engenharia de Software pela Universidade Tecnológica Federal do Paraná (UTFPR).',
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
			
			<div className='w-full flex flex-wrap flex-row items-center justify-between gap-3 md:gap-6 mt-6'>
				
			</div>
		</main>
	);
}

export default MainStack;
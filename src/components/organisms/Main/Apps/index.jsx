import AppCard from './elements/AppCard';
import mystock from '../../../../assets/apps/mystock.png'
import twenty_one_sounds from '../../../../assets/apps/twenty_one_sounds.png'
import picslazy from '../../../../assets/apps/picslazy.png'
import disney_plus from '../../../../assets/apps/disney_plus.png'
import modern_linkedin from '../../../../assets/apps/modern_linkedin.png'
import autoscanner from '../../../../assets/apps/autoscanner.png'

const MainApps = () => {
	return (
		<div className='flex flex-row flex-wrap gap-4' data-aos="fade-in">
			<AppCard
				title={'MyStock'}
				description={'App de Controle de Estoque'}
				imageUrl={mystock}
				githubUrl={'https://github.com/ovitorhilario/MyStock'}
				googlePlayUrl={'https://play.google.com/store/apps/details?id=com.vitorhilarioapps.mystock'}
				tags={['Android','Firebase', 'Authentication', 'Firestore', 'Analytics']}
			/>
			<AppCard
				title={'AutoScanner'}
				description={'Auto Detection and Thresholding App'}
				imageUrl={autoscanner}
				githubUrl={'https://github.com/ovitorhilario/AutoScanner'}
				googlePlayUrl={'https://play.google.com/store/apps/details?id=com.vitorhilarioapps.autoscanner'}
				tags={['Android', 'OpenCV', 'Visão Computacional']}
			/>
			<AppCard
				title={'Picslazy'}
				description={'Photo Editor App'}
				imageUrl={picslazy}
				githubUrl={'https://github.com/ovitorhilario/Picslazy'}
				googlePlayUrl={'https://play.google.com/store/apps/details?id=com.vitorhilarioapps.picslazy'}
				tags={['Android', 'GPUImage', 'Jetpack Compose']}
			/>
			<AppCard
				title={'Modern LinkedIn'}
				description={'Linkedin with new Concept'}
				imageUrl={modern_linkedin}
				githubUrl={'https://github.com/ovitorhilario/ModernLinkedin'}
				tags={['Android', 'Jetpack Compose', 'MVVM']}
			/>
			<AppCard
				title={'Disney Plus Clone'}
				description={'Disney Plus Clone App'}
				imageUrl={disney_plus}
				githubUrl={'https://github.com/ovitorhilario/DisneyPlusClone'}
				tags={['Android', 'Jetpack Compose', 'Retrofit']}
			/>
			<AppCard
				title={'21Sounds'}
				description={'Streaming Music Simulation App'}
				imageUrl={twenty_one_sounds}
				githubUrl={'https://github.com/ovitorhilario/21Sounds'}
				tags={['Android', 'Retrofit', 'Room Database']}
			/> 	
		</div>
	);
};

export default MainApps;
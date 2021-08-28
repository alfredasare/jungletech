import LandingContent from './landingContent';
import LandingSvg from './landingSvg';

const Landing = () => {
	return (
		<div className='flex justify-center items-center bg-gray-900 h-screen-plus sm:h-screen lg:overflow-hidden'>
			<div className='mx-auto max-w-7xl lg:px-8'>
				<div className='md:flex md:flex-col md:items-center lg:grid lg:grid-cols-2 lg:gap-8'>
					<LandingContent />
					<LandingSvg />
				</div>
			</div>
		</div>
	);
};

export default Landing;

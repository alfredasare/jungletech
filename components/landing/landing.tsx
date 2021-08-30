import { useInView } from 'react-intersection-observer';
import LandingContent from './landingContent';
import LandingSvg from './landingSvg';
import useIntersection from '../../hooks/useIntersection';

const Landing = () => {
	const { ref, inView } = useInView({
		threshold: 0.5,
	});

	useIntersection(inView, '');

	return (
		<div
			ref={ref}
			className='flex justify-center items-center bg-gray-900 h-screen-plus sm:h-screen lg:overflow-hidden'
		>
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

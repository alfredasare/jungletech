import { useInView } from 'react-intersection-observer';
import AboutContent from './aboutContent';
import RoundedRectangle from './roundedRectangle';
import Dots from '../svg/about/dots';
import TestimonialCard from './testimonialCard';
import useIntersection from '../../hooks/useIntersection';

const About = () => {
	const { ref, inView } = useInView({
		threshold: 0.7,
	});

	useIntersection(inView, '#about');

	return (
		<div ref={ref} id='about' className='relative mt-32 sm:mt-64 md:mt-20'>
			<div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center'>
				<div className='relative sm:py-16 lg:py-0'>
					<div
						aria-hidden='true'
						className='hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen'
					>
						<RoundedRectangle />
						<Dots />
					</div>

					<TestimonialCard />
				</div>

				<AboutContent />
			</div>
		</div>
	);
};

export default About;

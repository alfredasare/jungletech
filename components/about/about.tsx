import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import AboutContent from './aboutContent';
import RoundedRectangle from './roundedRectangle';
import Dots from '../svg/about/dots';
import TestimonialCard from './testimonialCard';
import useIntersection from '../../hooks/useIntersection';
import { testimonialVariant } from '../../animations';
import thresholdSetter from '../../animations/utils/thresholdSetter';

const About = () => {
	const testimonialControls = useAnimation();

	const { ref, inView } = useInView({
		threshold: thresholdSetter(0.4, 0.3),
	});

	useIntersection(inView, '#about');

	useEffect(() => {
		if (inView) {
			testimonialControls.start('visible');
		}
	}, [inView, testimonialControls]);

	return (
		<div ref={ref} id='about' className='relative mt-32 sm:mt-64 md:mt-20'>
			<div className='px-2 lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center'>
				<motion.div
					className='relative sm:py-16 lg:py-0'
					variants={testimonialVariant}
					initial='hidden'
					animate={testimonialControls}
				>
					<div
						aria-hidden='true'
						className='hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen'
					>
						<RoundedRectangle />
						<Dots />
					</div>

					<TestimonialCard />
				</motion.div>

				<AboutContent inView={inView} />
			</div>
		</div>
	);
};

export default About;

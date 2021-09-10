import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import AboutContent from './aboutContent';
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
		<div ref={ref} id='about' className='relative mt-20 sm:mt-64 md:mt-20'>
			<div className='px-2 py-5 lg:py-24 lg:mx-auto lg:max-w-7xl md:px-8 md:grid md:grid-cols-2 md:gap-24 lg:items-center'>
				<motion.div
					className='relative sm:py-16 lg:py-0 px-4 sm:px-6 lg:px-0'
					variants={testimonialVariant}
					initial='hidden'
					animate={testimonialControls}
				>
					<p className='text-xl md:text-3xl text-gray-900 tracking-tight sm:text-2xl'>
						JungleTech is an IT services company specializing in
						software development outsourcing and we're on a mission
						to empower clients.
					</p>
				</motion.div>

				<AboutContent inView={inView} />
			</div>
		</div>
	);
};

export default About;

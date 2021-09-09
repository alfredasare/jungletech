import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ImageGrid from './imageGrid';
import useIntersection from '../../hooks/useIntersection';
import thresholdSetter from '../../animations/utils/thresholdSetter';

const OurWork = () => {
	const workControls = useAnimation();

	const { ref, inView } = useInView({
		threshold: thresholdSetter(0.1, 0.4),
	});

	useIntersection(inView, '#work');

	useEffect(() => {
		if (inView) {
			workControls.start('visible');
		}
	}, [inView, workControls]);

	return (
		<div ref={ref} id='work' className='bg-white'>
			<div className='max-w-2xl mx-auto py-12 px-5 sm:pt-16 sm:pb-0 sm:px-6 lg:max-w-7xl lg:px-8'>
				<div className='border-b border-gray-200 pb-10 text-center'>
					<h2 className='text-base font-semibold tracking-wider text-cyan-600 uppercase'>
						Our work
					</h2>
					<p className='mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
						What we do at JungleTech
					</p>
				</div>

				<ImageGrid workControls={workControls} />
			</div>
		</div>
	);
};

export default OurWork;

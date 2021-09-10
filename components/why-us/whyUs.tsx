import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { annotate, annotationGroup } from 'rough-notation';
import { useInView } from 'react-intersection-observer';
import FeatureItem from './featureItem';
import features from './data/features';
import useIntersection from '../../hooks/useIntersection';
import { featureVariant } from '../../animations';
import thresholdSetter from '../../animations/utils/thresholdSetter';

const WhyUs = () => {
	const featureControl = useAnimation();

	const { ref, inView } = useInView({
		threshold: thresholdSetter(0.5, 0.3),
	});

	useIntersection(inView, '#why-us');

	useEffect(() => {
		const techRef = document.querySelector('#tech');
		const solveRef = document.querySelector('#solve');
		const transformRef = document.querySelector('#transform');

		const techAnnotation = annotate(techRef as HTMLElement, {
			type: 'highlight',
			color: 'cyan',
		});
		const solveAnnotation = annotate(solveRef as HTMLElement, {
			type: 'highlight',
			color: 'cyan',
		});
		const transformAnnotation = annotate(transformRef as HTMLElement, {
			type: 'highlight',
			color: 'cyan',
		});

		if (inView) {
			featureControl.start('visible');
			const ag = annotationGroup([
				techAnnotation,
				solveAnnotation,
				transformAnnotation,
			]);
			ag.show();
		}
	}, [inView, featureControl]);

	return (
		<div ref={ref} id='why-us' className='bg-white'>
			<div className='max-w-7xl mx-auto py-16 px-5 sm:px-6 lg:pt-60 lg:pb-60 lg:px-8'>
				<h1
					className='w-full md:w-3/4 mx-auto leading-relaxed text-center text-2xl sm:text-3xl md:text-4xl
                lg:text-5xl font-normal'
				>
					We utilize the power of{' '}
					<span className='z-10' id='tech'>
						technology
					</span>{' '}
					to <span id='solve'>solve</span> complex problems and{' '}
					<span id='transform'>transform</span> businesses.
				</h1>
			</div>

			<div className='lg:relative bg-gray-900'>
				<div className='relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2 lg:h-full'>
					<img
						className='absolute inset-0 w-full h-full object-cover'
						src='/images/why-2.jpg'
						alt=''
					/>
				</div>
				<div className='mx-auto max-w-7xl w-full pt-16 pb-20 text-left lg:py-48'>
					<div className='px-4 lg:w-1/2 lg:ml-auto sm:px-8 xl:pl-16'>
						<div>
							<h2 className='text-base font-semibold text-cyan-600 uppercase tracking-wide'>
								Why us?
							</h2>
							<p className='mt-2 text-3xl font-extrabold text-white'>
								The reasons to choose JungleTech
							</p>
							<motion.dl
								className='mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-1 sm:grid-rows-3 sm:grid-flow-col
						sm:gap-x-6 sm:gap-y-10 lg:gap-x-8'
								initial='hidden'
								animate={featureControl}
								variants={featureVariant}
							>
								{features.map(feature => (
									<FeatureItem
										key={feature.name}
										feature={feature}
									/>
								))}
							</motion.dl>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WhyUs;

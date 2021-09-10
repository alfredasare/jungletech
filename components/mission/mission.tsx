import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import MissionItem from './missionItem';
import missionData from './data/missionData';
import useIntersection from '../../hooks/useIntersection';
import { missionVariant } from '../../animations';
import thresholdSetter from '../../animations/utils/thresholdSetter';

const Mission = () => {
	const missionControls = useAnimation();

	const { ref, inView } = useInView({
		threshold: thresholdSetter(0.4),
	});

	useIntersection(inView, '#mission');

	useEffect(() => {
		if (inView) missionControls.start('visible');
	}, [inView, missionControls]);

	return (
		<div ref={ref} id='mission' className='bg-white'>
			<div className='lg:relative'>
				<div className='relative w-full h-64 sm:h-72 md:h-96 mt-20 lg:mt-0 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full'>
					<img
						className='absolute inset-0 w-full h-full object-cover'
						src='/images/why-1.jpg'
						alt=''
					/>
				</div>
				<div className='mx-auto max-w-7xl w-full pt-16 pb-20 text-left lg:py-48'>
					<div className='px-4 lg:w-1/2 lg:mr-auto sm:px-8 xl:pr-16'>
						<div>
							<h2 className='text-base font-semibold text-cyan-600 uppercase tracking-wide uppercase'>
								Who we are
							</h2>
							<p className='mt-2 text-3xl font-extrabold text-gray-900'>
								Our mission and vision
							</p>
							<motion.dl
								className='mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-1 sm:grid-rows-3 sm:grid-flow-col
						sm:gap-x-6 sm:gap-y-10 lg:gap-x-8'
								initial='hidden'
								animate={missionControls}
								variants={missionVariant}
							>
								{missionData.map(mission => (
									<MissionItem
										key={mission.name}
										mission={mission}
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

export default Mission;

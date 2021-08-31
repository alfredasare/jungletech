import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import MissionItem from './missionItem';
import missionData from './data/missionData';
import useIntersection from '../../hooks/useIntersection';
import { missionVariant } from '../../animations';

const Mission = () => {
	const missionControls = useAnimation();

	const { ref, inView } = useInView({
		threshold: 0.6,
	});

	useIntersection(inView, '#mission');

	useEffect(() => {
		if (inView) missionControls.start('visible');
	}, [inView, missionControls]);

	return (
		<div
			ref={ref}
			id='mission'
			className='relative bg-white pt-24 pb-8 sm:py-12 lg:py-16'
		>
			<div className='mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl'>
				<h2 className='text-base font-semibold tracking-wider text-cyan-600 uppercase'>
					Who we are
				</h2>
				<p className='mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl'>
					Our mission and vision
				</p>
				<p className='mt-5 max-w-prose mx-auto text-xl text-gray-500'>
					What JungleTech stands for as a company: our vision, mission
					and values.
				</p>
				<div className='mt-12'>
					<motion.div
						className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'
						initial='hidden'
						animate={missionControls}
						variants={missionVariant}
					>
						{missionData.map(mission => (
							<MissionItem key={mission.name} mission={mission} />
						))}
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Mission;

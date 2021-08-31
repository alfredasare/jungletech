import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ImageGrid from './imageGrid';
import WorkItem from './workItem';
import works from './data/works';
import useIntersection from '../../hooks/useIntersection';
import { workListVariant } from '../../animations';

const OurWork = () => {
	const workControls = useAnimation();

	const { ref, inView } = useInView({
		threshold: 0.5,
	});

	useIntersection(inView, '#work');

	useEffect(() => {
		if (inView) {
			workControls.start('visible');
		}
	}, [inView, workControls]);

	return (
		<div ref={ref} id='work' className='bg-white'>
			<div className='max-w-2xl mx-auto py-12 px-4 sm:pt-16 sm:pb-0 sm:px-6 lg:max-w-7xl lg:px-8'>
				<div className='grid items-center grid-cols-1 gap-y-16 gap-x-8 lg:grid-cols-2'>
					<div>
						<div className='border-b border-gray-200 pb-10'>
							<h2 className='text-base font-semibold tracking-wider text-cyan-600 uppercase'>
								Our work
							</h2>
							<p className='mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
								What we do at JungleTech
							</p>
						</div>

						<motion.dl
							className='mt-10 space-y-10 w-11/12'
							initial='hidden'
							animate={workControls}
							variants={workListVariant}
						>
							{works.map(work => (
								<WorkItem key={work.name} work={work} />
							))}
						</motion.dl>
					</div>

					<ImageGrid />
				</div>
			</div>
		</div>
	);
};

export default OurWork;

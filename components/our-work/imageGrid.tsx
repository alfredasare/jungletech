import { workListVariant } from '../../animations';
import WorkItem from './workItem';
import works from './data/works';
import { AnimationControls, motion } from 'framer-motion';
import { FC } from 'react';

interface IProps {
	workControls: AnimationControls;
}

const ImageGrid: FC<IProps> = ({ workControls }) => {
	return (
		<motion.div
			className='grid items-center grid-cols-1 gap-y-0 md:gap-y-16 gap-x-32 md:grid-cols-2'
			initial='hidden'
			animate={workControls}
			variants={workListVariant}
		>
			<div className='md:mt-30 lg:mt-60'>
				<WorkItem work={works[0]} />
				<WorkItem work={works[1]} />
			</div>

			<div className='md:-mt-40 lg:-mt-60'>
				<WorkItem work={works[2]} />
				<WorkItem work={works[3]} />
			</div>
		</motion.div>
	);
};

export default ImageGrid;

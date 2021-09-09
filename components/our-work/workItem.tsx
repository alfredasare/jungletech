import type { FC } from 'react';
import { motion } from 'framer-motion';
import { Work } from './types/work';
import { workListItemVariant } from '../../animations';

interface IProps {
	work: Work;
}

const WorkItem: FC<IProps> = ({ work }) => {
	return (
		<motion.div
			key={work.name}
			variants={workListItemVariant}
			className='mt-16 md:mt-24'
		>
			<img
				className='object-cover object-center image-grid-item'
				src={work.image}
				alt={work.name}
			/>
			<h3 className='mt-7 text-xl font-medium'>{work.name}</h3>
			<h4 className='mt-1 text-md text-gray-600'>{work.description}</h4>
		</motion.div>
	);
};

export default WorkItem;

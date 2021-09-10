import type { FC } from 'react';
import { motion } from 'framer-motion';
import { Work } from './types/work';
import { workListItemVariant } from '../../animations';

interface IProps {
	work: Work;
}

const WorkItem: FC<IProps> = ({ work }) => {
	return (
		<motion.div variants={workListItemVariant} className='mt-16 md:mt-24'>
			<img
				className='object-cover object-center image-grid-item rounded-lg shadow-sm'
				src={work.image}
				alt={work.imageAlt}
			/>
			<h3 className='mt-7 text-xl font-medium text-white'>{work.name}</h3>
			<h4 className='mt-1 text-md text-gray-200'>{work.description}</h4>
		</motion.div>
	);
};

export default WorkItem;

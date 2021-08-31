import type { FC } from 'react';
import { motion } from 'framer-motion';
import { Work } from './types/work';
import { workListItemVariant } from '../../animations';

interface IProps {
	work: Work;
}

const WorkItem: FC<IProps> = ({ work }) => {
	return (
		<motion.div key={work.name} variants={workListItemVariant}>
			<dt className='text-md font-medium text-gray-900'>{work.name}</dt>
			<dd className='mt-3 text-md text-gray-500'>{work.description}</dd>
		</motion.div>
	);
};

export default WorkItem;

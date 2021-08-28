import type { FC } from 'react';
import { Work } from './types/work';

interface IProps {
	work: Work;
}

const WorkItem: FC<IProps> = ({ work }) => {
	return (
		<div key={work.name}>
			<dt className='text-md font-medium text-gray-900'>{work.name}</dt>
			<dd className='mt-3 text-md text-gray-500'>{work.description}</dd>
		</div>
	);
};

export default WorkItem;

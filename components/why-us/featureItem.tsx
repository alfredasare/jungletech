import type { FC } from 'react';
import { CheckIcon } from '@heroicons/react/outline';
import { Feature } from './types/feature';

interface IProps {
	feature: Feature;
}

const FeatureItem: FC<IProps> = ({ feature }) => {
	return (
		<div className='relative'>
			<dt>
				<CheckIcon
					className='absolute h-6 w-6 text-cyan-500'
					aria-hidden='true'
				/>
				<p className='ml-9 text-lg leading-6 font-medium text-gray-900'>
					{feature.name}
				</p>
			</dt>
			<dd className='mt-2 ml-9 text-base text-gray-500'>
				{feature.description}
			</dd>
		</div>
	);
};

export default FeatureItem;

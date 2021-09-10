import type { FC } from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/outline';
import { Feature } from './types/feature';
import { featureItemVariant } from '../../animations';

interface IProps {
	feature: Feature;
}

const FeatureItem: FC<IProps> = ({ feature }) => {
	return (
		<motion.div className='relative' variants={featureItemVariant}>
			<dt>
				<CheckIcon
					className='absolute h-6 w-6 text-cyan-500'
					aria-hidden='true'
				/>
				<p className='ml-9 text-lg leading-6 font-medium text-white'>
					{feature.name}
				</p>
			</dt>
			<dd className='mt-2 ml-9 text-base text-gray-200'>
				{feature.description}
			</dd>
		</motion.div>
	);
};

export default FeatureItem;

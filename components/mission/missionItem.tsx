import { FC } from 'react';
import { MissionType } from './types/mission';
import { motion } from 'framer-motion';
import { missionItemVariant } from '../../animations';

interface IProps {
	mission: MissionType;
}

const MissionItem: FC<IProps> = ({ mission }) => {
	return (
		<motion.div className='relative flex' variants={missionItemVariant}>
			<span
				className='h-12 inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-500
			 rounded-md shadow-lg'
			>
				<mission.icon
					className='h-6 w-6 text-white'
					aria-hidden='true'
				/>
			</span>
			<div>
				<dt>
					<p className='ml-9 text-lg leading-6 font-medium text-gray-900'>
						{mission.name}
					</p>
				</dt>
				<dd className='mt-2 ml-9 text-base text-gray-500'>
					{mission.text}
				</dd>
			</div>
		</motion.div>
	);
};

export default MissionItem;

import { FC } from 'react';
import { MissionType } from './types/mission';
import { motion } from 'framer-motion';
import { missionItemVariant } from '../../animations';

interface IProps {
	mission: MissionType;
}

const MissionItem: FC<IProps> = ({ mission }) => {
	return (
		<motion.div
			key={mission.name}
			variants={missionItemVariant}
			className='flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8 lg:items-center'
		>
			<div className='mt-6 lg:mt-0 lg:col-span-5 xl:col-span-4'>
				<h3 className='text-lg font-medium text-gray-900'>
					{mission.name}
				</h3>
				<p className='mt-2 text-md text-gray-500'>{mission.text}</p>
			</div>
			<div className='flex-auto lg:col-span-7 xl:col-span-8'>
				<div className='aspect-w-5 aspect-h-2 rounded-lg bg-gray-100 overflow-hidden'>
					<img
						src={mission.image}
						alt={mission.imageAlt}
						className='object-center object-cover'
					/>
				</div>
			</div>
		</motion.div>
	);
};

export default MissionItem;

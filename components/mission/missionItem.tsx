import { FC } from 'react';
import { MissionType } from './types/mission';
import { motion } from 'framer-motion';
import { missionItemVariant } from '../../animations';

interface IProps {
	mission: MissionType;
}

const MissionItem: FC<IProps> = ({ mission }) => {
	return (
		<motion.div className='pt-6' variants={missionItemVariant}>
			<div className='flow-root bg-gray-50 h-60 min-h-full rounded-lg px-6 pb-8'>
				<div className='-mt-6'>
					<div>
						<span className='inline-flex items-center justify-center p-3 bg-cyan-500 rounded-md shadow-lg'>
							<mission.icon
								className='h-6 w-6 text-white'
								aria-hidden='true'
							/>
						</span>
					</div>
					<h3 className='mt-8 text-lg font-medium text-gray-900 tracking-tight'>
						{mission.name}
					</h3>
					<p className='mt-5 text-base text-gray-500'>
						{mission.text}
					</p>
				</div>
			</div>
		</motion.div>
	);
};

export default MissionItem;

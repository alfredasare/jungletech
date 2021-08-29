import type { FC } from 'react';
import { Social } from './types/social';

interface IProps {
	item: Social;
}

const SocialIcon: FC<IProps> = ({ item }) => {
	return (
		<a href={item.href} className='text-gray-400 hover:text-gray-300'>
			<span className='sr-only'>{item.name}</span>
			<item.icon className='h-6 w-6' aria-hidden='true' />
		</a>
	);
};

export default SocialIcon;

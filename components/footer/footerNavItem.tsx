import type { FC } from 'react';
import { FooterItem } from './types/footerItem';

interface IProps {
	item: FooterItem;
}

const FooterNavItem: FC<IProps> = ({ item }) => {
	return (
		<div key={item.name} className='px-5 py-2'>
			<a
				href={item.href}
				className='text-base text-gray-500 hover:text-gray-300'
			>
				{item.name}
			</a>
		</div>
	);
};

export default FooterNavItem;

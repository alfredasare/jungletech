import type { Dispatch, FC, SetStateAction } from 'react';
import { FooterItem } from './types/footerItem';

interface IProps {
	item: FooterItem;
	setCurrentHash: Dispatch<SetStateAction<string>>;
}

const FooterNavItem: FC<IProps> = ({ item, setCurrentHash }) => {
	return (
		<div key={item.name} className='px-5 py-2'>
			<a
				href={item.href}
				className='text-base text-gray-500 hover:text-gray-300'
				onClick={() => setCurrentHash(item.href)}
			>
				{item.name}
			</a>
		</div>
	);
};

export default FooterNavItem;

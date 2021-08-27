import type { FC } from 'react';
import Link from 'next/link';
import { nanoid } from 'nanoid';
import { NavItems } from './types/navItems';

interface IProps {
	navigation: NavItems;
}

const DesktopNav: FC<IProps> = ({ navigation }) => {
	return (
		<div className='hidden lg:ml-6 lg:flex lg:space-x-8'>
			{navigation.map(navItem => (
				<Link key={nanoid()} href={navItem.href}>
					<a
						className={`${
							navItem.name === 'Dashboard'
								? 'desktop-nav-active'
								: 'desktop-nav-normal'
						} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
					>
						{navItem.name}
					</a>
				</Link>
			))}
		</div>
	);
};

export default DesktopNav;

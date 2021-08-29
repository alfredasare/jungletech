import { Fragment, FC } from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import { NavItems } from './types/navItems';
import Link from 'next/link';
import { nanoid } from 'nanoid';

interface IProps {
	navigation: NavItems;
}

const MobileNav: FC<IProps> = ({ navigation }) => {
	return (
		<Transition
			as={Fragment}
			enter='transition ease-out duration-100'
			enterFrom='transform opacity-0 scale-95'
			enterTo='transform opacity-100 scale-100'
			leave='transition ease-in duration-75'
			leaveFrom='transform opacity-100 scale-100'
			leaveTo='transform opacity-0 scale-95'
		>
			<Disclosure.Panel className='lg:hidden'>
				<div className='pt-2 pb-3 space-y-1'>
					{navigation.map(navItem => (
						<Link key={nanoid()} href={navItem.href}>
							<a
								className={`${
									navItem.name === 'Dashboard'
										? 'mobile-nav-active'
										: 'mobile-nav-normal'
								}  block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
							>
								<Disclosure.Button>
									{navItem.name}
								</Disclosure.Button>
							</a>
						</Link>
					))}
				</div>
			</Disclosure.Panel>
		</Transition>
	);
};

export default MobileNav;

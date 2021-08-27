import { Disclosure } from '@headlessui/react';
import MobileNav from './mobileNav';
import DesktopNav from './desktopNav';
import MenuButton from './menuButton';

const navigation = [
	{
		name: 'Dashboard',
		href: '/dash',
	},
	{
		name: 'Team',
		href: '/',
	},
	{
		name: 'Projects',
		href: '/',
	},
	{
		name: 'Calendar',
		href: '/',
	},
];

const Navbar = () => {
	return (
		<Disclosure as='nav' className='bg-white shadow'>
			{({ open }) => (
				<>
					<div className='max-w-7xl mx-auto px-2 sm:px-4 lg:px-8'>
						<div className='flex justify-between h-16'>
							<div className='flex px-2 lg:px-0 lg:justify-between lg:w-full'>
								<div className='flex-shrink-0 flex items-center'>
									<img
										className='block lg:hidden h-8 w-auto'
										src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
										alt='JungleTech'
									/>
									<img
										className='hidden lg:block h-8 w-auto'
										src='https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg'
										alt='JungleTech'
									/>
								</div>
								<DesktopNav navigation={navigation} />
							</div>
							<MenuButton isOpen={open} />
						</div>
					</div>
					<MobileNav navigation={navigation} />
				</>
			)}
		</Disclosure>
	);
};

export default Navbar;

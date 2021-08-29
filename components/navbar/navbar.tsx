import { Disclosure } from '@headlessui/react';
import MobileNav from './mobileNav';
import DesktopNav from './desktopNav';
import MenuButton from './menuButton';
import Brand from './brand';

const navigation = [
	{
		name: 'About',
		href: '#about',
	},
	{
		name: 'Mission',
		href: '#mission',
	},
	{
		name: 'Our Work',
		href: '#work',
	},
	{
		name: 'Why Us',
		href: '#why-us',
	},
];

const Navbar = () => {
	return (
		<Disclosure as='nav' className='bg-white shadow fixed w-full z-10'>
			{({ open }) => (
				<>
					<div className='max-w-7xl mx-auto px-2 sm:px-4 lg:px-8'>
						<div className='flex justify-between h-16'>
							<div className='flex px-2 lg:px-0 lg:justify-between lg:w-full'>
								<Brand />
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

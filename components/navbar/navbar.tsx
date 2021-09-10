import { useState, useEffect, useContext } from 'react';
import { Disclosure } from '@headlessui/react';
import MobileNav from './mobileNav';
import DesktopNav from './desktopNav';
import MenuButton from './menuButton';
import Brand from './brand';
import { NavContext } from '../../context/NavProvider';

const Navbar = () => {
	const { currentHash, setCurrentHash, navigation } = useContext(NavContext);

	return (
		<Disclosure as='nav' className='bg-white shadow fixed w-full z-50'>
			{({ open }) => (
				<>
					<div className='max-w-7xl mx-auto px-2 sm:px-4 lg:px-8'>
						<div className='flex justify-between h-16'>
							<div className='flex px-2 lg:px-0 lg:justify-between lg:w-full'>
								<Brand setCurrentHash={setCurrentHash} />
								<DesktopNav
									navigation={navigation}
									currentHash={currentHash}
									setCurrentHash={setCurrentHash}
								/>
							</div>
							<MenuButton isOpen={open} />
						</div>
					</div>
					<MobileNav
						navigation={navigation}
						currentHash={currentHash}
						setCurrentHash={setCurrentHash}
					/>
				</>
			)}
		</Disclosure>
	);
};

export default Navbar;

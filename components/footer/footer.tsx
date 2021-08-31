import SocialIcon from './socialIcon';
import FooterNavItem from './footerNavItem';
import footerData from './data/footerData';
import { useContext } from 'react';
import { NavContext } from '../../context/NavProvider';

const Footer = () => {
	const { setCurrentHash } = useContext(NavContext);
	const date = new Date().getFullYear();

	return (
		<footer className='bg-gray-900'>
			<div className='max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8'>
				<nav
					className='-mx-5 -my-2 flex flex-wrap justify-center'
					aria-label='Footer'
				>
					{footerData.main.map(item => (
						<FooterNavItem
							key={item.name}
							item={item}
							setCurrentHash={setCurrentHash}
						/>
					))}
				</nav>
				<div className='mt-8 flex justify-center space-x-6'>
					{footerData.social.map(item => (
						<SocialIcon key={item.name} item={item} />
					))}
				</div>
				<p className='mt-8 text-center text-base text-gray-400'>
					&copy; {date} JungleTech. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;

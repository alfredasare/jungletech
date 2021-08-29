import type { Dispatch, FC, SetStateAction } from 'react';
import Link from 'next/link';

interface IProps {
	setCurrentHash: Dispatch<SetStateAction<string>>;
}

const Brand: FC<IProps> = ({ setCurrentHash }) => {
	const handleSetCurrentHash = () => {
		setCurrentHash('');
		window && window.scrollTo(0, 0);
	};

	return (
		<div className='flex-shrink-0 flex items-center'>
			<Link href='/'>
				<a onClick={handleSetCurrentHash}>
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
				</a>
			</Link>
		</div>
	);
};

export default Brand;

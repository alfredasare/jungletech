import { LocationMarkerIcon } from '@heroicons/react/outline';

const OfficeLocation = () => {
	return (
		<a
			href='https://goo.gl/maps/m6Bu7B12gh5vyaQe9'
			target='_blank'
			rel='noreferrer'
		>
			<div className='flex text-gray-500 hover:text-gray-700'>
				<div className='flex-shrink-0'>
					<LocationMarkerIcon
						className='h-6 w-6'
						aria-hidden='true'
					/>
				</div>
				<div className='ml-3 text-base'>
					<p>14 Senchi Street, Accra</p>
					<p className='mt-1'>Mon-Fri 8am to 5pm GMT</p>
				</div>
			</div>
		</a>
	);
};

export default OfficeLocation;

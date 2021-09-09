import { MailIcon, PhoneIcon } from '@heroicons/react/outline';

const EmailPhone = () => {
	return (
		<>
			<div className='flex text-gray-200 hover:text-white'>
				<div className='flex-shrink-0'>
					<PhoneIcon className='h-6 w-6' aria-hidden='true' />
				</div>
				<div className='ml-3 text-base'>
					<a
						className='hover:underline'
						href='tel:+972 54-657-4233'
						target='_blank'
						rel='noreferrer'
					>
						<p>+972 54-657-4233</p>
					</a>
					<a
						className='mt-1 hover:underline'
						href='tel:+233262644774'
						target='_blank'
						rel='noreferrer'
					>
						<p>+233 26-264-4774</p>
					</a>
				</div>
			</div>
			<a
				href='mailto:info@jungletech.io'
				target='_blank'
				rel='noreferrer'
			>
				<div className='mt-6 flex text-gray-200 hover:text-white'>
					<div className='flex-shrink-0'>
						<MailIcon className='h-6 w-6' aria-hidden='true' />
					</div>
					<div className='ml-3 text-base'>
						<p>info@jungletech.io</p>
					</div>
				</div>
			</a>
		</>
	);
};

export default EmailPhone;

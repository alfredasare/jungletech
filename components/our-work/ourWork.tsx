const features = [
	{
		name: 'Software Developers Recruitment',
		description: 'We recruit topnotch developers for customers globally.',
	},
	{
		name: 'Software Development Hub',
		description:
			'We train and manage software developers in our well equipped hubs for seamless operations.',
	},
	{
		name: 'Software Development',
		description:
			'We develop applications to global standards using best skills around the world.',
	},
	{
		name: 'Consultancy',
		description:
			'We provide technology business consultancy services in Africa for companies around the world.',
	},
];

const OurWork = () => {
	return (
		<div className='bg-white'>
			<div className='max-w-2xl mx-auto py-12 px-4 sm:pt-16 sm:pb-0 sm:px-6 lg:max-w-7xl lg:px-8'>
				<div className='grid items-center grid-cols-1 gap-y-16 gap-x-8 lg:grid-cols-2'>
					<div>
						<div className='border-b border-gray-200 pb-10'>
							<h2 className='text-base font-semibold tracking-wider text-cyan-600 uppercase'>
								Our work
							</h2>
							<p className='mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
								What we do at JungleTech
							</p>
						</div>

						<dl className='mt-10 space-y-10 w-11/12'>
							{features.map(feature => (
								<div key={feature.name}>
									<dt className='text-md font-medium text-gray-900'>
										{feature.name}
									</dt>
									<dd className='mt-3 text-md text-gray-500'>
										{feature.description}
									</dd>
								</div>
							))}
						</dl>
					</div>

					<div>
						<div className='aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden'>
							<img
								src='images/developer.jpg'
								alt='Developer on phone call.'
								className='w-full h-full object-center object-cover'
							/>
						</div>
						<div className='grid grid-cols-2 gap-4 mt-4 sm:gap-6 sm:mt-6 lg:gap-8 lg:mt-8'>
							<div className='aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden'>
								<img
									src='images/lagos-techie.jpg'
									alt='Woman explaining something to fellow worker.'
									className='w-full h-full object-center object-cover'
								/>
							</div>
							<div className='aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden'>
								<img
									src='images/collaboration.jpg'
									alt='3 developers collaborating.'
									className='w-full h-full object-center object-cover'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OurWork;

import { CheckIcon } from '@heroicons/react/outline';

const features = [
	{
		name: 'Experience',
		description:
			'Experienced providing top-notch developers for world class companies.',
	},
	{
		name: 'Management',
		description:
			'We’ve developed Developer-centric management acumen, ensuring continued motivation of developers and ' +
			'longevity with clients.',
	},
	{
		name: 'Results',
		description: 'We make things happen.',
	},
];

const WhyUs = () => {
	return (
		<div className='bg-white'>
			<div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:pt-28 lg:pb-0 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8'>
				<div>
					<h2 className='text-base font-semibold text-cyan-600 uppercase tracking-wide'>
						Why us?
					</h2>
					<p className='mt-2 text-3xl font-extrabold text-gray-900'>
						The reason to choose JungleTech
					</p>
					<p className='mt-4 text-lg text-gray-500'>
						Why you should go with JungleTech and not other agencies
					</p>
				</div>
				<div className='mt-12 lg:mt-0 lg:col-span-1'>
					<dl className='space-y-10 sm:space-y-0 sm:grid sm:grid-cols-1 sm:grid-rows-4 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8'>
						{features.map(feature => (
							<div key={feature.name} className='relative'>
								<dt>
									<CheckIcon
										className='absolute h-6 w-6 text-cyan-500'
										aria-hidden='true'
									/>
									<p className='ml-9 text-lg leading-6 font-medium text-gray-900'>
										{feature.name}
									</p>
								</dt>
								<dd className='mt-2 ml-9 text-base text-gray-500'>
									{feature.description}
								</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</div>
	);
};

export default WhyUs;

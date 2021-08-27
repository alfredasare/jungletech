import { EyeIcon } from '@heroicons/react/outline';
import Rocket from '../svg/mission/rocket';
import Gem from '../svg/mission/gem';

const features = [
	{
		name: 'Vision',
		icon: EyeIcon,
		text: `To become the preferred Software Development Outsourcing destination of choice for customers globally.`,
	},
	{
		name: 'Mission',
		icon: Rocket,
		text: `To employ tried and tested acumen to create an ecosystem that fosters the integration and
				development of top-notch developers`,
	},
	{
		name: 'Relevance',
		icon: Gem,
		text: `Creating a new African Value`,
	},
];

const Mission = () => {
	return (
		<div className='relative bg-white pt-24 pb-8 sm:py-12 lg:py-16'>
			<Rocket />
			<div className='mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl'>
				<h2 className='text-base font-semibold tracking-wider text-cyan-600 uppercase'>
					Who we are
				</h2>
				<p className='mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl'>
					Our mission and vision
				</p>
				<p className='mt-5 max-w-prose mx-auto text-xl text-gray-500'>
					What JungleTech stands for as a company: our vision, mission
					and values.
				</p>
				<div className='mt-12'>
					<div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
						{features.map(feature => (
							<div key={feature.name} className='pt-6'>
								<div className='flow-root bg-gray-50 h-60 min-h-full rounded-lg px-6 pb-8'>
									<div className='-mt-6'>
										<div>
											<span className='inline-flex items-center justify-center p-3 bg-cyan-500 rounded-md shadow-lg'>
												<feature.icon
													className='h-6 w-6 text-white'
													aria-hidden='true'
												/>
											</span>
										</div>
										<h3 className='mt-8 text-lg font-medium text-gray-900 tracking-tight'>
											{feature.name}
										</h3>
										<p className='mt-5 text-base text-gray-500'>
											{feature.text}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Mission;

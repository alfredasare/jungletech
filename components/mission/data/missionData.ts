import { EyeIcon } from '@heroicons/react/outline';
import Rocket from '../../svg/mission/rocket';
import Gem from '../../svg/mission/gem';

const missionData = [
	{
		name: 'Vision',
		icon: EyeIcon,
		text: `To become the preferred Software Development Outsourcing destination of choice for customers globally.`,
		image: '/images/vision.jpg',
		imageAlt:
			'Printed photo of bag being tossed into the sky on top of grass.',
	},
	{
		name: 'Mission',
		icon: Rocket,
		text: `To employ tried and tested acumen to create an ecosystem that fosters the integration and
				development of top-notch developers`,
		image: '/images/mission.jpg',
		imageAlt:
			'Printed photo of bag being tossed into the sky on top of grass.',
	},
	{
		name: 'Relevance',
		icon: Gem,
		text: `Creating a new African Value`,
		image: '/images/value.jpg',
		imageAlt:
			'Printed photo of bag being tossed into the sky on top of grass.',
	},
];

export default missionData;

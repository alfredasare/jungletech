export const testimonialVariant = {
	hidden: {
		x: -100,
		opacity: 0,
	},
	visible: {
		x: 0,
		opacity: 1,
		transition: {
			stiffness: 40,
			type: 'spring',
		},
	},
};

export const aboutContentVariant = {
	hidden: {
		opacity: 0,
		scale: 0.9,
	},
	visible: {
		opacity: 1,
		scale: 1.0,
		transition: {
			duration: 0.4,
		},
	},
};

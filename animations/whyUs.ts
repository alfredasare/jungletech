export const featureVariant = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.095,
		},
	},
};

export const featureItemVariant = {
	hidden: {
		opacity: 0,
		x: 5,
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 1,
		},
	},
};

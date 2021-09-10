export const missionVariant = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.595,
		},
	},
};

export const missionItemVariant = {
	hidden: {
		opacity: 0,
		x: -5,
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 1,
		},
	},
};

const colors = require('tailwindcss/colors');

module.exports = {
	purge: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
			},
			colors: {
				rose: colors.rose,
				teal: colors.teal,
				cyan: colors.cyan,
			},
			spacing: {
				'screen-plus': '105vh',
			},
			gridTemplateColumns: {
				custom: '0.8fr 1fr',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/aspect-ratio')],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'./src/app/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				aclonica: ['var(--aclonica-font)'],
				inter: ['var(--inter-font)'],
			},
			colors: {
				green: '#93ff0a',
				darkGray: '#181a20',
				white: 'whitesmoke',
			},
		},
	},
	plugins: [],
};

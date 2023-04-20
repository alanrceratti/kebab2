/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
		"./src/app/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		screens: {
			sm: "768px",
			// => @media (min-width: 768px) { ... }

			md: "1024px",
			// => @media (min-width: 1024px) { ... }

			lg: "1280px",
			// => @media (min-width: 1280px) { ... }

			xl: "1440px",
			// => @media (min-width: 1536px) { ... }
		},
		extend: {
			fontFamily: {
				aclonica: ["var(--aclonica-font)"],
				inter: ["var(--inter-font)"],
			},
			colors: {
				green: "#93ff0a",
				darkGray: "#181a20",
				white: "whitesmoke",
			},
		},
	},
	plugins: [
		function ({ addVariant }) {
			addVariant("current", "&.active");
		},
	],
};

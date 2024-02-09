/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			gridTemplateColumns: {
				"auto-fill-200": "repeat(auto-fit, minmax(120px, auto))",
				"auto-fill-223": "repeat(auto-fit, minmax(223px, auto))",
				"auto-fill-280": "repeat(auto-fit, minmax(280px, auto))",
				"auto-fill-348": "repeat(auto-fit, minmax(348px, auto))",
			},
		},
	},
	plugins: [],
	darkMode: "class",
};

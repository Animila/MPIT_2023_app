/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./App.{js,jsx,ts,tsx}', './app/**/*.{js,jsx,ts,tsx}'],

	theme: {
		extend: {
			colors: {
				winter_1: '#012E4A',
				winter_2: '#1A6FEE',
				winter_3: '#036280',
				winter_4: '#378BA4',
				winter_5: '#81BECE',
				sun_1: '#F9D71C',
				sun_2: '#FCE2AD',
				sun_3: '#76AC00',
				sun_4: '#ACDA4A',
				sun_5: '#66DBFE',
				black: '#000',
				white: '#fff',
			},
			fontFamily: {
				sans: ['Roboto-Regular', 'sans-serif'],
				'sans-bold': ['Roboto-Bold', 'sans-serif'],
			},
		},
	},
	plugins: [],
}

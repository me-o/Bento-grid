/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				DMSans: ['"DM Sans"', 'sans-serif'],
			},
			colors: {
				'purple-100': 'hsl(254, 88%, 90%)',
				'purple-500': 'hsl(256, 67%, 59%)',
				'yellow-100': 'hsl(31, 66%, 93%)',
				'yellow-500': 'hsl(39, 100%, 71%)',
				black: 'hsl(0, 0%, 7%)',
				White: 'hsl(0, 0%, 100%)',
			},
			screens: {
				mobile: '375px',
				desktop: '1440px',
			},
			minWidth: {
				mobile: '375px',
				desktop: '1440px',
			},
		},
	},
	plugins: [],
};

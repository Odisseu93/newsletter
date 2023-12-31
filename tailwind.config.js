/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			primary: {
				tomato: 'hsl(4, 100%, 67%)',
			},
			neutral: {
				'dark-slate-grey': 'hsl(234, 29%, 20%)',
				'charcoal-grey': 'hsl(235, 18%, 26%)',
				grey: 'hsl(231, 7%, 60%)',
				white: 'hsl(0, 0%, 100%)',
			},
		},
		screens: {
			'mobile': '375px',
			'desktop': '1440px'
		},
		extend: {
			backgroundImage: {
				'linear-gradient-tomato': 'linear-gradient(to right, #d38312, #a83279)'
			}
		},
	},
	plugins: [],
}

const colors = require('tailwindcss/colors')

module.exports = {
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
		defaultLineHeights: true,
		standardFontWeights: true,
	},
	mode: 'jit',
	darkMode: 'media',
	purge: {
		content: ['./src/**/*.html', './src/**/*.{tsx,html,js,jsx}'],
		options: {
			safelist: {
				standard: [/space-(x|y)-.+/],
			},
		},
	},
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',

			page: {
				DEFAULT: 'var(--material-page)',
				raised: 'var(--material-raised)',
			},

			ink: 'var(--text-primary)',
			muted: 'var(--text-muted)',

			black: colors.black,
			white: colors.white,
			gray: colors.warmGray,
			red: colors.red,
			yellow: colors.amber,
			orange: colors.orange,
			green: colors.green,
			blue: colors.blue,
			indigo: colors.indigo,
			purple: colors.violet,
			pink: colors.pink,
		},
		extend: {
			screens: {
				'content-xs': '20rem',
				'content-sm': '24rem',
				'content-md': '28rem',
				'content-lg': '32rem',
			},
			spacing: {
				'2px': '2px',
				'3px': '3px',
				'4px': '4px',
				'1/2': '50%',
				'2/3': '66.666%',
				'3/4': '75%',
				'7/8': '87.5%',
				full: '100%',
			},
		},
	},
	plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}

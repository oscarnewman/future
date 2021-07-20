const colors = require('tailwindcss/colors')

module.exports = {
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
		defaultLineHeights: true,
		standardFontWeights: true,
	},
	mode: 'jit',
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
			green: colors.lime,
			blue: colors.blue,
			indigo: colors.indigo,
			purple: colors.violet,
			pink: colors.pink,
			brown: {
				50: '#fdf7f1',
				100: '#FFF6DF',
				200: '#F8EEDB',
				300: '#ebbf99',
				400: '#dea373',
				500: '#ce864f',
				600: '#A1724E',
				700: '#8c501c',
				800: '#5c340f',
				900: '#482307',
			},
		},
		extend: {
			fontFamily: {
				sans: `'Karla', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
			},
			boxShadow: {
				'offset-black': '2px 2px black',
				button:
					'-6px 8px 10px rgba(81, 41, 10, 0.1), 0px 2px 2px rgba(81, 41, 10, 0.2)',
				'button-active':
					'-1px 2px 5px rgba(81, 41, 10, 0.15), 0px 1px 1px rgba(81, 41, 10, 0.15)',
			},
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

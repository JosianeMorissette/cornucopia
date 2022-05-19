const defaultTheme = require('tailwindcss/defaultTheme');
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['Lexend', ...defaultTheme.fontFamily.sans]
			}
		}
	},

	plugins: [require('@tailwindcss/typography'), require('daisyui')],

	daisyui: {
		// https://daisyui.com/docs/add-themes/
		themes: [
			{
				mytheme: {
					primary: '#ffc029ff' /* primary color */,
					'primary-focus': '#e9a30cff' /* primary color - focused */,
					'primary-content': '#080702ff' /* Foreground content color to use on primary color */,

					secondary: '#a855f7ff' /* secondary color */,
					'secondary-focus': '#8617f7ff' /* secondary  color - focused */,
					'secondary-content': '#080702ff' /* Foreground content color to use on secondary color */,

					accent: '#825f03ff' /* Accent color */,
					'accent-focus': '#684603ff' /* Accent color - focused */,
					'accent-content': '#080702ff' /* Foreground content color to use on accent color */,

					neutral: '#080702ff' /* Neutral color */,
					'neutral-focus': '#11224f' /* Neutral color - focused */,
					'neutral-content': '#f4f5ff' /* Foreground content color to use on neutral color */,

					'base-100': '#fcfdfd' /* Base color of page, used for blank backgrounds */,
					'base-200': '#f3f4f6' /* Base color, a little darker */,
					'base-300': '#d1d5db' /* Base color, even more darker dcdfe6 */,
					'base-content': '#111827' /* Foreground content color to use on base color */,

					info: '#2094f3' /* Info */,
					success: '#61a744ff' /* Success */,
					warning: '#ff9900' /* Warning */,
					error: '#e63023ff' /* Error */
				}
			}
		]
	}
};

module.exports = config;

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			'espejo':'#06194441',
			'espejoclaro':'#ffffff00',
			'oscur':'#000524',
			'letraoscura':'#0c0222',
			'primari': '#fefce8',
			'letra': '#bbff00',
			'sombral':'#ffffff59',
			'sombrad':'#1e1b4b',
			'degradadoclaro':'#060113',
			'degradadooscuro':'#fcfcff15',
			'luz':'#0346ff',
			'luz1':'#0cff69',
			//colores tema claro
			'claro':'#fff'
		},
		extend: {},
	},
	plugins: [],
}

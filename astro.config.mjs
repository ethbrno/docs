import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.ethbrno.cz',
	integrations: [
		starlight({
			title: 'ETHBrno Docs',
			social: {
				github: 'https://github.com/ethbrno',
			},
			customCss: [
				'./src/styles/custom.css',
			],
			sidebar: [
				{
					label: 'Basics',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'What is ETHBrno?', link: '/' },
						{ label: 'Why Brno?', link: '/why-brno' },
					],
				},
				{
					label: 'Current edition (2024)',
					autogenerate: { directory: '/events/2024' },
				},
				{
					label: 'Past events',
					collapsed: true,
					items: [
						{ label: 'ETHBrno² (2022)', link: '/events/2022' },
						{ 
							label: 'ETHBrno (2021)',
							autogenerate: { directory: '/events/2021' },
						},
					],
				},
			],
		}),
	],
});

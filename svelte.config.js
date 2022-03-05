import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
            // default options are shown
            pages: 'docs',
            assets: 'docs',
            fallback: null
        }),
		paths: {
			base: '/hackhub2022_stutracker'
		}
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;

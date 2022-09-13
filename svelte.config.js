import adapter from '@sveltejs/adapter-auto';

export default {
	kit: {
		adapter: adapter(),
		alias: {
			$db: 'dbschema/edgeql-js'
		},

		methodOverride: {
			allowed: ['PUT', 'DELETE']
		}
	}
};

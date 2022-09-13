import { json } from '@sveltejs/kit';

import e from '$db';
import { client } from '$lib/edgedb';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function POST({ request, locals }) {
	if (!locals.user) {
		throw error(401);
	}
	
	const form = await request.formData();

	await e
		.insert(
			e.Article, 
			{
				'title': form.get('title'),
				'description': form.get('description'),
				'body': form.get('body'),
				'tagList': form.get('tagList').split(/[\t\n, ]+/),
				'createdAt': new Date(),
				'updatedAt': new Date(),
				'favorited': false,
				'favoritesCount': 0,
				'author': {
					username: 'fran22',
					bio: null,
					image: 'https://api.realworld.io/images/smiley-cyrus.jpeg',
					following: false
				}
			} 
		)
		.run(client);

		return {};
}

import { json } from '@sveltejs/kit';
import * as api from '$lib/api';
import { page_size } from '$lib/constants';

import e from '$db';
import { client } from '$lib/edgedb';

export async function GET({ url: { searchParams }, locals }) {
	const articles = await e
	.select(e.Article, (todo) => ({
		id: true,
		slug: true,
		title: true,
		description: true,
		body: true,
		tagList: true,
		createdAt: true,
		updatedAt: true,
		favorited: true,
		favoritesCount: true,
		author: true
	}))
	.run(client);

	return json({
		articles,
		pages: 1
	});
	
}

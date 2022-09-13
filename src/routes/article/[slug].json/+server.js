import { error, json } from '@sveltejs/kit';
import * as api from '$lib/api.js';
import e from '$db';
import { client } from '$lib/edgedb';


export async function GET({ params, locals }) {
	const { slug } = params;
	
	const article = await e
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
		author: true,
		filter: e.op(todo.slug, '=', slug)
	}))
	.run(client);

	

	return json(article.shift());
}

export async function PUT({ params, request, locals }) {
	const form = await request.formData();
	const slug = params.slug ;

	const res = await api.put(
		`articles/${slug}`,
		{
			article: {
				title: form.get('title'),
				description: form.get('description'),
				body: form.get('body'),
				tagList: form.get('tagList').split(/[\t\n, ]+/)
			}
		},
		locals.user && locals.user.token
	);

	if (res?.errors) {
		throw error(400, res.errors);
	}

	return json(res.article);
}

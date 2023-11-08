import { generateRandomCombination as generateRandomString } from '$lib/random';
import { redirect } from '@sveltejs/kit';
import { forms } from '../db/forms';
import type { Actions } from './$types';

export const actions = {
	// POST - create a new form and redirect to the admin page
	default: async () => {
		console.log('Inserting new form.');
		const adminKey = generateRandomString(20);

		forms.insertOne({
			key: generateRandomString(5),
			adminKey
		});

		throw redirect(303, `/admin/${adminKey}?fresh`);
	}
} satisfies Actions;

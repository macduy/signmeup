
import { generateRandomCombination as generateRandomString } from "$lib/random";
import { redirect } from "@sveltejs/kit";
import { forms } from "../db/forms";
import type { PageServerLoad } from './$types'
import type { Actions } from './$types';

export const load: PageServerLoad = async function() {
	const data = await forms.find({}, {limit: 50, projection: {
        _id: 0,
		title: 1
	}}).toArray();

	return {
		tutorials: data
	}
}

export const actions = {
	// POST - create a new form and redirect to the admin page
	default: async () => {
		console.log("Inserting new form.");
		const adminKey = generateRandomString(20);

        forms.insertOne({
            key: generateRandomString(5),
            adminKey,
        });

		throw redirect(303, `/admin/${adminKey}`)
	},
} satisfies Actions;
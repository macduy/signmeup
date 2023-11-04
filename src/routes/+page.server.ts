
import { generateRandomCombination as generateRandomString } from "$lib/random";
import { forms } from "../db/forms";
import type { PageServerLoad } from './$types'
import type { Actions } from './$types';

export const load: PageServerLoad = async function() {
	const data = await forms.find({}, {limit: 50, projection: {
        _id: 0,
		title: 1
	}}).toArray();

    console.log("Fetched ", data);

	return {
		tutorials: data
	}
}


export const actions = {
	default: async () => {
		console.log("Inserting new form.");

        forms.insertOne({
            key: generateRandomString(5),
            adminKey: generateRandomString(20),
        });
	},
} satisfies Actions;
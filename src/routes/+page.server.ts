import { tutorials } from "../db/tutorials";
import type {PageServerLoad} from './$types'

export const load: PageServerLoad = async function() {
	const data = await tutorials.find({}, {limit: 50, projection: {
        _id: 0,
		title: 1
	}}).toArray();

    console.log("Fetched ", data);

	return {
		tutorials: data
	}
}
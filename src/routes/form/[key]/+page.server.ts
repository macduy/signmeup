
import { forms } from "../../../db/forms";
import { responses } from "../../../db/responses";
import type { Actions, PageServerLoad } from './$types'

export const load: PageServerLoad = async function({ params }) {
	const data = await forms.findOne({ key: params.key }, {limit: 50, projection: {
        _id: 0
	}});

    if (!data) {
        return {
            form: null
        }
    }

	return {
		form: {
            key: data.key
        }
	}
}

// POST
export const actions = {
	default: async ({ params, request }) => {
		console.log("Inserting new response.");

        const data = await request.formData();

        const email = data.get("email") ?? "";
        if (email instanceof File) {
            throw "Unexpected file"
        }

        responses.insertOne({
            key: params.key,
            email,
        })
	},
} satisfies Actions;
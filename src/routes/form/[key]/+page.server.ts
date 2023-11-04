
import { forms } from "../../../db/forms";
import type { PageServerLoad } from './$types'

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

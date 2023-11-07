import type { PageServerLoad } from './$types';
import { forms } from '../../../db/forms';
import { responses } from '../../../db/responses';

export const ssr = false;

export const load: PageServerLoad = async function ({ params }) {
	const form = await forms.findOne(
		{ adminKey: params.adminKey },
		{
			limit: 50,
			projection: {
				_id: 0
			}
		}
	);

	if (!form) {
		throw 'Form not found';
	}

	const responseList = await responses
		.find(
			{ key: form.key },
			{
				projection: {
					_id: 0
				}
			}
		)
		.toArray();

	return {
		form: form,
		responses: responseList
	};
};

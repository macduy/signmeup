import type { Actions, PageServerLoad } from './$types';
import { forms, type SignUpForm } from '../../../db/forms';
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

	console.log(form);

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

// POST
export const actions = {
	default: async ({ params, request }) => {
		console.log('Updating form.');

		const data = await request.formData();
		const title = data.get('title');

		const updates: Partial<SignUpForm> = {};

		if (title !== null && typeof title === 'string') {
			updates.title = title;
		}

		forms.updateOne({ adminKey: params.adminKey }, { $set: updates });
	}
} satisfies Actions;

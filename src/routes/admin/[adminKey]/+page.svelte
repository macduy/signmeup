<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import BookmarkPopover from '../../../BookmarkPopover.svelte';
	import Popover from '../../../Popover.svelte';

	let host = window.location.host;

	export let data: PageData;

	$: fullAdminLink = `${host}/admin/${data.form?.adminKey}`;
	$: formLink = `/form/${data.form?.key}`;
	$: fullFormLink = `${host}/form/${data.form?.key}`;
</script>

<div class="container p-3">
	<div class="card bg-primary text-primary-content">
		<div class="card-body">
			<h2 class="card-title">You've created your list! What's next?</h2>
			<ol class="list-outside list-decimal ml-4">
				<li class="mb-3 mt-3">
					<b>Keep this link to yourself</b>
					<input
						type="text"
						placeholder="Type here"
						class="input w-full text-black"
						value={fullAdminLink}
					/>
					<ul class="list-inside list-disc">
						<li>
							<b>Keep it secret!</b> This link allows you to administer this list, including viewing
							responses
						</li>
						<li>
							Bookmark it or <a
								target="_blank"
								href="mailto:?subject=Link to administer my SignUp1.click list&body=Link: {fullAdminLink}"
								>mail it to yourself</a
							>
						</li>
					</ul>
				</li>
				<li>
					<b>Share this one</b>
					<div class="flex gap-4">
						<a href={formLink} target="_blank" class="flex-grow">
							<input
								type="text"
								placeholder="Type here"
								class="input w-full text-black"
								value={fullFormLink}
							/>
						</a>
						<button class="btn">Copy to clipboard</button>
					</div>
				</li>
			</ol>
		</div>
	</div>

	<div>
		Responses:
		{JSON.stringify(data.responses)}
	</div>
</div>

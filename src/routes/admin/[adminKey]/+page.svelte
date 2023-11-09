<script lang="ts">
	import InputWithCopy from '../../../InputWithCopy.svelte';
	import Form from '../../../Form.svelte';
	import type { PageData } from './$types';
	import { enhance } from '$app/forms';

	const urlParams = new URLSearchParams(window.location.search);
	const isFresh = urlParams.has('fresh');

	let host = window.location.host;

	export let data: PageData;

	$: fullAdminLink = `${host}/admin/${data.form?.adminKey}`;
	$: fullFormLink = `${host}/form/${data.form?.key}`;
</script>

<div class="container p-3">
	<div
		class="collapse collapse-arrow bg-primary text-primary-content {isFresh ? 'collapse-open' : ''}"
	>
		<input type="checkbox" />
		<div class="collapse-title text-xl font-medium">
			<h2 class="card-title">
				{#if isFresh}
					You've created your list! What's next?
				{:else}
					Important links
				{/if}
			</h2>
		</div>
		<div class="collapse-content">
			<ol class="list-outside list-decimal ml-4">
				<li class="mb-6 mt-3">
					<div class="flex flex-col gap-4">
						<b>Keep this link to yourself</b>
						<InputWithCopy text={fullAdminLink} />

						<ul class="list-outside ml-4 list-disc">
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
					</div>
				</li>
				<li>
					<div class="flex flex-col gap-4">
						<b>Share this one</b>
						<InputWithCopy text={fullFormLink} />
					</div>
				</li>
			</ol>
		</div>
	</div>

	<h2 class="text-xl">Customize</h2>
	<div class="flex flex-col sm:flex-row">
		<div class="w-1/2">
			<form method="POST" use:enhance>
				<div class="form-control w-full max-w-xs">
					<label class="label" for="title">
						<span class="label-text">Title:</span>
					</label>
					<input
						type="text"
						name="title"
						placeholder="Form title"
						class="input input-bordered w-full"
						value={data.form.title}
					/>
					<button class="btn btn-accent mt-4">Update</button>
				</div>
			</form>
		</div>
		<div class="w-1/2 relative">
			<div class="mockup-browser border bg-base-300 shadow-lg">
				<div class="mockup-browser-toolbar">
					<div class="input">{fullFormLink}</div>
				</div>
				<div class="p3">
					<div class="bg-base-100">
						<div class="card-body">
							<Form form={data.form} />
						</div>
					</div>
				</div>
			</div>
			<div class="absolute h-full w-full" />
		</div>
	</div>

	<div>
		Responses:
		{JSON.stringify(data.responses)}
	</div>
</div>

<script context="module">
	export const ssr = false;
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import BookmarkPopover from '../../../BookmarkPopover.svelte';
	import Popover from '../../../Popover.svelte';

	let host = '';

	export let data: PageData;

	onMount(() => {
		host = window.location.host;
	});
</script>

<div class="container p-3">
	<h1>Admin: {data.form?.key}</h1>

	<div class="card w-96 bg-primary text-primary-content">
		<div class="card-body">
			<div>
				Admin Link
				<a href="/admin/{data.form?.adminKey}">
					<input
						type="text"
						placeholder="Type here"
						class="input w-full max-w-xs"
						value="{host}/admin/{data.form?.adminKey}"
					/>
				</a>
				<BookmarkPopover />

				<Popover>
					<div
						class="font-semibold p-3 mb-0 border-b border-solid border-blueGray-100 rounded-t-lg"
					>
						Title
					</div>
					<div class="p-3">And here's some amazing content. It's very engaging. Right?</div>
				</Popover>
			</div>

			<div>
				Link:
				<a href="/form/{data.form?.key}" target="_blank">
					<input
						type="text"
						placeholder="Type here"
						class="input w-full max-w-xs"
						value="{host}/form/{data.form?.key}"
					/>
				</a>
			</div>
		</div>
	</div>

	<div>
		{JSON.stringify(data.responses)}
	</div>
</div>

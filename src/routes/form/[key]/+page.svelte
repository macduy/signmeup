<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="container p-3">
	<form method="POST">
		<div class="form-control w-full max-w-xs">
			<label class="label" for="name">
				<span class="label-text">Your name:</span>
			</label>
			<input type="text" name="name" placeholder="Your name" class="input input-bordered w-full" />
		</div>

		<div class="form-control w-full max-w-xs">
			<label class="label" for="email">
				<span class="label-text">Your email address:</span>
			</label>
			<input
				type="email"
				name="email"
				placeholder="Your email"
				class="input input-bordered w-full"
			/>
		</div>

		<button class="btn btn-accent mt-4">Submit</button>
	</form>
</div>

<!--
  @component

  Displays an input field (disabled) with a Copy to Clipboard button.
 -->
<script lang="ts">
	export let text: string;

	let copied = false;
	let resetTimer: ReturnType<typeof setTimeout>;

	async function onCopy() {
		await navigator.clipboard.writeText(text);

		copied = true;
		clearTimeout(resetTimer);
		resetTimer = setTimeout(() => (copied = false), 3000);
	}
</script>

<div class="flex gap-4">
	<div class="flex-grow">
		<input
			type="text"
			placeholder="Type here"
			class="input w-full input-text"
			disabled
			value={text}
		/>
	</div>
	<button class="btn w-40" on:click={onCopy}>
		{#if copied}
			Copied!
		{:else}
			Copy to clipboard
		{/if}
	</button>
</div>

<style>
	.input-text {
		color: black !important;
		cursor: default;
	}
</style>

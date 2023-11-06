<script lang="ts">
	import { createPopper } from '@popperjs/core';

	let popoverShow = false;
	let btnRef: HTMLButtonElement;
	let popoverRef: HTMLDivElement;

	function togglePopover() {
		if (popoverShow) {
			popoverShow = false;
		} else {
			popoverShow = true;
			createPopper(btnRef, popoverRef, {
				placement: 'bottom'
			});
		}
	}
</script>

<div class="flex flex-wrap">
	<div class="w-full text-center">
		<button bind:this={btnRef} on:click={togglePopover} class="btn" type="button">
			Add Bookmark
		</button>
		<div
			bind:this={popoverRef}
			class="text-black transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-lg mt-3 {popoverShow
				? 'block'
				: 'hidden'}"
		>
			<div>
				<slot />
			</div>
		</div>
	</div>
</div>

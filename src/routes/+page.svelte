<script>
	import Feature from '../Feature.svelte';
</script>

<div class="text-center">
	<div class="mt-72" />
	<h1 class="p-6 text-5xl font-agbalumo">One-click Sign up lists</h1>

	<div class="mt-5">Ridiculously simple sign up lists.</div>

	<!-- <div class="mt-5">Create a list with just 1 click.</div> -->

	<form method="POST" class="mt-10">
		<button class="btn btn-accent text-lg">
			<i class="fa-solid fa-wand-magic-sparkles" />
			Create my list
		</button>
	</form>
</div>

<div class="mt-32" />

<div class="columns-1 md:columns-3 mt-8 gap-20 p-8">
	<Feature heading="Free" text="It's absolutely free." />
	<Feature heading="No account required" text="No log in or sign up required. " />
	<Feature
		heading="Secure"
		text="Your data is secure and private."
		icon="fa-solid fa-waveform-lines"
	/>
</div>

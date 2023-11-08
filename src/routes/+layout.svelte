<script>
	import '../app.css';
</script>

<div class="header">
	<div class="container max-w-screen-md mx-auto p-3">
		<div class="flex">
			<div class="flex-1 font-bold">
				<a href="/"> SignUp1.click </a>
			</div>

			<div class="flex-initial flex gap-8">
				<a href="/faq">FAQ</a>
				<a href="/about">About</a>
			</div>
		</div>
	</div>
</div>
<div class="container max-w-screen-md mx-auto">
	<slot />
</div>

<style>
	:global(body) {
		background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);
		min-height: 100vh;
	}

	:global(html) {
		height: 100%;
	}

	.header {
		border-bottom: 1px solid rgba(0, 0, 0, 20%);
	}
</style>

<script>
	import '../app.css';
</script>

<div class="header">
	<div class="container max-w-screen-md mx-auto py-3">
		<div class="flex">
			<div class="flex-1 font-bold">
        <a href="/">
          SignUp1.click
        </a>
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
		background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);
		min-height: 100vh;
	}

	:global(html) {
		height: 100%;
	}

	.header {
		border-bottom: 1px solid rgba(0, 0, 0, 20%);
	}
</style>

<script lang="ts">
	import type { PageData } from './$types';
	import Form from '../../../Form.svelte';

	export let data: PageData;
</script>

<div class="container p-3">
	<form method="POST">
		<Form form={data.form} />
	</form>
</div>

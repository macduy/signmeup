<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>{ data.form?.key }</h1>

<form method="POST">
    Email:
    <input type="email" name="email" />
    <button>Submit</button>
</form>
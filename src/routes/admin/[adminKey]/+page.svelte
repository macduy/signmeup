<script lang="ts">
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<h1>Admin: { data.form?.key }</h1>

<div>
    {JSON.stringify(data.responses)}
</div>
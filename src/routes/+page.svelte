<script>
	import Echo from "../Echo.svelte";
    import { PUBLIC_TEST } from "$env/static/public"

    console.log("OK")
    console.log(PUBLIC_TEST)

    export let data

    $: ({ tutorials } = data);
</script>


<h1 class="p-6">Sign Me Up</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<Echo />

<form method="POST">
    <button class="btn">Create</button>
</form>

Data:
{ JSON.stringify(tutorials) }

<script>
	import Echo from "../Echo.svelte";
    import { PUBLIC_TEST } from "$env/static/public"

    console.log("OK")
    console.log(PUBLIC_TEST)

    export let data

    $: ({ tutorials } = data);
</script>


<h1>Sign Me Up</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<Echo />


Data:
{ JSON.stringify(tutorials) }


<form method="POST">
    <button>Create form</button>
</form>
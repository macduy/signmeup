<script>
    // Shows off a feature on the main page

    export let heading = "";
    export let text = "";
    export let icon="fa-solid fa-rocket"

</script>

<div class="text-center opacity-80">
    <i class="fa-2x opacity-60 {icon}" />
    <h2 class="font-bold mt-2 text-lg">{heading}</h2>
    <div class="mt-3 text-sm">{text}</div>
</div>
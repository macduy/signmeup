<!--
  @component
-->
<script lang="ts">
  export let form: SignUpForm
</script>

<h1>{form.title}</h1>

<div class="form-control w-full max-w-xs">
  <label class="label" for="name">
    <span class="label-text">Your name:</span>
  </label>
  <input type="text" name="name" placeholder="Your name" class="input input-bordered w-full" />
</div>

<div class="form-control w-full max-w-xs">
  <label class="label" for="email">
    <span class="label-text">Your email address:</span>
  </label>
  <input
    type="email"
    name="email"
    placeholder="Your email"
    class="input input-bordered w-full"
  />
</div>

<button class="btn btn-accent mt-4">Submit</button>
<script>
    import "../app.css";
</script>

<h1>
    Hello world!
</h1>


<button class="btn">My button</button>

<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Button
  </button>

  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
    Button
  </button>

<div class="collapse collapse-arrow bg-base-200">
    <input type="radio" name="my-accordion-2" checked />
    <div class="collapse-title text-xl font-medium">
      Click to open this one and close others
    </div>
    <div class="collapse-content">
      <p>hello</p>
    </div>
  </div>
  <div class="collapse collapse-arrow bg-base-200">
    <input type="radio" name="my-accordion-2" />
    <div class="collapse-title text-xl font-medium">
      Click to open this one and close others
    </div>
    <div class="collapse-content">
      <p>hello</p>
    </div>
  </div>
  <div class="collapse collapse-arrow bg-base-200">
    <input type="radio" name="my-accordion-2" />
    <div class="collapse-title text-xl font-medium">
      Click to open this one and close others
    </div>
    <div class="collapse-content">
      <p>hello</p>
    </div>
  </div>

<slot />

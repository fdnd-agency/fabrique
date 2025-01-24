<script>
  import { activeFilter } from "$lib/store";
  import Header from "$lib/molecules/Header.svelte";
  import ArtObject from "$lib/molecules/ArtObject.svelte";
  import Lenis from "@studio-freight/lenis";
  import { onMount, onDestroy } from "svelte";
  import Searchbar from "$lib/molecules/searchbar.svelte";
  import Filters from "$lib/molecules/Filters.svelte";

  export let data;

  let lenis;
  let scrollContainer;

  function handleScroll() {
    if (pastHalfScrollWidth()) {
      backToHalfScrollWidth();
    }
  }

  function pastHalfScrollWidth() {
    return scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2;
  }

  function backToHalfScrollWidth() {
    scrollContainer.scrollLeft -= scrollContainer.scrollWidth / 2;
  }

  onMount(() => {
    // Initialize Lenis
    lenis = new Lenis({ infinite: true, syncTouch: true });

    // Define the requestAnimationFrame function
    function onRaf(time) {
      lenis.raf(time);
      requestAnimationFrame(onRaf);
    }

    // Start the animation frame loop
    requestAnimationFrame(onRaf);
  });

  onDestroy(() => {
    lenis = null;
  });
  console.log("Scroll container:", scrollContainer);

  console.log("Lenis:", lenis);

  const techniques = ["Pottery", "Islamic art", "Tapestry", "Glass"];
</script>

<Header />

<div
  class="scroll-container"
  bind:this={scrollContainer}
  on:scroll={handleScroll}
>
  <ul class="masonry">
    {#each data.artObjects as art, index}
      <ArtObject {art} {techniques} {index} />
    {/each}
  </ul>
</div>

<div>
  <Searchbar />
  <Filters />
</div>

<style>
  .scroll-container {
    display: grid;
    overflow-x: auto;
    padding: 1rem;
    margin: 2.5rem;
    scroll-snap-type: x mandatory;
  }

  .masonry {
    column-count: 1;
    column-gap: 1rem;
    list-style: none;
    padding: 0;
    width: 200vw;
  }

  @media (min-width: 600px) {
    .masonry {
      column-count: 4;
    }
  }

  @media (min-width: 700px) {
    .masonry {
      column-count: 5;
    }
  }

  @media (min-width: 900px) {
    .masonry {
      column-count: 7;
    }
  }
</style>

<script>
	import { activeFilter } from "$lib/store";
	import Header from "$lib/molecules/Header.svelte";
	import ArtObject from "$lib/molecules/ArtObject.svelte";
	import Lenis from "@studio-freight/lenis";
	import { onMount, onDestroy } from "svelte";
	import Searchbar from "$lib/molecules/searchbar.svelte";
	import Filters from "$lib/molecules/Filters.svelte";

	export let data;

	const originalData = data.artObjects;

	const chunk = (arr, max) => {
		const size = Math.min(max, Math.ceil(arr.length / 2));
		return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
			arr.slice(i * size, i * size + size),
		);
	};

	const n = 4;

	const columns = chunk(originalData, n);

	originalData.forEach((artObj) => {});

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

		console.log("Lenis:", lenis);
		// Start the animation frame loop
		requestAnimationFrame(onRaf);
		console.log("Scroll container:", scrollContainer);
	});

	onDestroy(() => {
		// Cleanup if necessary (e.g., stop the animation frame)
		lenis = null; // or any other cleanup logic if required
	});
	// console.log('Active filter:', $activeFilter);
	// console.log('Techniques:', techniques);
</script>

<Header />

<div
	class="scroll-container"
	bind:this={scrollContainer}
	on:scroll={handleScroll}
>
	{#each columns as column}
		<div class="col">
			<ul class="masonry">
				{#each column as art}
					<ArtObject {art} />
				{/each}
			</ul>
			<ul class="masonry clone" id="clone">
				{#each column as art}
					<ArtObject {art} />
				{/each}
			</ul>
		</div>
	{/each}
</div>

<div>
	<Searchbar />
	<Filters />
</div>

<style>
	.scroll-container {
		display: grid;
		grid-template-columns: repeat(6, 40vw);
		overflow-x: auto;
		gap: 1em;
		scroll-snap-type: x mandatory;
	}

	.col {
		display: flex;
		flex-direction: column;
		align-items: start;
	}

	.masonry {
		/* column-count: 1; */
		/* column-gap: 1rem; */
		list-style: none;
		padding: 0;
		/* width: 200vw; */
		/* width: 20vw; */
		margin: 0;
		&.clone {
			height: 100lvh;
			overflow: hidden;
		}
	}

	/* @media (min-width: 600px) {
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
    } */
</style>

<script>
    	import SearchIcon from '$lib/SearchIcon.svelte'; 

        let filterText = '';
</script>

<div class="wrap">
	<div class="search">
		<input
			type="text"
			class="searchTerm"
			bind:value={filterText}
			placeholder="Search the collection"
		/>
		<button type="submit" class="searchButton" aria-label="Submit search">
			<SearchIcon />
		</button>
	</div>
</div>

<style>
/* import font */
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@500&display=swap');

.search {
    width: 100vw;
    position: relative;
    display: flex;
    align-items: center; 
    border: 2px solid rgb(14, 14, 14); 
    border-radius: 4px; 
    overflow: hidden;
    background: white;
}

.search::after {
    content: '';
    position: absolute;	
    bottom: 0.5em;
    left: 0.5rem;
    width: 93%;
    height: 1px; 
    background-color: black;
}

.searchTerm {
    flex: 1; 
    border: none; 
    padding: 0.5em 0.5em;
    font-family: 'Roboto condensed', sans-serif;
    font-size: 24px;
    background: transparent;
}

/* text styling */
.searchTerm::placeholder {
    color: #000000;
    text-transform: uppercase;
    font-weight: 500; 
    letter-spacing: 0.1rem;
}

.searchButton {
    width: 4em;
    height: 100%; 
    border: none; 
    background: transparent; 
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin-left: 0.3rem;

    cursor: pointer;
}

.searchButton:hover {
    transform: scale(1.2);
}

.wrap {
    position: fixed;
    bottom: 0;
    width: 100%;
}

@keyframes loadingAnimation {
0% {
    width: 0;
}
50% {
    width: 100%;
}
100% {
    width: 0; 
}
}

@media only screen and (min-width: 600px) {
    .wrap {
        position: absolute;
        bottom: 6em;
        left: 2em;
        right: 2em;
    }

    .search {
        width: 60vw;
        position: fixed;
        display: flex;
        left: 50%;
        transform: translateX(-50%);
    }
}
</style>
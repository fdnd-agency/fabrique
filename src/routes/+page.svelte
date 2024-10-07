<script>
    import Search from '$lib/Search.svelte';
    let filterText = '';
</script>


<div class="wrap">
    <div class="search">
       <input type="text" class="searchTerm" bind:value={filterText} placeholder="Search the collection">
       <button type="submit" class="searchButton">
         <Search/>
      </button>
    </div>
 </div>

<style>
* {
    transition: .2s;
    font-family: 'DIN Next', sans-serif;
}

.search {
  width: 100vw;
  position: relative;
  display: flex;
}

.searchTerm {
  width: 100%;
  border: 2px solid black;
  border-right: none;
  padding: .5em 0 0 .5em;
  color: #c1c1c1;
  font-size: 25px;
  text-decoration: underline black;
}

.searchTerm:focus{
  color: black;
}

.searchButton {
  width: 4em;
  height: 5.3em;
  padding: .5em;
  border-left: none;
  background: white;
  text-align: center;
  justify-content: center;
  color: black;
  cursor: pointer;
}

/*Resize the wrap to see the search bar change!*/
.wrap{
  position: absolute;
  bottom: 0;
}

@media only screen and (min-width: 600px) {
    .wrap{
  position: absolute;
  bottom: 4em;
  left: 2em;
  right: 2em;
}

.search {
  width: 90vw;
  position: relative;
  display: flex;
}
}
</style>
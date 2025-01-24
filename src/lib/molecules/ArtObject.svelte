<script>
  import { activeFilter } from "$lib/store";

  export let art;
  export let techniques;
  export let index;
</script>

<li
  class="masonry-item"
  class:hidden={$activeFilter !== "*" &&
    $activeFilter !== techniques[index % techniques.length]}
  data-category={techniques[index % techniques.length]}
  tabindex="0"
>
  <figure>
    <picture>
      <source
        srcset={"https://fdnd-agency.directus.app/assets/" +
          art.image +
          ".avif"}
        type="image/avif"
      />
      <source
        srcset={"https://fdnd-agency.directus.app/assets/" +
          art.image +
          ".webp"}
        type="image/webp"
      />
      <img
        src={"https://fdnd-agency.directus.app/assets/" + art.image}
        alt={art.title}
        height={art.height}
        width={art.width}
        loading="lazy"
      />
    </picture>

    <figcaption>
      <h2>{art.title}</h2>
    </figcaption>
  </figure>
</li>

<style>
  .masonry-item {
    break-inside: avoid;
    display: block;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 1rem;
    position: relative;
    overflow: hidden;
    transition: opacity 0.3s;
    width: 80vw;
  }

  .masonry-item:focus {
    outline: 2px solid #020202;
    outline-offset: 3px;
  }

  .masonry-item:hover figcaption,
  .masonry-item:focus figcaption {
    opacity: 1;
  }

  .masonry-item.hidden {
    filter: opacity(0.3);
    pointer-events: none;
    transition: 1s;
  }

  figure {
    margin: 0;
    position: relative;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 8px;
    transition: transform 0.3s ease-in-out;
  }

  figcaption {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  h2 {
    font-size: 16px;
    margin: 0.5rem 0;
    font-weight: 100;
    position: absolute;
    left: 10px;
    bottom: 0;
  }

  @media (min-width: 600px) {
    .masonry-item {
      width: 100%;
    }
  }

  @media (min-width: 900px) {
    .masonry-item {
      width: 100%;
    }
  }

  /* Prefers reduced motion */
  @media (prefers-reduced-motion) {
    .masonry-item {
      transition: none;
    }

    img {
      transition: none;
    }
  }
</style>

<script>
  let showMenu = false;
  function toggleMenu() {
    showMenu = !showMenu;
  }
</script>

<button id="open-menu" on:click={toggleMenu}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none">

    <g id="Menu / Menu_Duo_MD">
      <path
        id="Vector"
        d="M5 15H19M5 9H19"
        stroke="#000000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"/>
    </g>
  </svg>

  <span class="hidden-text">Menu</span>
</button>

<div id="dropdownmenu" class:showMenu>
  <div class="img-container">
    <img
      id="menuIMG"
      alt="Man stood in a museum"
      loading="lazy"
      src="https://qatarmuseumsstorageprd.blob.core.windows.net/media/images/smoke-tony-smith-portrait.a0e1807c.fill-530x354.jpg"
      height="354"/>
    <a href="/">Find out what's on at Qatar Museums</a>
  </div>

  <div class="openMenu">
    <div id="nav-buttons">
      <button> tickets </button>

      <button>
        <svg
          scale="0."
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          fill="#000000"
          height="30"
          width="30"
          version="1.1"
          id="Capa_1"
          viewBox="0 0 297 297"
          xml:space="preserve">
          <path
            d="M148.5,0C87.43,0,37.747,49.703,37.747,110.797c0,91.026,99.729,179.905,103.976,183.645  c1.936,1.705,4.356,2.559,6.777,2.559c2.421,0,4.841-0.853,6.778-2.559c4.245-3.739,103.975-92.618,103.975-183.645  C259.253,49.703,209.57,0,148.5,0z M148.5,79.693c16.964,0,30.765,13.953,30.765,31.104c0,17.151-13.801,31.104-30.765,31.104  c-16.964,0-30.765-13.953-30.765-31.104C117.735,93.646,131.536,79.693,148.5,79.693z"/>
        </svg> 
        venues
      </button>

      <button> العربية </button>

      <button on:click={toggleMenu}>
        <svg
          fill="currentColor"
          height="30"
          viewBox="0 0 30 30"
          width="30"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="m20.7 10.8-1.5-1.5-4.2 4.3-4.2-4.3-1.5 1.5 4.3 4.2-4.3 4.2 1.5 1.5 4.2-4.3 4.2 4.3 1.5-1.5-4.3-4.2z">
          </path>
          </svg> 
          close
      </button>
    </div>

    <ul>
      <li>
        <a href="/">
          <div class="arabic">قصصنا</div>
          stories
        </a>
      </li>
      <li>
        <a href="/">
          <div class="arabic">الفعاليات</div>
          what's on
        </a>
      </li>
      <li>
        <a href="/">
          <div class="arabic">زيارة</div>
          visit
        </a>
      </li>
    </ul>

    <h3>Find everything for</h3>

    <ul>
      <li><a href="/">families and children</a></li>
      <li><a href="/">schools</a></li>
      <li><a href="/">researchers</a></li>
      <li><a href="/">shop</a></li>
      <li><a href="/">about us</a></li>
    </ul>

    <ul>
      <li><a href="/">careers</a></li>
      <li><a href="/">press</a></li>
      <li><a href="/">corporate sponsorship</a></li>
      <li><a href="/">host your event</a></li>
      <li><a href="/">contact</a></li>
      <li><a href="/">accessibility</a></li>
      <li><a href="/">terms and conditions</a></li>
      <li><a href="/">cookie policy</a></li>
    </ul>

    <svg
      class="logo"
      height="60"
      width="275"
      preserveAspectRatio="xMaxYMid meet"
      viewBox="0 0 627 150"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <g class="name" fill="currentColor" id="a">
          <path
            d="m505.6 78.7-15.4-15.4-15.8 15.8a46.63 46.63 0 0 1-19.1 32.7l35 35 41.7-41.7-19.3-19.3-7 3.8V78.7z"
            fill="#ed3c8a"/>
          <path
            d="M538.5 71.9v44.9h83.6V33.2h-56L587.8 45z"
            fill="#ffc200"/>
          <path d="M506.9 3.6v82.8L582.7 45z" fill="#faff1e"/>
          <path
            d="M430.2 31.5c-23.9 0-43.4 19.5-43.4 43.4 0 24 19.5 43.4 43.4 43.4s43.4-19.5 43.4-43.4c.1-23.9-19.4-43.4-43.4-43.4z"
            fill="#79aafa"/>
          <path
            d="m560.3 30-55-30v75l-15-15-15.1 15.1v-.2a45 45 0 1 0-45 45c8.6 0 16.6-2.4 23.4-6.6l36.6 36.6 45-45L515 84.7l20.3-11.1V120h90V30h-65zm-130.1 86.7c-23.1 0-41.8-18.8-41.8-41.8 0-23.1 18.8-41.8 41.8-41.8 23.1 0 41.8 18.8 41.8 41.8.1 23.1-18.7 41.8-41.8 41.8zM530.8 105l-40.5 40.5-33.9-33.9A44.75 44.75 0 0 0 475 79.9l15.3-15.3 15 15V90l6.8-3.7 18.7 18.7zm-22.3-20.4V5.3L581.1 45l-72.6 39.6zm113.6 32.2h-83.6V71.9L587.8 45l-21.7-11.8h56v83.6z"
            fill="#000"/>
          <path
            d="M6.3 76.2c5.8 0 9.2-2.6 10-7.8h111.4V45.2c-4.2-.1-6.3-.1-9.6-.1-9 0-11.9 4.8-11.9 10.2v.6c0 2.7.5 4.3 1.4 5.8v.3H77.9v-4.3c0-8.3-3.6-12.6-12.3-12.6h-1.1c-2.2 0-5.6.4-8 1.6V34.8h-6.6v27.1H16.5V46.5H9.8v19.3c0 3.1-1.3 4.6-4.4 4.6H3.7v5.8h2.6zm158.9-14.3c-5.4 0-8.9-1.5-8.9-8.2v-3.6h-6c-.2 2-.3 4-.3 4.9 0 9.9 5.3 13.4 14.1 13.4h19.5c2.6 0 6.8-.3 9.6-1.2 2.9.9 6.2 1.2 9.2 1.2h42.7V57.6c0-8.3-3.6-12.6-12.2-12.6-2.7 0-6.1.7-8.9 2.6l2.6 4.9c2.1-1.1 4.4-1.4 6.1-1.4 4.1 0 6 1.8 6 6.1V62h-37.8v-.2c2.1-1.7 3.3-4 3.3-7.1V54c0-6.6-5.4-9.5-11-9.5-5.3 0-11 2.6-11 9.5v.7c0 2.9.8 5.4 3.1 7.1v.2h-20.1zm169.9-15.4c-9 0-12.3 4.3-12.3 12.6v.3c0 .9.1 1.8.1 2.6h-27.4V46.6H289V62h-28.5V34.8h-6.6v33.6h71.6c2.6 1.7 5 2.2 7.9 2.2h1.1c6.8 0 10.5-4.3 10.5-10.8V46.6c-4.2-.1-6.6-.1-9.9-.1zM64.7 51.1c4.1 0 6.7 1.8 6.7 6.3V62h-15v-9.2c1.6-1.2 5.1-1.6 6.9-1.6h1.4zm268.8 13.3c-2.7 0-4.2-1.6-4.2-5.2v-.9c0-4.3 1.5-5.8 5.9-5.8h3.3v6.7c0 3.6-1.3 5.2-4.3 5.2h-.7zm-216.2-2.5c-3.2 0-4.9-1.5-4.9-5.7v-.5c0-3.6 1.9-5 5.6-5h3.4V62h-4.1zm70.9-7.7c0-3.1 1.9-4.5 4.9-4.5 2.6 0 4.8 1.3 4.8 4.5v.7c0 4.1-2 5.5-4.8 5.9-2.6-.5-4.9-1.7-4.9-5.9v-.7zm2-12.8h6.6v-6.6h-6.6v6.6zm-80.2 0h6.1v-6.6H110v6.6zm174.5 0h6.1v-6.6h-6.1v6.6zm-165.2 0h6.1v-6.6h-6.1v6.6zm174.5 0h6.1v-6.6h-6.1v6.6zM2.4 102.1c0 7.5 4 11.5 11.2 11.5 2.1 0 4.2-.4 5.8-1.3l3.2 2.8 4.8-4-3.3-3.1c1.3-1.9 1.9-4.7 1.9-7.6v-6.2c0-7.5-4.3-11.5-11.8-11.5-6.6 0-11.8 4-11.8 11.5v7.9zm154 11v-16h.3l4.7 9.5h4.3l4.7-9.6h.2v16.1h6.4V83.2h-5.8l-7.5 15.1-7.8-15.1h-5.8v29.9h6.3zm142 0v-16h.2l4.8 9.5h4.3l4.7-9.6h.3v16.1h6.4V83.2h-5.8l-7.5 15.1-7.8-15.1h-5.8v29.9h6.2zm-169.2.1-6.1-12.2c3.5-1.3 5.4-4.7 5.4-8.6 0-5.3-4-9.1-10.1-9.1h-11.8v29.9h6.7v-11.3h3.6l5.2 11.3h7.1zm77.5-30H200v18.2c0 4.3-1.6 6-4.9 6-3.2 0-4.9-1.7-4.9-6V83.2h-6.9V102c0 7.5 4.2 11.5 11.8 11.5 6.6 0 11.6-4 11.6-11.5V83.2zm79.1 0h-6.7v18.2c0 4.3-1.7 6-4.9 6s-4.9-1.7-4.9-6V83.2h-6.8V102c0 7.5 4.2 11.5 11.8 11.5 6.6 0 11.6-4 11.6-11.5V83.2zM82 113.2l1.8-5.3H93l1.7 5.3h7.4L91.5 83.3h-5.6L75 113.2h7zm-45.7 0 1.8-5.3h9.2l1.7 5.3h7.4L45.8 83.3h-5.6l-10.9 29.9h7zm219-18.1h-10.6v-6.2h12.5v-5.7h-19.4v29.9H258v-5.7h-13.3v-6.5h10.6v-5.8zm-45 14.8c3.4 2.9 7.1 3.7 11.4 3.7 6.1 0 11.2-3.2 11.2-9.4 0-4.7-2-7.9-8.2-9l-3.2-.5c-2-.3-3-1.2-3-2.9s1.3-3 3.9-3c1.7 0 3.9.2 6.3 2l3.7-4.9c-2.8-2.2-5.7-3.1-9.9-3.1-6.6 0-10.7 3.7-10.7 9.1 0 5.1 2.5 7.9 8.1 8.9l3.5.7c1.9.3 2.8 1.2 2.8 2.8 0 1.9-1.7 3.1-4.6 3.1-2.6 0-5-.4-7.4-2.4l-3.9 4.9zm112.7 0c3.4 2.9 7.1 3.7 11.4 3.7 6.1 0 11.2-3.2 11.2-9.4 0-4.7-2-7.9-8.2-9l-3.2-.5c-2-.3-3-1.2-3-2.9s1.3-3 3.9-3c1.7 0 3.9.2 6.3 2l3.7-4.9c-2.8-2.2-5.8-3.1-9.9-3.1-6.6 0-10.6 3.7-10.6 9.1 0 5.1 2.5 7.9 8.1 8.9l3.5.7c1.9.3 2.8 1.2 2.8 2.8 0 1.9-1.7 3.1-4.6 3.1-2.6 0-5-.4-7.4-2.4l-4 4.9zM77.5 83.3H54.1v6.3h8.3v23.6h6.9V89.6h8.3v-6.3zM9.2 94.6c0-4.3 1.7-6 5-6 3.2 0 5 1.7 5 6v7.2c0 .8-.1 1.5-.1 2.1l-1.9-1.9-4 3.8 2.2 1.9c-.4.1-.7.1-1.1.1-3.1 0-5-1.7-5-6v-7.2zm104 1.9v-7.8h4.1c2.8 0 4.5 1.2 4.5 3.8 0 2.6-1.7 4-4.5 4h-4.1zM42.9 93h.2l2.8 9.4h-6.2l3.2-9.4zm45.6 0h.2l2.8 9.4h-6.2l3.2-9.4z"/>
        </g>
      </defs>
      
      <use fill="currentColor" xlink:href="#a"/>
    </svg>
  </div>
</div>

<style>
  #dropdownmenu {
    display: none;
    z-index: 966;
  }

  .img-container {
    display: none;
  }

  #menuIMG {
    display: none;
  }

  #dropdownmenu.showMenu {
    background-color: #ffe40c;
    bottom: 0;
    display: block;
    height: 100vh;
    left: 0;
    margin: 0;
    overflow: hidden scroll;
    position: absolute;
    right: 0;
    top: 0;
  }

  #nav-buttons {
    display: flex;
    margin: 0.5em;
  }

  #nav-buttons button,
  #open-menu {
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    font-size: 1em;
    font-weight: 600;
    padding: 0.5em;
    text-transform: uppercase;
  }

  #nav-buttons button:nth-of-type(1) {
    background-color: #f9ff1e;
    border: black solid 1px;
  }

  #dropdownmenu.showMenu #nav-buttons button:nth-of-type(1) {
    background-color: black;
    color: white;
  }

  #nav-buttons button:nth-of-type(2) svg {
    scale: 0.7;
  }

  #nav-buttons:nth-of-type(4) {
    left: 0.5em;
    position: absolute;
  }

  ul {
    border-bottom: black solid 1px;
    display: flex;
    flex-direction: column;
    font-size: 2.2em;
    gap: 0.5em;
    padding: 0.5em;
  }

  ul:nth-of-type(1) {
    padding-top: 3em;
  }

  ul:nth-of-type(1) a {
    display: flex;
    flex-direction: column;
    font-weight: bold;
    gap: 0.5em;
    text-transform: uppercase;
  }

  ul:nth-of-type(1) div {
    margin-top: 0.5em;
  }

  ul:nth-of-type(2) {
    font-size: 1.6em;
    font-weight: 100;
    gap: 0.5em;
    margin: 0;
  }

  ul:nth-of-type(2) li,
  ul:nth-of-type(3) li {
    text-transform: capitalize;
  }

  ul:nth-of-type(2) li:nth-of-type(5) {
    margin-bottom: 1em;
  }

  ul:nth-of-type(2) li:nth-of-type(4),
  ul:nth-of-type(3) li:nth-of-type(6) {
    margin-top: 2em;
  }

  ul:nth-of-type(3) {
    border-bottom: none;
    font-size: 1.2em;
    font-weight: 100;
  }

  @media (max-width: 500px) {
    .hidden-text {
      display: none;
    }
  }

  @media (min-width: 530px) {
    ul:nth-of-type(1) {
      display: flex;
      flex-direction: row;
      gap: 0.5em;
      font-size: 2em;
    }

    #nav-buttons {
      justify-content: end;
    }
  }

  @media (min-width: 800px) {
    #dropdownmenu.showMenu {
      background-color: #ffe40c;
      bottom: 0;
      display: flex;
      height: 100vh;
      left: 0;
      margin: 0;
      overflow: hidden;
      position: absolute;
      right: 0;
      top: 0;
    }

    .img-container {
      display: block;
      position: relative;
      width: fit-content;
    }

    .img-container img {
      width: 100%;
      height: auto;
    }

    .img-container a {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4em;
      background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2em;
      font-weight: bold;
      text-decoration: none;
      text-align: center;
    }

    #menuIMG {
      display: block;
      height: 100vh;
      object-fit: cover;
      object-position: 50% 50%;
      overflow: clip;
      width: 100%;
    }

    .openMenu {
      height: 100vh;
      height: 100dvh;
      overflow: scroll;
      width: 100%;
    }
  }

  @media (min-width: 1180px) {
    #dropdownmenu.showMenu {
      display: flex;
      flex-direction: row;
    }

    .openMenu {
      display: grid;
      gap: 0;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: repeat(5, 0.25fr);
      overflow-x: hidden;
      width: 100vw;
    }

    .img-container {
      display: block;
    }

    #menuIMG {
      display: block;
      max-width: 100%;
    }

    #nav-buttons {
      align-items: center;
      background: none;
      border: none;
      cursor: pointer;
      display: flex;
      flex-direction: row;
      font-size: 1em;
      font-weight: 600;
      grid-area: 1 / 2 / 2 / 3;
      margin: 0.5em;
      padding: 0.5em;
      text-transform: uppercase;
    }

    ul {
      margin: 0;
    }

    ul:nth-of-type(1) {
      grid-area: 2 / 1 / 3 / -1;
      margin-top: 4em;
    }

    h3 {
      grid-area: 3 / 1 / 4 / 2;
      height: max-content;
      padding: 0.5em;
    }

    ul:nth-of-type(2) {
      border-bottom: none;
      border-right: black solid 1px;
      grid-area: 4 / 1 / 5 / 2;
    }

    ul:nth-of-type(3) {
      grid-area: 4 / 2 / 5 / 3;
      padding: 1em;
    }

    .logo {
      grid-area: 5 / 2 / 6 / 3;
    }
  }
</style>

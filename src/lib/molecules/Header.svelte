<script>
  import Dropdown from "$lib/Dropdown.svelte";

  let showMenu = false;

  function toggleMenu() {
    showMenu = !showMenu;
  }
</script>

<nav>
  <a href="/">
    <div class="logo-container">
      <img class="logo-qatar" src="/logo-qatar.png" alt="Qatar Museums" />
      <p class="title"><span lang="ar" dir="rtl">متاحف قطر</span> Qatar Museums</p>
    </div>
  </a>
  <ul>
    <li>
      <span lang="ar" dir="rtl">قصص</span>
      <a href="/"> STORIES</a>
    </li>
    <li>
      <span lang="ar" dir="rtl">ما هو الجديد</span>
      <a href="/"> WHAT'S ON</a>
    </li>
    <li>
      <span lang="ar" dir="rtl">المجموعة</span>
      <a href="/"> COLLECTION</a>
    </li>
    <li>
      <span lang="ar" dir="rtl">زيارة</span>
      <a href="/">VISIT</a>
    </li>
    <li>
      <a class="ticket-nav-item" href="/"> TICKETS</a>
    </li>
    <li>
      <a href="/"> MEMBERS</a>
    </li>
    <li>
      <a href="/">VENUES</a>
    </li>
  </ul>
  <Dropdown />
</nav>

<style>
  /* NAV BAR */
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: "DIN Next", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    border-bottom: 1px solid / 000;
    width: 100%;
    height: 4rem;
    position: fixed;
    z-index: 33;
    background: white;
    top: 0;
  }

  a {
    color: #000;
    text-decoration: none;
  }

  .title {
    margin-left: 0.5rem;
    white-space: nowrap;
  }
  /* LOGO */

  .logo-qatar {
    object-fit: cover;
    width: 7rem;
    scale: 0.8;
    background-color: transparent;
  }

  .logo-container {
    display: flex;
    align-items: center;
    width: 100%;
  }

  /* Ul */
  nav ul {
    list-style: none;
    display: flex;
    gap: 20px;
    margin-right: 1rem;
    justify-content: flex-end;
    width: 100%;
  }

  nav ul li {
    white-space: nowrap;
    display: block;
  }

  nav ul li:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  .ticket-nav-item {
    background-color: yellow;
    padding: 0.4rem;
    font-size: 16px;
    border: #000 solid 1px;
  }

  .ticket-nav-item:hover {
    color: #fff;
    background-color: black;
    cursor: pointer;
  }

  span {
    display: block;
    text-align: center;
    font-size: 20px;
  }

  /* MEDIA QUERY */

  @media (max-width: 450px) {
    .ticket-nav-item {
      display: none;
    }
  }

  @media (max-width: 990px) {
    nav ul {
      display: flex;
    }

    /* Hide all li items except .ticket-nav-item */
    nav ul li:not(.ticket-nav-item) {
      display: none;
    }
  }

  @media (min-width: 1020px) {
    nav ul {
      display: flex;
      align-items: center;
      gap: 20px;
      justify-content: flex-end;
      width: 100%;
    }

    nav ul li {
      display: block; /* Ensure all li items are visible on desktop */
    }
  }
</style>

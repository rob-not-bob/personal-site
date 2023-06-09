<script lang="ts">
  export let links: { name: string; url: string }[];
</script>

<nav class="nav">
  <div class="wrapper">
    <a href="/" class="brand">
      <span>RA</span>
    </a>
    <ul class="navItems">
      {#each links as { name, url } (name)}
        <li class='navItem'>
          <a href={url}>{name}</a>
        </li>
      {/each}
    </ul>
  </div>
</nav>
<div class="spacer" />

<style lang="scss">
$height: 62px;

.nav {
  background-color: rgba(255, 255, 255, 0.97);
  box-shadow: 0 2px 2px -2px rgb(0 0 0 / 15%);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 8px 16px;
}

.spacer {
  height: $height;
}

.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 576px) {
    width: 540px;
  }

  @media (min-width: 768px) {
    width: 720px;
  }

  @media (min-width: 999px) {
    width: 960px;
  }

  @media (min-width: 1200px) {
    width: 1140px;
  }
}

.navItems {
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
}

.navItem {
  a {
    display: block;
    color: rgba(0, 0, 0, 0.5);
    font-size: 14.4px;
    font-weight: 400;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI',
      Roboto, 'Helvetica Neue', Arial, sans-serif;
    padding: 7.2px 11.2px;
    transition: all 0.2s;

    &:hover,
    &:focus {
      text-decoration: none;
      color: rgba(0, 0, 0, 0.9);
    }
  }

  &.active a {
    color: rgba(0, 0, 0, 0.9);
  }
}

.brand {
  &:hover,
  &:focus {
    text-decoration: none;
  }

  span {
    font-family: Righteous;
    color: rgb(41, 43, 44);
    font-size: 40px;
    font-weight: 500;
  }
}
</style>
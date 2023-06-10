<script lang="ts">
  import './styles.scss';
  import Nav from '$lib/components/Nav.svelte';
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet" />
  <link
    href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<Nav links={[{ name: 'Home', url: '/' }]} />

<slot />

<script lang="ts">
  import SectionTitle from '$lib/components/SectionTitle.svelte';
  import Card from '$lib/components/Card.svelte';
  import MainHeading from './components/MainHeading.svelte';

  export let data;
</script>

<div class="wrapper">
  <MainHeading
    title="Rob's Travel Blog"
    leadText="A 27 year old American's adventures around the world"
  />
  <SectionTitle text="Latest Posts" />
  <div class="container">
    {#each data.postListings as post (post.title)}
      <Card
        backgroundImage={post.heroImageUrl}
        title={post.title}
        description={post.description}
        date={post.date}
        postHref={post.href}
        authorName={post.author}
      />
    {/each}
  </div>
</div>

<style lang="scss">
  .container {
    display: grid;
    margin: 0 auto;
    padding: 0;
    @media (min-width: 576px) {
      grid-template-columns: 1fr 1fr;
      column-gap: 20px;
    }
  }

  .wrapper {
    max-width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    margin-top: 25px;

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
</style>

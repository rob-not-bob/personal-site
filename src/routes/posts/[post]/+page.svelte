<script lang="ts">
  import { page } from '$app/stores';
  import SocialMediaButtons from '$lib/components/SocialMediaButtons';
  import SocialMediaHead from '$lib/components/SocialMediaHead.svelte';

  export let data;
</script>

<div class="wrapper">
  <SocialMediaHead
    title={data.title}
    description={data.description}
    heroImageUrl={data.heroImageUrl}
    postUrl={$page.url.href}
  />
  <SocialMediaButtons url={$page.url.href} title={data.title} />
  <article class="container">
    <h1 class="postTitle">{data.title}</h1>
    <span class="postAuthor">{data.author}</span>
    <span class="dot" />
    <span class="postDate">{data.date}</span>
    <svelte:component this={data.component} />
  </article>
</div>

<style lang="scss">
  .postTitle {
    font-weight: 700;
    margin-bottom: 8px;
    font-size: 40px;
    color: rgb(41, 43, 44);
  }

  .postAuthor,
  .postDate {
    display: inline-block;
    color: rgba(0, 0, 0, 0.44);
    font-size: 14.4px;
    margin-bottom: 32px;
  }

  .dot {
    color: rgba(0, 0, 0, 0.44);

    &:after {
      content: '·';
      margin-left: 3px;
      margin-right: 3px;
    }
  }

  .wrapper {
    max-width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    margin-top: 87px;
    animation: fadeIn 0.3s ease-in;

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

  .container {
    max-width: 66.6666%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 150px;
    @media (max-width: 768px) {
      max-width: 100%;
    }
  }
</style>

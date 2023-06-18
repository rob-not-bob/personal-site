<script lang="ts">
  export let title: string;
  export let description: string;
  export let postHref: string;
  export let backgroundImage: any;
  export let authorName: string;
  export let date: string;

  import Author from './Author.svelte';
  import Img from '@zerodevx/svelte-img';

  const MAX_DESCRIPTION_LENGTH = 130;
</script>

<div class="card">
  <div class="wrapthumbnail">
    <a href={postHref}>
      {#if typeof backgroundImage === 'string'}
        <img class="thumbnail-img" src={backgroundImage} alt={title} />
      {:else}
        <Img
          class="thumbnail-img"
          src={backgroundImage}
          alt={title}
          sizes="(min-width: 1200px) 201px, (min-width: 999px) 453px, (min-width: 780px) 333px, (min-width: 580px) 243px, calc(100vw - 32px)"
        />
      {/if}
    </a>
  </div>
  <div class="cardBlock">
    <h2 class="cardTitle">
      <a href={postHref}>{title}</a>
    </h2>
    <p class="cardText">
      {description.substring(0, MAX_DESCRIPTION_LENGTH) +
        (description.length > MAX_DESCRIPTION_LENGTH ? '...' : '')}
    </p>
    <Author name={authorName} {date} href={postHref} />
  </div>
</div>

<style lang="scss">
  .card {
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    @media (min-width: 1200px) {
      flex-direction: row;
    }
  }

  .wrapthumbnail {
    position: relative;
    height: 250px;
    @media (min-width: 1200px) {
      flex: 32%;
    }
  }

  .cardBlock {
    padding: 20px;
    display: flex;
    flex-direction: column;
    flex: 1;
    @media (min-width: 1200px) {
      flex: 58%;
    }
  }

  .cardTitle {
    line-height: 1.25;
    font-weight: 700;
    font-size: 20.8px;
    margin-bottom: 12px;

    a {
      color: rgba(0, 0, 0, 0.8);
      transition: all 0.2s;

      &:hover {
        color: rgba(0, 0, 0, 0.6);
        text-decoration: none;
      }
    }
  }

  .cardText {
    color: rgba(0, 0, 0, 0.44);
    line-height: 1.4;
    font-weight: 400;
    font-size: 15.2px;
    flex-grow: 1;
  }
</style>

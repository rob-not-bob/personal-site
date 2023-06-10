<script lang="ts">
  export let url: string;
  export let title: string;

  import TwitterShareButton from './TwitterShareButton.svelte';
  import FacebookShareButton from './FacebookShareButton.svelte';
</script>

<div class="shareWrapper">
  <div class="share">
    <p>Share</p>
    <ul>
      <li>
        <TwitterShareButton {url} {title} />
      </li>
      <li>
        <FacebookShareButton {url} />
      </li>
    </ul>
  </div>
</div>

<style lang="scss">
  .shareWrapper {
    max-width: 16.666666%;
    position: fixed;
    @media (max-width: 768px) {
      position: relative;
      max-width: 100%;
    }
  }

  .share {
    margin: 0 auto;
    position: fixed;
    flex-direction: column;
    @media (max-width: 768px) {
      position: relative;
      flex-direction: row;
      margin-bottom: 15px;

      p {
        margin-right: 10px;
      }
      ul {
        li {
          display: inline-block;
          margin-right: 8px;
        }
      }
    }

    display: flex;
    align-items: center;

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;

      li {
        margin-bottom: 8px;
      }
    }

    p {
      color: rgba(0, 0, 0, 0.44);
      margin-bottom: 10px;
      font-size: 15.2px;
    }
  }
</style>

<script lang="ts">
  export let title: string;
  export let description: string;
  export let heroImageUrl: string;
  export let postUrl: string;
</script>

<svelte:head>
  <title>{`${title} - Rob's Travel Blog`}</title>
  <!-- Required social media tags -->
  <meta property="og:title" content={title} />
  <meta property="og:type" content="article" />
  <meta
    property="og:image"
    content={
      heroImageUrl.startsWith('/')
        ? `http://rcallen.net${heroImageUrl}`
        : heroImageUrl
    }
  />
  <meta property="og:url" content={postUrl} />
  <meta property="twitter:card" content="summary_large_image" />

  <!-- Optional -- but recommended -->
  <meta property="og:description" content={description} />
  <meta property="description" content={description} />
  <meta property="og:site_name" content="Rob's Travel Blog" />
  <meta property="twitter:image:alt" content={title} />

  <!-- Non-Essential, But Required for Analytics
  <meta property="fb:app_id" content="your_app_id" />
  <meta property="twitter:site" content="@website-username" /> -->
</svelte:head>
<script lang="ts">
  export let title: string;
  export let leadText: string;
</script>


<div class="mainHeading">
  {#if title}
    <h1 class="title">{title}</h1>
  {/if}
  {#if leadText}
    <p class="leadText">{leadText}</p>
  {/if}
</div>

<style lang="scss">
.mainHeading {
  padding-top: 16px;
  padding-bottom: 16px;
}

.title {
  font-family: Righteous;
  color: rgb(41, 43, 44);
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 8px;
}

.leadText {
  color: rgb(41, 43, 44);
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 16px;
}

</style>
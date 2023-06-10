<script lang="ts">
  export let text: string;
</script>

<div class="sectionTitle">
  <h2>
    <span>{text}</span>
  </h2>
</div>

<style lang="scss">
  .sectionTitle {
    font-weight: 700;

    h2 {
      border-bottom: 1px solid rgba(0, 0, 0, 0.15);
      margin-bottom: 27px;
      font-size: 22.4px;
    }

    span {
      border-bottom: 1px solid rgba(0, 0, 0, 0.44);
      display: inline-block;
      padding-bottom: 20px;
      margin-bottom: -1px;
    }
  }
</style>

<script lang="ts">
  export let name: string;
  export let date: string;
  export let href: string;
</script>

<div class="metaFooter">
  <div class="wrapFooter">
    <span class="authorMeta">
      <span class="postName">{name}</span>
      <br />
      <span class="postDate">{date}</span>
      <span class="dot"></span>
      <!-- <span className="postRead">{readTime}</span> -->
    </span>
    <a href={href}>
      <svg
        class="svgIconUse"
        width="25"
        height="25"
        viewBox="0 0 25 25"
      >
        <path
          d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z"
          fill-rule="evenodd"
        />
      </svg>
    </a>
  </div>
</div>

<style lang="scss">
.metaFooter {
  margin-top: 1.25rem;
  align-items: center;
}

.wrapFooter {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0;
}

.authorMeta {
  display: inline-block;
  flex-direction: column;
  justify-content: center;
}

.postName {
  font-size: 0.875rem;
  color: #333;

  a {
    color: #333;
  }
}

.postDate {
  font-size: 0.875rem;
  color: #999;
}

.dot {
  display: inline-block;
  width: 1px;
  height: 1px;
  margin: 0 0.5rem;
  background-color: #999;
  border-radius: 100%;
}

.postRead {
  font-size: 0.875rem;
  color: #999;
}

.svgIconUse {
  fill: #6b6b6b;
  fill-rule: evenodd;
  position: relative;
  top: 4px;
}
</style>
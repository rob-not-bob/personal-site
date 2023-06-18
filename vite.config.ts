import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from '@zerodevx/svelte-img/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    sveltekit(),
    imagetools({
      defaultDirectives: () => new URLSearchParams('?width=480;1024;1920&format=webp;jpg')
    })
  ],
  assetsInclude: ['**/*.mov']
});

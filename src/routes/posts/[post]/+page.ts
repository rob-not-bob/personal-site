import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
  const post = await import(`../${params.post}/post.svx`);

  return {
    component: post.default,
    ...post.metadata
  };
}) satisfies PageLoad;

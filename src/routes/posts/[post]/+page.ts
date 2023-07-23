import type { PageLoad } from './$types';
import { posts } from '../../posts';

export const load = (async ({ params }) => {
  const post = await import(`../${params.post}/post.svx`);
  const postEntry = posts.find(({ href }) => href === `/posts/${params.post}`);

  // Calculate imageUrl from imports
  const imageImport = postEntry?.heroImageUrl;
  let imageUrl: any = imageImport;
  if (typeof imageImport !== 'string') {
    const imageUrls = (await imageImport).default ?? [];
    imageUrl = imageUrls
      .filter(({ format }: { format: string }) => format === 'jpg')
      .sort(
        ({ width: widthA }: { width: number }, { width: widthB }: { width: number }) =>
          widthB - widthA
      )[0]?.src;
  }

  return {
    component: post.default,
    ...post.metadata,
    heroImageUrl: imageUrl,
    description: postEntry?.description
  };
}) satisfies PageLoad;

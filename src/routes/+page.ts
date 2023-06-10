import type { PageLoad } from './$types';

interface PostMetaData {
  title: string;
  author: string;
  date: string;
  description?: string;
  heroImageUrl: string;
  postHref: string;
}

export const load = (() => {
  const posts = import.meta.glob('./posts/**/post.svx', { eager: true });
  const metadata = (Object.entries(posts) as [string, { metadata: PostMetaData }][]).map(
    ([importPath, { metadata }]) => {
      let imageUrl = metadata.heroImageUrl;

      if (imageUrl.startsWith('./')) {
        imageUrl = importPath.replace('/post.svx', imageUrl.replace('.', ''));
      }

      return {
        ...metadata,
        heroImageUrl: new URL(imageUrl, import.meta.url).href,
        postHref: importPath.replace('.', '').replace('/post.svx', '')
      };
    }
  );

  return { posts, metadata };
}) satisfies PageLoad;

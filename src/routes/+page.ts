import type { PageLoad } from './$types';
import { format, parse } from 'date-fns';
import { posts } from './posts';

const getPostListings = async () => {
  return (
    await Promise.all(
      posts.map(async (post) => {
        return {
          ...post,
          heroImageUrl:
            typeof post.heroImageUrl === 'string'
              ? post.heroImageUrl
              : (await post.heroImageUrl).default,
          date: format(parse(post.date, 'MM-dd-yyyy', new Date()), 'MMM d, yyyy')
        };
      })
    )
  ).sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
};

export const load = (async () => {
  const postListings = await getPostListings();
  return { postListings };
}) satisfies PageLoad;

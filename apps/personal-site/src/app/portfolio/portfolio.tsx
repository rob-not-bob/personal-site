import styles from './portfolio.module.scss';
import { PostListing, PostListingProps } from '@personal-site/react';

export interface PortfolioProps {
  items: PostListingProps[];
}

export function Portfolio({ items }: PortfolioProps) {
  return (
    <div className={styles['container']}>
      {items
        .sort((a, b) => Number(b.date) - Number(a.date))
        .map((item) => (
          <PostListing key={item.date.toISOString()} {...item} />
        ))}
    </div>
  );
}

export default Portfolio;

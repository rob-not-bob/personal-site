import styles from './portfolio.module.scss';
import { PortfolioItem, PortfolioItemProps } from '@personal-site/react';

export interface PortfolioProps {
  items: PortfolioItemProps[];
}

export function Portfolio({ items }: PortfolioProps) {
  return (
    <div className={styles['container']}>
      {items
        .sort((a, b) => Number(b.date) - Number(a.date))
        .map((item) => (
          <PortfolioItem {...item} />
        ))}
    </div>
  );
}

export default Portfolio;

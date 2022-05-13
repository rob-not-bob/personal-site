import { format } from 'date-fns';
import { useParams } from 'react-router';
import styles from './portfolio-item.module.scss';

export interface PortfolioItemProps {
  title: string;
  author: string;
  date: Date;
  heroImageUrl: string;
  description: string;
  content: string;
  url: string;
}

export function PortfolioItem({ posts }: { posts: PortfolioItemProps[] }) {
  const { id } = useParams<{ id: string }>();
  const post = posts[Number(id) - 1];
  const { date, heroImageUrl, title, description, content } = post;
  const formattedDate = format(date, 'MMM d, yyyy');

  return (
    <div>
      <img src={heroImageUrl} alt={title} />
      <h1>{title}</h1>
      <span>{formattedDate}</span>
      <p>{description}</p>
      <div className={styles['markdown-body']}>
        <h2>Hello World</h2>
        <blockquote>This is a blockquote</blockquote>
        <p>
          <b>Bold</b> <i>italic</i> normal
        </p>
      </div>
    </div>
  );
}

export default PortfolioItem;

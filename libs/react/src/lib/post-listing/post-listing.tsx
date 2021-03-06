import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import styles from './post-listing.module.scss';

export interface PostListingProps {
  title: string;
  author: string;
  date: Date;
  heroImageUrl: string;
  description: string;
  content: string;
  url: string;
}

export function PostListing({
  title,
  date,
  heroImageUrl,
  description,
  url,
}: PostListingProps) {
  const formattedDate = format(date, 'MMM d, yyyy');
  return (
    <div className={styles['container']}>
      <Link className={styles['heroImage']} to={url}>
        <img src={heroImageUrl} alt={title} />
      </Link>
      <Link className={styles['title']} to={url}>
        <h2>{title}</h2>
      </Link>
      <span className={styles['date']}>{formattedDate}</span>
      <p className={styles['description']}>{description}</p>
    </div>
  );
}

export default PostListing;

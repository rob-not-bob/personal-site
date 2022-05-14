import styles from './post.module.scss';
import ReactMarkDown from 'react-markdown';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface Post {
  title: string;
  author: string;
  date: Date;
  heroImageUrl: string;
  description: string;
  markdown: string;
}

const parsePost = (text: string, postPath: string): Post => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, meta, md] = text.split('---');
  const markdown = md.replace(/\(\.\//g, `(${postPath}/`);

  const metadata = meta.split('\n');
  const post: Partial<Post> = {};
  metadata.forEach((line) => {
    const [key, value] = line.split(': ');
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    post[key as keyof Post] = value;
  });
  post['date'] = new Date(post['date'] as unknown as string);
  post['markdown'] = markdown;

  return post as Post;
};

export function Post() {
  const { id } = useParams<{ id: string }>();
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch(`/assets/posts/${id}/post.md`)
      .then((res) => res.text())
      .then((text) => {
        const post = parsePost(text, `/assets/posts/${id}`);
        console.warn('post', post);
        setMarkdown(post.markdown);
      });
  });

  return (
    <div className={styles['container']}>
      <ReactMarkDown className={styles['markdown-body']} children={markdown} />
    </div>
  );
}

export default Post;

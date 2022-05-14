import './app.scss';

import { Route, BrowserRouter as Router } from 'react-router-dom';
import { NavBar } from '../components';
import { Portfolio } from './portfolio/portfolio';
import { sub } from 'date-fns';
import { Post, PostListingProps } from '@personal-site/react';

const postItems: PostListingProps[] = [
  {
    title: 'Personal Site',
    author: 'Robert Allen',
    date: new Date(),
    heroImageUrl: '/assets/posts/post1/1.png',
    description: 'This is my personal site.',
    content: '',
    url: '/posts/post1',
  },
  {
    title: 'Flappy Bird',
    author: 'Robert Allen',
    date: sub(new Date(), { days: 20 }),
    heroImageUrl: '/assets/2.png',
    description: 'This is my personal site.',
    content: '',
    url: '/posts/2',
  },
  {
    title: '2048',
    author: 'Robert Allen',
    date: sub(new Date(), { days: 45 }),
    heroImageUrl: '/assets/3.png',
    description: 'This is my personal site.',
    content: '',
    url: '/posts/3',
  },
  {
    title: 'Magnet Boy',
    author: 'Robert Allen',
    date: sub(new Date(), { days: 70 }),
    heroImageUrl: '/assets/4.png',
    description: 'This is my personal site.',
    content: '',
    url: '/posts/4',
  },
  {
    title: 'Music Visualizer',
    author: 'Robert Allen',
    date: sub(new Date(), { days: 60 }),
    heroImageUrl: '/assets/5.png',
    description: 'This is my personal site.',
    content: '',
    url: '/posts/5',
  },
  {
    title: 'Birthday Reminder',
    author: 'Robert Allen',
    date: sub(new Date(), { days: 80 }),
    heroImageUrl: '/assets/6.png',
    description: 'This is my personal site.',
    content: '## Hello World',
    url: '/posts/6',
  },
];

export function App() {
  return (
    <Router>
      <NavBar />
      <Route path="/" exact>
        <Portfolio items={postItems} />
      </Route>
      <Route path="/posts/:id">
        <Post />
      </Route>
    </Router>
  );
}

export default App;

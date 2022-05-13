import './app.scss';

import { Route, Link } from 'react-router-dom';
import { NavBar } from '../components';
import { Portfolio } from './portfolio/portfolio';
import { sub } from 'date-fns';
import { PortfolioItem, PortfolioItemProps } from '@personal-site/react';

const PortfolioItems: PortfolioItemProps[] = [
  {
    title: 'Personal Site',
    author: 'Robert Allen',
    date: new Date(),
    heroImageUrl: '/assets/1.png',
    description: 'This is my personal site.',
    content: '',
    url: '/posts/1',
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
    <>
      <NavBar />
      {/* START: routes */}
      <Route path="/" exact>
        <Portfolio items={PortfolioItems} />
      </Route>
      <Route path="/posts/:id">
        <PortfolioItem posts={PortfolioItems} />
      </Route>
      <Route
        path="/contact"
        exact
        render={() => (
          <div>
            <Link to="/">Click here to go back to root page.</Link>
          </div>
        )}
      />
      {/* END: routes */}
    </>
  );
}

export default App;

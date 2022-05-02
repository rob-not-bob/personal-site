import { Link, NavLink } from 'react-router-dom';
import styles from './styles.module.scss';

const Brand = (): JSX.Element => (
  <Link to="/" className={styles['brand']}>
    <h2 className={styles['brandtitle']}>RA</h2>
  </Link>
);

const NavItem = ({
  route,
  title,
  href,
}: {
  title: string;
  route?: string;
  href?: string;
}): JSX.Element => {
  const itemLink = route ? (
    <NavLink
      className={styles['navLink']}
      exact
      to={route}
      activeClassName={styles['selectedItem']}
    >
      {title}
    </NavLink>
  ) : (
    <a
      className={styles['navLink']}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {title}
    </a>
  );
  return <li>{itemLink}</li>;
};

export const NavBar = (): JSX.Element => {
  return (
    <nav className={styles['navbar']} role="navigation">
      <ul className={styles['navlist']}>
        <NavItem route="/" title="Portfolio" />
        <li>
          <Brand />
        </li>
        <NavItem href="/assets/resume.pdf" title="Resume" />
      </ul>
    </nav>
  );
};

export default NavBar;

// NavBar.jsx
import styles from './NavBar.module.scss';

export const NavBar = () => {
  return (
    <nav className={styles.NavBar}>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Asuki</a></li>
      </ul>
    </nav>
  );
};

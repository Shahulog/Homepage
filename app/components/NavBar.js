import Link from 'next/link';
import styles from './NavBar.module.css'; // Assume you have CSS for styling

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/YMM4">YMM4</Link></li>
        <li><Link href="/YouTube">YouTube </Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
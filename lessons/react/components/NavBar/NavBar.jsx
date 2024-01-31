import { Link } from 'react-router-dom'

import styles from './NavBar.module.css'

export function NavBar () {
  return <nav className={styles.navbar}>
    <Link to="/">Home</Link>
    <Link to="/products">Products</Link>
    <Link to="/about">About</Link>
    <Link to="/videoplayer">Video Player</Link>
    <Link to="/redux">Redux</Link>
  </nav>
}

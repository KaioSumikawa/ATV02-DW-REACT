import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

// Navbar é um componente principal que contém a marca e a navegação do site.
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>
        <span className={styles.logo}>Grim</span>
        <span className={styles.subtitle}>Pokedex</span>
      </div>
      <div className={styles.links}>
        <Link href="/">Início</Link>
      </div>
    </nav>
  )
}

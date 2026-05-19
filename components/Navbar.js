import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

// Navbar é um componente que recebe props via componentes pai quando necessário.
// Aqui usamos apenas links estáticos, mas ele poderia receber rotas e classes dinamicamente.
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>
        <span className={styles.glow}>AQW</span>
        <span>Codex</span>
      </div>
      <div className={styles.links}>
        <Link href="/">Início</Link>
        <a href="#classes">Classes</a>
      </div>
    </nav>
  )
}

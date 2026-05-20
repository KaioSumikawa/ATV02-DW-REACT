import styles from '../styles/Footer.module.css'

// Footer é um componente reutilizável que aparece em todas as páginas.
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© 2026 Grim Pokedex. Uma guia arcana de monstros e mistérios.</p>
    </footer>
  )
}

import styles from '../styles/Footer.module.css'

// Footer é um componente simples reutilizável que pode aparecer em várias páginas.
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© 2026 AQW Codex. Tema dark fantasy para estudo acadêmico.</p>
    </footer>
  )
}

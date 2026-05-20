import ClassCard from './ClassCard'
import styles from '../styles/ClassList.module.css'

export default function ClassList({ classes }) {
  return (
    <section id="classes" className={styles.listSection}>
      <div className={styles.headerGrid}>
        <h2>Classes icônicas de AQW</h2>
        <p>Explore o codex de classes com habilidades, facções e dificuldades.</p>
      </div>
      <div className={styles.grid}>
        {classes.map((item) => (
          <ClassCard key={item.id} classData={item} />
        ))}
      </div>
    </section>
  )
}

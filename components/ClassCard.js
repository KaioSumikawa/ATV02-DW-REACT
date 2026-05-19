import Link from 'next/link'
import styles from '../styles/ClassCard.module.css'

// ClassCard recebe props com os dados da classe e exibe um card estilizado.
export default function ClassCard({ classData }) {
  return (
    <Link href={`/classes/${classData.id}`} className={styles.card}>
      <div className={styles.media}>
        <img src={classData.image} alt={classData.name} />
      </div>
      <div className={styles.info}>
        <h3>{classData.name}</h3>
        <p>{classData.faction} • {classData.role}</p>
        <span className={styles.tag}>{classData.difficulty}</span>
      </div>
    </Link>
  )
}

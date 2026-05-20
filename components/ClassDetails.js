import styles from '../styles/ClassDetails.module.css'

export default function ClassDetails({ classInfo }) {
  return (
    <section className={styles.detailShell}>
      <div className={styles.hero}>
        <img src={classInfo.image} alt={classInfo.name} />
      </div>
      <div className={styles.content}>
        <span className={styles.faction}>{classInfo.faction}</span>
        <h1>{classInfo.name}</h1>
        <p className={styles.description}>{classInfo.description}</p>
        <div className={styles.metaGrid}>
          <div>
            <h3>Role</h3>
            <p>{classInfo.role}</p>
          </div>
          <div>
            <h3>Dificuldade</h3>
            <p>{classInfo.difficulty}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

import { useState, useEffect } from 'react'
import ClassList from '../components/ClassList'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [classes, setClasses] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)

  // useEffect carrega os dados da API mock local ao montar o componente.
  useEffect(() => {
    async function fetchClasses() {
      const response = await fetch('/data/classes.json')
      const data = await response.json()
      setClasses(data)
      setLoading(false)
    }

    fetchClasses()
  }, [])

  const filteredClasses = classes.filter((item) => {
    const query = search.toLowerCase()
    return (
      item.name.toLowerCase().includes(query) ||
      item.faction.toLowerCase().includes(query)
    )
  })

  return (
    <div className={styles.homePage}>
      <section className={styles.heroSection}>
        <div>
          <p className={styles.overline}>Dark Fantasy · AdventureQuest Worlds</p>
          <h1>Bem-vindo ao AQW Codex</h1>
          <p className={styles.lead}>
            Descubra classes lendárias, explore talentos e leia detalhes imersivos de cada herói.
          </p>
          <div className={styles.searchWrapper}>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar classe ou facção..."
              aria-label="Buscar classes"
            />
            <span>Pesquisar</span>
          </div>
        </div>
      </section>

      {loading ? (
        <div className={styles.loader}>Carregando classes...</div>
      ) : (
        <ClassList classes={filteredClasses} />
      )}
    </div>
  )
}

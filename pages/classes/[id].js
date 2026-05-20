import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import ClassDetails from '../../components/ClassDetails'
import styles from '../../styles/ClassDetailsPage.module.css'

export default function ClassPage() {
  const router = useRouter()
  const { id } = router.query
  const [classInfo, setClassInfo] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadClass() {
      if (!id) return
      const response = await fetch('/data/classes.json')
      const data = await response.json()
      const found = data.find((item) => item.id === id)
      setClassInfo(found)
      setLoading(false)
    }

    loadClass()
  }, [id])

  if (loading) {
    return <div className={styles.loading}>Carregando detalhes...</div>
  }

  if (!classInfo) {
    return (
      <div className={styles.notFound}>
        <h2>Classe não encontrada</h2>
        <Link href="/">Voltar para a lista</Link>
      </div>
    )
  }

  return (
    <div className={styles.detailPage}>
      <div className={styles.topBar}>
        <Link href="/">← Voltar</Link>
        <span>{classInfo.role}</span>
      </div>
      <ClassDetails classInfo={classInfo} />
    </div>
  )
}

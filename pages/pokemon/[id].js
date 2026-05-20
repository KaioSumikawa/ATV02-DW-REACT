import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import PokemonDetails from '../../components/PokemonDetails'
import styles from '../../styles/PokemonPage.module.css'

export default function PokemonPage() {
  const router = useRouter()
  const { id } = router.query
  const [pokemon, setPokemon] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!id) return

    async function loadPokemon() {
      setLoading(true)
      setError(null)
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        if (!response.ok) throw new Error('Falha ao buscar pokémon')
        const data = await response.json()
        setPokemon({
          id: data.id,
          name: data.name,
          image: data.sprites.other['official-artwork'].front_default,
          types: data.types,
          height: data.height,
          weight: data.weight,
          abilities: data.abilities,
          stats: data.stats
        })
      } catch (err) {
        setError('Não foi possível carregar este pokémon.')
      } finally {
        setLoading(false)
      }
    }

    loadPokemon()
  }, [id])

  return (
    <div className={styles.pageShell}>
      <div className={styles.breadcrumbs}>
        <Link href="/">← Voltar à Pokédex</Link>
      </div>

      {loading ? (
        <div className={styles.loader}>Buscando criatura...</div>
      ) : error ? (
        <div className={styles.loader}>{error}</div>
      ) : (
        <PokemonDetails pokemon={pokemon} />
      )}
    </div>
  )
}

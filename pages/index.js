import { useState, useEffect } from 'react'
import PokemonList from '../components/PokemonList'
import styles from '../styles/Home.module.css'

const PAGE_SIZE = 20
const POKEMON_LIMIT = 151

function extractPokemonId(url) {
  const match = url.match(/\/pokemon\/(\d+)\/?$/)
  return match ? Number(match[1]) : null
}

export default function Home() {
  const [allPokemons, setAllPokemons] = useState([])
  const [page, setPage] = useState(0)
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadPokemons() {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${POKEMON_LIMIT}`)
        const data = await response.json()
        const formatted = data.results.map((item) => {
          const id = extractPokemonId(item.url)
          return {
            id,
            name: item.name,
            image: id
              ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
              : null
          }
        })
        setAllPokemons(formatted)
      } catch (err) {
        setError('Não foi possível carregar a Pokédex. Tente novamente mais tarde.')
      } finally {
        setLoading(false)
      }
    }

    loadPokemons()
  }, [])

  const query = search.trim().toLowerCase()
  const filteredPokemons = allPokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(query))
  const pageCount = Math.max(1, Math.ceil(filteredPokemons.length / PAGE_SIZE))
  const visiblePokemons = filteredPokemons.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE)

  function handleSearchChange(event) {
    setSearch(event.target.value)
    setPage(0)
  }

  return (
    <div className={styles.homePage}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <p className={styles.overline}>Pokédex Arcana · Dark Fantasy</p>
          <h1>Grim Pokedex</h1>
          <p className={styles.lead}>
            Uma Pokédex sombria com aura de MMORPG, caçando monstros místicos em um mundo antigo.
          </p>
          <div className={styles.searchWrapper}>
            <input
              type="text"
              value={search}
              onChange={handleSearchChange}
              placeholder="Buscar por nome..."
              aria-label="Buscar pokémons"
            />
          </div>
        </div>
      </section>

      {loading ? (
        <PokemonList pokemons={[]} loading />
      ) : error ? (
        <div className={styles.loader}>{error}</div>
      ) : (
        <>
          <PokemonList pokemons={visiblePokemons} />
          <div className={styles.paginationBar}>
            <span className={styles.paginationInfo}>
              Página {page + 1} de {pageCount} • {filteredPokemons.length} pokémons
            </span>
            <div className={styles.paginationButtons}>
              <button
                type="button"
                disabled={page === 0}
                onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
              >
                Anterior
              </button>
              <button
                type="button"
                disabled={page >= pageCount - 1}
                onClick={() => setPage((prev) => Math.min(prev + 1, pageCount - 1))}
              >
                Próxima
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

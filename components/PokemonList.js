import PokemonCard from './PokemonCard'
import styles from '../styles/PokemonList.module.css'

export default function PokemonList({ pokemons, loading = false }) {
  const skeletonCount = 12
  const items = loading ? Array.from({ length: skeletonCount }) : pokemons

  return (
    <section className={styles.listSection}>
      <div className={styles.grid}>
        {items.map((pokemon, index) =>
          loading ? (
            <div key={index} className={styles.skeletonCard}>
              <div className={styles.skeletonHeader} />
              <div className={styles.skeletonImage} />
              <div className={styles.skeletonFooter} />
            </div>
          ) : (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          )
        )}
      </div>
    </section>
  )
}

import Link from 'next/link'
import styles from '../styles/PokemonCard.module.css'

export default function PokemonCard({ pokemon }) {
  return (
    <Link href={`/pokemon/${pokemon.id}`} className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={styles.pokedexId}>#{pokemon.id.toString().padStart(3, '0')}</span>
        <span className={styles.name}>{pokemon.name}</span>
      </div>
      <div className={styles.imageWrapper}>
        <img src={pokemon.image} alt={pokemon.name} loading="lazy" />
      </div>
      {pokemon.types?.length ? (
        <div className={styles.cardFooter}>
          {pokemon.types.map((typeInfo) => (
            <span key={typeInfo.type.name} className={styles.typeBadge}>
              {typeInfo.type.name}
            </span>
          ))}
        </div>
      ) : null}
    </Link>
  )
}

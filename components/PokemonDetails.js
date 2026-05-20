import styles from '../styles/PokemonDetails.module.css'

export default function PokemonDetails({ pokemon }) {
  return (
    <section className={styles.detailsShell}>
      <div className={styles.headerSection}>
        <div>
          <span className={styles.pokedexId}>#{pokemon.id.toString().padStart(3, '0')}</span>
          <h1>{pokemon.name}</h1>
          <div className={styles.typeRow}>
            {pokemon.types.map((type) => (
              <span key={type.type.name} className={styles.typeBadge}>
                {type.type.name}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.heroImage}>
          <img src={pokemon.image} alt={pokemon.name} />
        </div>
      </div>

      <div className={styles.summaryGrid}>
        <div className={styles.statBlock}>
          <h2>Características</h2>
          <ul>
            <li>Altura: {pokemon.height / 10} m</li>
            <li>Peso: {pokemon.weight / 10} kg</li>
            <li>
              Habilidades: {pokemon.abilities.map((item) => item.ability.name).join(', ')}
            </li>
          </ul>
        </div>

        <div className={styles.statsBlock}>
          <h2>Estatísticas</h2>
          <div className={styles.statsList}>
            {pokemon.stats.map((stat) => (
              <div key={stat.stat.name} className={styles.statItem}>
                <span>{stat.stat.name}</span>
                <span>{stat.base_stat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

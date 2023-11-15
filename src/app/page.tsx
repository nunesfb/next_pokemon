import Link from 'next/link'
import styles from './page.module.css'

type Pokemon = {
  name: string;
  url: string;
};

async function fetchPokemon(): Promise<Pokemon[]> {
  const result = await fetch("https://pokeapi.co/api/v2/pokemon");
  const jsonResult = await result.json();
  return jsonResult.results;
}

export default async function Home() {
  const pokemons = await fetchPokemon();

  return (
    <main className={styles.main}>
      <h1>Lista de Pokemons</h1>
      <section className={styles.pokemonList}>
        {pokemons.map((pokemon: Pokemon) => {
          const id = pokemon.url.split('/')[6];
          return (
            <Link href={`/pokemon/${id}`}>
            <div className={styles.pokemonItem} key={pokemon.name}>
              <p className={styles.pokemon}>{("00" + id).slice(-3)}</p>
              <p className={styles.pokemon}>{pokemon.name}</p>
            </div>
            </Link>
          )
        })
        }
      </section>
      <Link href='/about'>About</Link>
    </main>
  )
}

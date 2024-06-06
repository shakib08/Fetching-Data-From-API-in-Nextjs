
import styles from "./page.module.css";
 
async function fetchCharacters() {
  const res = await fetch("https://hp-api.onrender.com/api/characters");
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function Home({data}) {
   data = await fetchCharacters();
  return (
    <main className={styles.main}>
      <div>
        <h1>Data fetched at build time:</h1>
        <div className={styles.cardContainer}>
          {data.map((character, index) => (
            <div key={index} className={styles.card}>
              <h2>{character.name}</h2>
              <p>
                <strong>Gender:</strong> {character.gender}
              </p>
              <p>
                <strong>House:</strong> {character.house || 'Unknown'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

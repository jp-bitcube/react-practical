import { useEffect, useState } from "react"
import styles from './search.module.css';

const URL = 'https://api.spoonacular.com/recipes/complexSearch';
const API_KEY = ''; // Register with https://spoonacular.com/food-api and add your api key here.

export default function Search({ data, setData }) {
  const [query, setQuery] = useState('Pizza');
	useEffect(() => {
		async function fetchFood() {
			const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
			const data = await res.json();
			setData(data.results);
		}

		fetchFood();
	}, [query]);

  return (
    <div className={styles.searchContainer}>
      <input className={styles.searchInput} value={query} onChange={(e) => setQuery(e.target.value)} type='text'/>
    </div>
  );
}
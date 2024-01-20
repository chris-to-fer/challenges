import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [id, setId] = useState(0);
  const [hideprev, setHideprev] = useState(false);
  const [hidenext, setHidenext] = useState(false);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${id}&limit=20`
        );
        const data = await response.json();
        setPokemon(data.results);
        console.log(data);
        data.previous ? setHideprev(true) : setHideprev(false);
        data.next ? setHidenext(true) : setHidenext(false);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [id]);

  function nextPage() {
    console.log("hi");

    id !== 1300 ? setId(id + 20) : setId(id);
  }
  function prevPage() {
    id > 0 ? setId(id - 20) : setId(id);
  }

  return (
    <main>
      {hideprev && (
        <button type="button" onClick={prevPage}>
          Previous Page
        </button>
      )}
      {hidenext && (
        <button type="button" onClick={nextPage}>
          Next Page
        </button>
      )}

      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}

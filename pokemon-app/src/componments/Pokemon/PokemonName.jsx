import React, { useState } from 'react'
import { useQuery } from "@tanstack/react-query";
import FetchingPokemonLists from '../../Services/FetchPokemonList';
import PokemonDetails from './PokemonDetails';

const PokemonName = () => {
  const [offset, setOffset] = useState(0);
//   const [pokemon, setPokemon] = useState([]);

  const requestPokemonName = useQuery({
    queryKey: ['pokemonName', {offset}],
    queryFn: FetchingPokemonLists
  });

  if (requestPokemonName.isLoading) {
    return (
        <div>Loading...</div>
    );
  };

  if (requestPokemonName.error) {
    return (
        <div>An error has occurred: ${requestPokemonName.error.message}</div>
    );
  };

  const pokemonNameList = requestPokemonName.data.results;

  console.log("pokemon name: ", pokemonNameList);  

  // Handlers for pagination
  const handlePrevious = () => {
    setOffset(Math.max(0, offset - 9)); // Ensure offset doesn't go below 0
  };

  const handleNext = () => {
    setOffset(offset + 9);
  };
  
    return (
    <div>
        <h1>Pokemon Name</h1>
        <button onClick={handlePrevious} disabled={offset === 0}>
            Previous
        </button>
        <button onClick={handleNext}>
            Next
        </button>
        <ul>
            {pokemonNameList.map(pokemon => (
            <li key={pokemon.name}>{pokemon.name}</li>
            ))}
        </ul>
        <h2>Details of pokemon</h2>
        <PokemonDetails pokemon={pokemonNameList}/>
    </div>
    
  );
};

export default PokemonName;
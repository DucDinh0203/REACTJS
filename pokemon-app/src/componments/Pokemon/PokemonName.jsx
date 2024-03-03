import React, { useEffect, useState } from 'react';
import FetchPokemonList from '../../Services/FetchPokemonList';
import Pokemon from './Pokemon';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PokemonName = () => {
  const [pokemonInfo, setPokemonInfo] = useState([]);
  const [page, setPage] = useState(1);

  const getPokemonInfo = async (page) => {
    try {
      const requestPokemonInfo = await FetchPokemonList(page);
      setPokemonInfo(requestPokemonInfo);
    } catch (error) {
      console.log("Failed to fetch pokemon data: ", error);
    }
  };

  const handleChange = (e, p) =>{
    setPage(p);
  }

  useEffect(() => {
    getPokemonInfo(page);
  }, [page]);

  return (
  <div>
      <h1>Pokemon Name</h1>
      {
        !pokemonInfo.length ? (
          <h1>No pokemon found</h1>
        ) : (
          pokemonInfo.map((pokemon) => {
            return (
              <Pokemon
                key={pokemon.id}
                name={pokemon.name}
                weight={pokemon.weight}
                height={pokemon.height}
              />
            );
          })
        )
      }
        <div> current page is {page}</div>
        <Stack>
          <Pagination 
            count={10} 
            variant="outlined" 
            shape="rounded"
            onChange={handleChange}
          />
        </Stack>
  </div>
    
  );
};

export default PokemonName;
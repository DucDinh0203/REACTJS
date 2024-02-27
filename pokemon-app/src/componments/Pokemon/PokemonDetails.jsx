import React from 'react';
import { useQuery } from "@tanstack/react-query";
import fetchingPokemon from '../../Services/FetchPokemon';

const PokemonDetails = ({pokemon}) => {

    const requestPokemonDetails = useQuery({
        queryKey: ['pokemonDetails', {pokemon}],
        queryFn: fetchingPokemon(pokemon),
    });
    
    console.log("props pokemon: ", pokemon);

    if(requestPokemonDetails.isLoading) {
        return (
            <div>Pokemon loading....</div>
        );
    };

    if (requestPokemonDetails.error) {
        return (
            <div>An error has occurred: ${requestPokemonDetails.error.message}</div>
        );
    }

    const pokemonDetails = requestPokemonDetails.data;
    console.log("Pokemon details: ", pokemonDetails);
    
  return (
    <div>
        <h1>PokemonDetails</h1>
    
    </div>
  )
}

export default PokemonDetails
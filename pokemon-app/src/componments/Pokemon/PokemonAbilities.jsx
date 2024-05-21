import React from 'react';
import FetchingPokemonData from '../../Services/FetchingPokemonData';
import { useQuery } from "@tanstack/react-query";

const PokemonAbilities = (props) => {
    const {name} = props

    const {data, error, isLoading, isError} = useQuery({
        queryKey: ["PokemonDetails", name], 
        queryFn: FetchingPokemonData
    });

    if (isLoading) {
        return (
        <div>
            Loadinggg...
        </div>
        );
    }

    if (isError) {
        return (
        <div>
            Error: {error.message}
        </div>
        )
    }
    console.log("abilities: ",data.abilities[0].ability.name);
  return (
    <div className='abilities-container'>
        <h2 className='detail-sub-heading'>Abilities</h2>
        <div className='abilities-content'>
            <button>{data.abilities[0].ability.name}</button>
            <button>{data.abilities[1].ability.name}</button>
        </div>
    </div>
  )
}

export default PokemonAbilities
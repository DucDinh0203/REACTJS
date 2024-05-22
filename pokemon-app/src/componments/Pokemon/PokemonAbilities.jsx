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

  return (
    <div className='abilities-container'>
        <h2 className='sub-heading grid-8'>Abilities</h2>
        <div className='abilities-content'>
            <button className='about-num grid-9'>{data.abilities[0].ability.name}</button>
            <button className='about-num grid-10'>{data.abilities[1].ability.name}</button>
        </div>
    </div>
  )
}

export default PokemonAbilities
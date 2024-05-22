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

    const displayPokemonAbilities = (pokemonAbilities) => {
        return pokemonAbilities.map((abilities, index) => {
            return (
                <button
                    key={index}
                    className={`about-num ability-${index}`}
                >
                    {abilities.ability.name}
                </button>
            );
        })
    }

    return (
        <div className='abilities-container'>
            <h2 className='sub-heading grid-8'>Abilities</h2>
            <div className='abilities-content'>
                {
                    displayPokemonAbilities(data.abilities)
                }
            </div>
        </div>
    )
}

export default PokemonAbilities
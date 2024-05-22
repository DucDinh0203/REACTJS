import React from 'react';
import FetchingPokemonData from '../../Services/FetchingPokemonData';
import { useQuery } from "@tanstack/react-query";

const PokemonEvolution = (props) => {
    const {name} = props;

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
        <div className='evolution-container'>
            <h1 className='detail-sub-heading'>Evolution</h1>
        </div>
    )
}

export default PokemonEvolution
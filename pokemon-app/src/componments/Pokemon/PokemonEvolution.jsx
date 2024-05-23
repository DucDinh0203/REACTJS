import React from 'react';
import { useQuery } from "@tanstack/react-query";
import FetchingPokemonEvolution from '../../Services/FetchingPokemonEvolution';

const PokemonEvolution = (props) => {
    const {id} = props;

    const {data, error, isLoading, isError} = useQuery({
        queryKey: ["PokemonDetails", id], 
        queryFn: FetchingPokemonEvolution
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

    console.log("Pokemon evolutions: ", data.chain);

    return (
        <div className='evolution-container'>
            <h1 className='detail-sub-heading'>Evolution</h1>
        </div>
    )
}

export default PokemonEvolution
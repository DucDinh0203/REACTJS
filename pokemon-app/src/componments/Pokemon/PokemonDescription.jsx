import React from 'react'
import FetchingPokemonSpecies from '../../Services/FetchingPokemonSpecies';
import { useQuery } from "@tanstack/react-query";

const PokemonDescription = (props) => {
    const {name} = props

    const {data, error, isLoading, isError} = useQuery({
        queryKey: ["PokemonSpecies", name], 
        queryFn: FetchingPokemonSpecies
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

    // console.log(data.flavor_text_entries[0].flavor_text);

    return (
        <div className='description-container'>
            <h2>Description</h2>
            <p className='description-content'>
                {
                    data.flavor_text_entries[0].flavor_text
                }
            </p>
        </div>
    )
}

export default PokemonDescription
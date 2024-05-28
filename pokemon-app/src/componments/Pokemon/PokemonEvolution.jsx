import React from 'react';
import { useQuery } from "@tanstack/react-query";
import FetchingPokemonSpecies from '../../Services/FetchingPokemonSpecies';
import FetchingPokemonEvolution from '../../Services/FetchingPokemonEvolution';

const PokemonEvolution = (props) => {
    const  {name} = props;

    const { data: speciesData, error: speciesError, isLoading: speciesLoading, isError: speciesIsError } = useQuery({
        queryKey: ["PokemonSpecies", name], 
        queryFn: FetchingPokemonSpecies
    });

    // Check if species data is available and extract evolution chain URL
    const evoluChainUrl = speciesData.evolution_chain.url;
    const evolu_chain_id =  evoluChainUrl.match(/\d+/g).map(Number)[1];

    const { data: evolData, error: evolError, isLoading: evolLoading, isError: evolIsError } = useQuery({
        queryKey: ["PokemonEvolution", evolu_chain_id],
        queryFn: FetchingPokemonEvolution,
        enabled: !!evolu_chain_id // Ensure the second query only runs if evolu_chain_id is available
    });

    if (speciesLoading) {
        return (
            <div>
                Loading...
            </div>
        );
    }

    if (speciesIsError) {
        return (
            <div>
                Error: {speciesError.message}
            </div>
        );
    }

    if (evolLoading) {
        return (
            <div>
                Evolution Loading...
            </div>
        );
    }

    if (evolIsError) {
        return (
            <div>
                Error: {evolError.message}
            </div>
        );
    }

    console.log("Pokemon evolutions chain: ", evolData.chain.evolves_to[0].evolves_to[0].species.name);


    return (
        <div className='evolution-container'>
            <h1 className='detail-sub-heading'>Evolution</h1>
            <div>
                {
                    `${evolData.chain.species.name} ------ ${evolData.chain.evolves_to[0].species.name} ------ ${evolData.chain.evolves_to[0].evolves_to[0].species.name}`
                    

                }
            </div>
        </div>
    )
}

export default PokemonEvolution
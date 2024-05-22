import React from 'react';
import FetchingPokemonData from '../../Services/FetchingPokemonData';
import { useQuery } from "@tanstack/react-query";

const PokemonStats = (props) => {
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

    const displayPokemonStats = (PokemonStats) => {
        return PokemonStats.map((stats, index) => {
            return (
                <div className={`stats-${index}`} key={index}>
                        {stats.stat.name}:   {stats.base_stat}
                </div>
            );
        });
    };
    console.log(data.stats);

    return (
        <div className='stats-container'>
            <h1 className='sub-heading'>Stats base</h1>
            <div className='stats-content'>
                {
                    displayPokemonStats(data.stats)
                }
            </div>
        </div>
    )
}

export default PokemonStats
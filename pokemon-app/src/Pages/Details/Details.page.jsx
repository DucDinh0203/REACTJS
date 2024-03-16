import React from 'react';
import { useParams } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";
import FetchingPokemonData from '../../Services/FetchingPokemonData';
import './Details.style.css';
import HeaderComponments from '../../Componments/Header/Header.componments';

// Pokemon details outline page
const Details = () => {
    const { name } = useParams();
    console.log("name in pokemonDetails: ", name);
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
        <div className='details'>
            <header>
                <HeaderComponments/>
            </header>
            <div className='details-container'>
                {
                    `this is the details page of Pokemon ${data.name}`
                }
            </div>

        </div>
    )
}

export default Details
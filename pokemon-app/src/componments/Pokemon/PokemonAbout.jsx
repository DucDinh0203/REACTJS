import React from 'react'
import FetchingPokemonData from '../../Services/FetchingPokemonData';
import { useQuery } from "@tanstack/react-query";
import PokemonDescription from './PokemonDescription';

const PokemonAbout = (props) => {
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
        <div className='about-container'>
            <h1>About me</h1>
            <PokemonDescription name={name}/>
            <div>
                <p>height: {data.height} cm</p>
                <p>weight: {data.weight} kg</p>
            </div>
        </div>
    )
}

export default PokemonAbout
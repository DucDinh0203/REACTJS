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

    const displayPokemonType = (pokemonTypes) => {
        return pokemonTypes.map((types, index) => {
            const iconUrl = `../../asset/pokemonTypesIcons/${types.type.name}.svg`;
            return (
                <button 
                    key={index}
                    className={`${types.type.name} type-button`}
                >
                    <img src={iconUrl} alt={types.type.name}/>
                    {types.type.name}
                </button>
            );
        });
    }

    return (
        <div className='about-container'>
            <div className='about-type'>
                <p>{displayPokemonType(data.types)}</p>
            </div>
            <h1>About me</h1>
            <PokemonDescription name={name}/>
            <div className='about-hw'>
                <span>Height: {data.height/10}m</span>
                <span>Weight: {data.weight/10}kg</span>
            </div>
            
        </div>
    )
}

export default PokemonAbout
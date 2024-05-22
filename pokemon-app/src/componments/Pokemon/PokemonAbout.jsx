import React from 'react'
import FetchingPokemonData from '../../Services/FetchingPokemonData';
import { useQuery } from "@tanstack/react-query";
import PokemonDescription from './PokemonDescription';
import PokemonAbilities from './PokemonAbilities';


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
                    className={`${types.type.name} type-button grid-${index+6}`}
                >
                    <img src={iconUrl} alt={types.type.name}/>
                    {types.type.name}
                </button>
            );
        });
    }

    return (
        <div className='about-container grid-table'>
            <PokemonDescription name={name}/>
            <div className='about-hw'>
                <div className='height grid-3'>
                    <h2 className='sub-heading'>Height: </h2>  
                    <button className='about-num'>{data.height/10}m</button>
                </div>
                <div className='weight grid-4'>
                    <h2 className='sub-heading'>Weight: </h2>  
                    <button className='about-num'>{data.weight/10}kg</button>
                </div>
            </div>
            <div className='about-type'>
                <h2 className='sub-heading grid-5'>Types: </h2>
                <div className='about-type-content'>
                    {
                        displayPokemonType(data.types)
                    } 
                </div>
            </div>
            <PokemonAbilities name = {name}/>            
        </div>
    )
}

export default PokemonAbout
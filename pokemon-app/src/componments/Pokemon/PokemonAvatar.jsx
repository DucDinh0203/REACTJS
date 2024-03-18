import React from 'react';
import FetchingPokemonData from '../../Services/FetchingPokemonData';
import { useQuery } from "@tanstack/react-query";

const PokemonAvatar = (props) => {
    const {name} = props;

    const formatPokemonID = (idNum) => {
        if (idNum <10) return `#00${idNum}`;
        else if (idNum >= 10 && idNum <= 99) return `#0${idNum}`;
        else return `#${idNum}`;
    }

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
        <div className='avatar-container'>
            <div className={`${data.types[0].type.name} img-container`}>
                <div className='avatar-id'>
                    <p><i>{formatPokemonID(data.id)}</i></p>
                </div>
                <img className='avatar-img' src={data.sprites.other.dream_world.front_default} alt={data.name}/>
                <div className='avatar-name'>
                    <p>{data.name}</p>
                </div>
            </div>
            
        </div>

    )
}

export default PokemonAvatar
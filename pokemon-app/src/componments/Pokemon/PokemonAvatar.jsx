import React from 'react';
import FetchingPokemonData from '../../Services/FetchingPokemonData';
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const PokemonAvatar = (props) => {
    const {name} = props;
    const navigate = useNavigate();

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
        <div className={`${data.types[0].type.name} avatar-container`}>
            <button
                onClick={() => navigate(-1)}
            >Go back</button>
            <div className='avatar-id'>
                <p>{formatPokemonID(data.id)}</p>
            </div>
            <div className='avatar-img'>
                <img  src={data.sprites.other.home.front_default} alt={data.name}/>
            </div>
            <div className='avatar-name'>
                <p>{data.name}</p>
            </div>
        </div>
    )
}

export default PokemonAvatar
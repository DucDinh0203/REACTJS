import React from 'react';
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import FetchingPokemonData from '../../Services/FetchingPokemonData';
import './Details.style.css';
import HeaderComponments from '../../Componments/Header/Header.componments';
import PokemonAvatar from '../../Componments/Pokemon/PokemonAvatar';
import PokemonAbout from '../../Componments/Pokemon/PokemonAbout';

// Pokemon details outline page
const Details = () => {
    const { name } = useParams();

    return (
        <div className='details'>
            <header>
                <HeaderComponments/>
            </header>
            <div className='details-container'>
                <PokemonAvatar name={name}/>
                <div className='details-content'>
                    <PokemonAbout name={name}/>
                    <div className='abilities-container'>
                        <h1>Abilities</h1>
                    </div>
                    <div className='stats-container'>
                        <h1>Stats</h1>
                    </div>
                    <div className='evolution-container'>
                        <h1>Evolution</h1>
                    </div>
                </div>
                
            </div>

        </div>
    )
}

export default Details
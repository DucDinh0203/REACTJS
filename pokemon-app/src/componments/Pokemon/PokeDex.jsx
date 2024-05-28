import React, { useEffect, useState } from 'react';
import FetchPokemonList from '../../Services/FetchPokemonList';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import PokemonCard from './PokemonCard';
import './Pokemon.style.css'


const PokeDex = () => {
   
    const [pokemonInfo, setPokemonInfo] = useState([]);
    const [page, setPage] = useState(1);

    const getPokemonInfo = async () => {
        try {
            const requestPokemonInfo = await FetchPokemonList(page);
            setPokemonInfo(requestPokemonInfo);
        } catch (error) {
            console.log("Failed to fetch pokemon data: ", error);
        }
    };

    const handleChange = (e, p) =>{
        setPage(p);
    };

    useEffect(() => {
        getPokemonInfo();
        // eslint-disable-next-line
    }, [page]); 

    return (
        <div className='pokedex-container'>
            <PokemonCard pokemonInfoList={pokemonInfo}/>
            <Stack>
                <Pagination 
                    className='pagination'
                    count={120} 
                    variant="outlined" 
                    shape="rounded"
                    onChange={handleChange}
                />
            </Stack>
        </div>
    );
};

export default PokeDex
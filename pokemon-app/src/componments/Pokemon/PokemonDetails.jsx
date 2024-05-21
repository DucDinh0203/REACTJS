import React from 'react';
import { useParams } from "react-router-dom";
import HeaderComponments from '../Header/Header.componments';
import { useQuery } from "@tanstack/react-query";
import FetchingPokemonData from '../../Services/FetchingPokemonData';
import Pokemon from './Pokemon';
import './Pokemon.style.css';

const PokemonDetails = () => {
  const { name } = useParams();
  console.log("name in pokemonDetails: ", name);
  const {data, error, isLoading, isError} = useQuery({
    queryKey: ["details", name], 
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
    <div className='pokemon-details'>
      <header>
        <HeaderComponments/>
      </header>
      <div className='details-container'>
        <div className='pokemonDetails-card'>
          {
            <Pokemon
              key={data.id}
              name={data.name}
              weight={data.weight}
              height={data.height}
              id={data.id}
              types={data.types}
            />
          }
        </div>
        {/* <div className='pokemonDetails-stat'></div> */}
      </div>
    </div>
  )
}

export default PokemonDetails
import React from 'react';
import { useParams } from "react-router-dom";

const PokemonDetails = () => {
  const { name } = useParams();


  return (
    <div className='pokemon-details'>
        Pokemon details of {name}
    </div>
  )
}

export default PokemonDetails
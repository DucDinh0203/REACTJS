import React, { useState } from 'react'
import './Home.style.css';
import { useQuery } from "@tanstack/react-query";
import FetchingPokemonLists from '../../Services/FetchPokemonList';
import PokemonName from '../../Componments/Pokemon/PokemonName';

const HomePage = () => {
  
  return (
    <div>
      <h1>Home Page</h1>
      <div>Pokemon List</div>
      <PokemonName/>
    </div>
  )
}

export default HomePage;
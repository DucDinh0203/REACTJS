import React, { useEffect, useState } from 'react'
import './Home.style.css';
import axios from 'axios';
// import FetchPokemonList from '../../Services/FetchPokemonList';
// import Pokemon from '../../Componments/Pokemon/Pokemon';
import { useQuery } from "@tanstack/react-query";
import FetchingPokemonLists from '../../Services/FetchPokemonList';

const HomePage = () => {
  // const [pokemons, setPokemons] = useState([]);
  // const [offset, setOffsets] = useState(9);

  // const requestPokemons = useQuery(["pokemonLists", offset], FetchingPokemonLists);


  // if(requestPokemons.isLoading) {
  //   return (
  //     <div>Loading...</div>
  //   );
  // }

  // const poke = requestPokemons.data;
  // console.log("poke: ", poke);

  return (
    <div>
        <h1>Home Page</h1>
        <div>Pokemon List</div>
        

    </div>
  )
}

export default HomePage;
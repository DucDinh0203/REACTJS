import React, { useEffect } from 'react'
import './Home.style.css';
import FetchPokemonList from '../../Services/FetchPokemonList';
import axios from 'axios';


const HomePage = () => {
  
  const URL_LINK = `https://pokeapi.co/api/v2/pokemon?limit=9&offset=0`;

  const loadPokemon = async () => {
    const res = await axios.get(URL_LINK);
    console.log(res.data.results);
    
  }

  useEffect(() => {
    FetchPokemonList(1);
    // loadPokemon();
  }, []);

  return (
    <div>
        <h1>Home Page</h1>
    </div>
  )
}

export default HomePage;
import React from 'react'
import Pokemon from './Pokemon';

const PokemonCard = ({pokemonInfoList}) => {
    return (
        <div className='pokemonCard-container'>
            {!pokemonInfoList.length ? (
                <h1>No pokemon found</h1>
            ) : (
                    pokemonInfoList.map((pokemon) => {
                        return (
                            <Pokemon
                                key={pokemon.id}
                                name={pokemon.name}
                                weight={pokemon.weight}
                                height={pokemon.height}
                                id={pokemon.id}
                                types={pokemon.types}
                            />
                        );
                    })
                )
            }
        </div>
    )
}

export default PokemonCard
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchPokemon } from '../redux/actions/pokemonListAction'
import PokemonCard from './PokemonCard'

const PokemonData = ({ dispatch, pokemonList }) => {

    useEffect(() => {
        dispatch(fetchPokemon())
    }, [dispatch])

    return (
        <div>
            {pokemonList.list.map(pokemon => (
                // <li key={pokemon.name}>
                //     {pokemon.name}
                // </li>
                <div key={pokemon.name}>
                    <PokemonCard
                        name={pokemon.name}
                        url={pokemon.url}
                    />
                </div>
            ))}
        </div>
    )
}

export default connect((state) => {
    return state
})(PokemonData)
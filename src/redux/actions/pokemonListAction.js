

export const FETCH_POKEMON_REQUEST = 'FETCH_POKEMON_REQUEST'
export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS'
export const FETCH_POKEMON_ERROR = 'FETCH_POKEMON_ERROR'

export const fetchPokemon = () => (dispatch) => {
    
    dispatch({ type: FETCH_POKEMON_REQUEST})
    
    fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
    .then(res => res.json())
    .then(pokemonList => {
        console.log('Este es un aviso',pokemonList)
        // console.log(pokemonList)
        dispatch({
            type: FETCH_POKEMON_SUCCESS,
            payload: {
                pokemonList
            }
        })
    })
    .catch(error => {
        dispatch({
            type: FETCH_POKEMON_ERROR,
            error: error.toString()
        })    
    })
}
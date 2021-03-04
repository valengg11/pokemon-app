import { FETCH_POKEMON_ERROR, FETCH_POKEMON_SUCCESS, FETCH_POKEMON_REQUEST } from '../actions/pokemonListAction'

const initialState = {
    list: [],
    isFetching: false,
    error: null
}

function pokemonList (state = initialState, action) {
    switch (action.type) {
        case FETCH_POKEMON_REQUEST:
            return {
                ...state,
                isFetching: true
            }

        case FETCH_POKEMON_SUCCESS:
            console.log('From the reducer',action.payload)
            return {
                ...state,
                isFetching: false,
                list: [...action.payload.pokemonList.results]
            }
          
        case FETCH_POKEMON_ERROR:
            return{
                ...state,
                isFetching: false,
                error: action.payload.error
            }

        default:
            return state
    }
}

export default pokemonList
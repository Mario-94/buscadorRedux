import axios from "axios";

//   constantes
const dataInitial = {
    array: [],

}
const URL = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
const GET_POKEMON_SUCCESS = "GET_POKEMON_SUCCESS"
// reducers
export default function pokeReducer(state = dataInitial, action) {

    switch (action.type) {
        case GET_POKEMON_SUCCESS:
            return {
                ...state,
                array: action.payload
            }
        default:
            return state;
    }
}
// acciones

// realizamos una funcion de flecha que regresa otra funcion de flecha, la primera no recibe alguna funcion y la segunda funcion si recibe parametros, un dispatch y un getState
export const obtenerPokemonAccion = () => async (dispatch, getState) => {
    try {
        const res = await axios.get(URL)
        dispatch({
            type: GET_POKEMON_SUCCESS,
            payload: res.data.results
        })
    } catch (error) {
        console.log(error)
    }

}
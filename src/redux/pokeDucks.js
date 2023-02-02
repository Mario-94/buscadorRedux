import axios from "axios";

//   constantes
const dataInitial = {
    array: [],
    // Agregamos el offset para de esta manera tener una paginacion sin estilos
    offset: 0,

}
const URL = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
const GET_POKEMON_SUCCESS = "GET_POKEMON_SUCCESS"
const NEXT_POKEMON_SUCCESS = "NEXT_POKEMON_SUCCESS"
// reducers
export default function pokeReducer(state = dataInitial, action) {

    switch (action.type) {
        case GET_POKEMON_SUCCESS:
            return {
                ...state,
                array: action.payload
            }
        case NEXT_POKEMON_SUCCESS:
            return {
                ...state,
                array: action.payload.array,
                offset: action.payload.offset
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
// En la primera funcion aceptamos el numero que es mandado desde el componente Pokemon
export const siguientePokemonAccion = (numero) => async (dispatch, getState) => {
    const offset = getState().pokemones.offset;
    const siguiente = offset + numero;
    try {


        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${siguiente}&limit=20`)
        dispatch({
            type: NEXT_POKEMON_SUCCESS,
            payload: {
                array: res.data.results,
                offset: siguiente
            }
        })
    } catch (error) {
        console.log(error)
    }
}
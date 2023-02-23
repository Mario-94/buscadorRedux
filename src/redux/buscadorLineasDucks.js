import axios from "axios";
//constantes
const dataInitial = {
    array: [],
    fetching: false,
    buscado: []
}
const URL = `https://mario-94.github.io/pruebaJson/bd/bd.json`
const GET_OFERTAS_SEMANA = "GET_OFERTAS_SEMANA";
const GET_OFERTAS_ERROR = "GET_OFERTAS_ERROR";
const ACTUALIZAR_OFERTAS_SEMANA = "ACTUALIZAR_OFERTAS_SEMANA";

// reducers
export default function lineasReducer(state = dataInitial, action) {
    switch (action.type) {
        case GET_OFERTAS_ERROR:

            return {
                ...state,
                fetching: false
            }
        case GET_OFERTAS_SEMANA:
            return {
                ...state,
                array: action.payload,
                fetching: true
            }
        case ACTUALIZAR_OFERTAS_SEMANA:
            return {
                ...state, 
                fetching: true,
                buscado: action.payload

            }

        default:
            return state;
    }
}

// acciones
export const obtenerListaAccion = () => async (dispatch, getState) => {
    try {
        const res = await axios.get(URL)
        dispatch({
            type: GET_OFERTAS_SEMANA,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
}
export const buscadorArticulos = (datos) => (dispatch, getState) => {
    
    dispatch({
        type: ACTUALIZAR_OFERTAS_SEMANA,
        payload: datos

    })
}
import axios from "axios";
//constantes
const dataInitial = {
    array: [],
    fetching: false,
    buscado: []
}
const URL = `https://mario-94.github.io/pruebaJson/bd/bd.json`
const GET_LINEAS_SUCCESS = "GET_LINEAS_SUCCESS";
const GET_LINEAS_ERROR = "GET_LINEAS_ERROR";
const ACTUALIZAR_LINEAS_SUCCESS = "ACTUALIZAR_LINEAS_SUCCESS";

// reducers
export default function lineasReducer(state = dataInitial, action) {
    switch (action.type) {
        case GET_LINEAS_ERROR:

            return {
                ...state,
                fetching: false
            }
        case GET_LINEAS_SUCCESS:
            return {
                ...state,
                array: action.payload,
                fetching: true
            }
        case ACTUALIZAR_LINEAS_SUCCESS:
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
            type: GET_LINEAS_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
}
export const buscadorArticulos = (datos) => (dispatch, getState) => {
    
    dispatch({
        type: ACTUALIZAR_LINEAS_SUCCESS,
        payload: datos

    })
}
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// importanos el reducer del archivo pokeDucks
import pokeReducer from "./pokeDucks";

import lineasReducer, { obtenerListaAccion } from "./buscadorLineasDucks";
const rootReducer = combineReducers({
    pokemones: pokeReducer,
    lineaArticulos:lineasReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default function generateStore() {
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
     obtenerListaAccion()(store.dispatch,store.getState)
    return store;
}
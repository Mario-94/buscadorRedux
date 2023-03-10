import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { obtenerPokemonAccion,siguientePokemonAccion } from "../redux/pokeDucks";

const Pokemones = () => {
  // Esta funcion me permite entrar a la funcion obtenerPokemonAccion de tal manera que me permite ejecutar una peticion a una api o alguna accion que programamos en pokeDucks
  const dispatch = useDispatch();
  // Mientras que el selector lo que me permite es entrar a la store, a rootReducer, para acceder a pokemones o cualquier valor que tenga en el cobineReducers, en este caso store.pokemones.array es como si entraramos a pokeDucks, a la data que esta en array.
  const pokemones = useSelector((store) => store.pokemones.array);

  return (
    <div>
      Lista de pokemones
      <hr />
      <button onClick={() => dispatch(obtenerPokemonAccion())}>
        Get pokemons
      </button>
      {/* el parametro que le pasaremos a la funcion siguientePokemonAccion es la que me permite tener acciones extras  en este caso le mandamos el dato para que realice el cambio de pagina desde el inicio*/}
      <button onClick={() => dispatch(siguientePokemonAccion(20))}>
        siguientes pokemones
      </button>
      <ul>
        {pokemones.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Pokemones;

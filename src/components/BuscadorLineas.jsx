import React from "react";
import { useSelector } from "react-redux";

const BuscadorLineas = () => {
  const data = useSelector((store) => store.lineaArticulos);
  const handleSubmit = (e) => {
    e.preventDefault();
    
  };
  const handleChange=(e)=>{
    console.log(e.target.value)
  }
  // la funcion que quiero hacer lo que intento es despachar una accion que actualice a un nuevo array dentro del store, de esta manera poder seguir teniendo la paginacion como la tenemos, pero con un array nuevo diferente al original, de esta manera no afectare el funcionamiento de la paginacion, como esta actualmente.
  return (
    <div className="form-group">
      {data.fetching ? (
        <>
          <form action="" onSubmit={handleSubmit}>
            <label htmlFor="buscar_linea" className="text-black">
              Buscar
            </label>
            <input type="text" name="" id=""  onChange={handleChange}/>
            <button className="btn btn-primary mt-3">buscar</button>
            <ul>
              {data.array.products.map((item, index) => (
                <li key={index}>{item.Descripcion1}</li>
              ))}
              {/* {console.log(data.array.products)} */}
            </ul>
          </form>
        </>
      ) : (
        <div>no esta..</div>
      )}
    </div>
  );
};

export default BuscadorLineas;

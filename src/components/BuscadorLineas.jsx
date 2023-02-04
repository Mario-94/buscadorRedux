import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buscadorArticulos } from "../redux/buscadorLineasDucks";

const BuscadorLineas = () => {
  const data = useSelector((store) => store.lineaArticulos);
  const [search, setSearch] = useState("");
  const [productos, setProductos] = useState([]);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    cargarDatos();
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  function cargarDatos() {
    const result = !search
      ? productos
      : productos.filter((datos) =>
          datos.Descripcion1.toLowerCase().startsWith(
            search.toLocaleLowerCase()
          )
        );

    setProductos(result);
  }
  useEffect(() => {
    setProductos(data.array.products);
  }, [data]);
  // la funcion que quiero hacer lo que intento es despachar una accion que actualice a un nuevo array dentro del store, de esta manera poder seguir teniendo la paginacion como la tenemos, pero con un array nuevo diferente al original, de esta manera no afectare el funcionamiento de la paginacion, como esta actualmente.
  return (
    <div className="form-group">
      {data.fetching ? (
        <>
          <form action="" onSubmit={handleSubmit}>
            <label htmlFor="buscar_linea" className="text-black">
              Buscar
            </label>
            <input
              value={search}
              type="text"
              name=""
              id=""
              onChange={handleChange}
            />
            <button
              className="btn btn-primary mt-3"
              onClick={() => dispatch(buscadorArticulos(productos))}
            >
              buscar
            </button>

            <ul>
              {console.log(productos)}
              {data.array.products.map((item, index) => (
                <li key={index}>{item.Descripcion1}</li>
              ))}
              
            </ul>
          </form>

          {/* <button
              className="btn btn-primary mt-3"
              onClick={() => dispatch(buscadorArticulos(productos))}
            >
              revisar
            </button> */}
        </>
      ) : (
        <div>no esta..</div>
      )}
    </div>
  );
};

export default BuscadorLineas;

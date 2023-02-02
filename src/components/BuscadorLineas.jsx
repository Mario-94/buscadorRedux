import React from "react";
import { useSelector } from "react-redux";

const BuscadorLineas = () => {
  const data = useSelector((store) => store.lineaArticulos);
  return (
    <div className="form-group">
      {data.fetching ?
      <>
      <label htmlFor="buscar_linea" className="text-black">
        Buscar
      </label>
      <input type="text" name="" id="" />
      <button className="btn btn-primary mt-3">buscar</button>
      <ul>
        {data.array.products.map((item, index) => (
          <li key={index}>{item.Descripcion1}</li>
        ))}
        {/* {console.log(data.array.products)} */}
      </ul>
      </>
      :<div>no esta</div>}

      
    </div>
  );
};

export default BuscadorLineas;

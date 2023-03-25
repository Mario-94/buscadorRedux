import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const Prueba = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const data = useSelector((store) => store.lineaArticulos);
  const [search, setSearch] = useState("");
  const [productos, setProductos] = useState([]);
  const dispatch = useDispatch();
  const onSubmit = () => {
    console.log("entro");
    cargarDatos();
  };

  const handleChange = (e) => {
    console.log(e.key);
    const { value } = e.key;
    // console.log("letra precionada",e.key ,"", "palabra recolectada",value);
    setSearch(value);
    if (e.key === "Enter") {
      setSearch(value);
    } else if (e.key === "Backspace" || e.target.value === "") {
      setProductos(data.array.products);
    }
  };
  const cargarDatos = () => {
    const result = !search
      ? productos
      : productos.filter((datos) =>
          datos.Descripcion1.toLowerCase().startsWith(
            search.toLocaleLowerCase()
          )
        );

    setProductos(result);
  };
  useEffect(() => {
    setProductos(data.array.products);
  }, [data]);
console.log(data.array.products)
  return (
    <div>
      <h1>Formulario</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">buscar</label>
        <input
          value={search}
          type="search"
          {...register("palabra", { pattern: /^(?!\s)/, required: true })}
          onKeyDown={handleChange}
        />{" "}
        {errors.palabra?.type === "pattern" && (
          <span>NO puedes tener espacios al inicio</span>
        )}{" "}
        {errors.palabra?.type === "required" && (
          <span>El campo es requeriod</span>
        )}
        <pre>{JSON.stringify(productos)}</pre>
        <input type="submit" value="Buscar" />
      </form>
    </div>
  );
};

export default Prueba;

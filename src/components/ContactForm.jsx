import React from "react";
import { useForm } from "../hooks/useForm";
const initialForm = {
  name: "",
  email: "",
  subjet: "",
  comments: "",
};
const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;
  if (!form.name.trim()) {
    errors.name = "el campo 'nombre es requerido'";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "El campo 'Nombre solo acepta letras y espacios en blanco'";
  }
  if (!form.email.trim()) {
    errors.email = "el campo 'email es requerido'";
  }
  else if (!regexEmail.test(form.name.trim())) {
    errors.name = "El campo 'Email solo acepta correos validos'";
  }
  if (!form.subjet.trim()) {
    errors.subjet = "el campo 'Asunto es requerido'";
  }
  
  if (!form.comments.trim()) {
    errors.comments = "el campo 'Debes de agrega un comentario'";
  } else if (!regexComments.test(form.name.trim())) {
    errors.name = "Debe contener menos de 255 caracteres";
  }
  return errors;
};
const ContactForm = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);
  return (
    <div>
      <hr />
      <h2>ContactForm</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          id=""
          placeholder="Escribe tu nombre"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.name}
          required
        />
        <br />
        {errors.name && <p>{errors.name}</p>}
        <input
          type="email"
          name="email"
          id=""
          placeholder="Escribe tu email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.email}
          required
        />
        <br />
        {errors.email && <p>{errors.email}</p>}
        <input
          type="text"
          name="subjet"
          id=""
          placeholder="Asuntoa tratar"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.subjet}
          required
        />
        <br />
        {errors.subjet && <p>{errors.subjet}</p>}
        <textarea
          name="comments"
          id=""
          cols="30"
          rows="5"
          placeholder="Escribe tu comentario"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.comments}
          required
        ></textarea>
        <br />
        {errors.comments && <p>{errors.comments}</p>}
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default ContactForm;

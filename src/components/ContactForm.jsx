import React from "react";
import { useForm } from "../hooks/useForm";
const initialForm = {};
const validationsForm = {};
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
      <form onSubmit={handleSubmit} className="">
        <input
          type="text"
          name="name"
          id=""
          placeholder="Escribe tu nombre"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.name}
          required
        />
        <input
          type="email"
          name="email"
          id=""
          placeholder="Escribe tu email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.name}
          required
        />
        <input
          type="subjet"
          name="subjet"
          id=""
          placeholder="Asuntoa tratar"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.name}
          required
        />
        <textarea
          name="comments"
          id=""
          cols="30"
          rows="5"
          placeholder="Escribe tu comentario"
        ></textarea>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default ContactForm;

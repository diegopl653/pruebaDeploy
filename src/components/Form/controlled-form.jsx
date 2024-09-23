import { useState, useRef } from "react";

import "./controlled-form.css";

const ControlledForm = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const emailRef = useRef();

  const handleChange = (evento) => {
    setName(evento.target.value);
    console.log(evento.target.value);
  };

  const handleSubmit = (evento) => {
    evento.preventDefault();
    console.log(`Email: ${emailRef.current.value}`);

    if(name === ""){
        setError("Nombre requerido")
    } else {
        console.log("Form enviado");
        setError("")
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} action="" className="formulario">
        <label htmlFor="nombre">Name</label>
        <input
          type="text"
          name="nombre"
          id="nombre"
          value={name}
          onChange={handleChange}
        />
        {error && <p className="error">{error}</p>}
        <label htmlFor="email">Email</label>
        <input type="email" name="email" ref={emailRef} id="email" />
        <button type="submit">enviar</button>
      </form>
    </>
  );
};
export default ControlledForm;

import { useState } from "react";

import { createUser } from "../services/users";

import "./CreateUser.css";

const CreateUser = () => {
  const [ci, setCi] = useState(0);
  const [father_name, setFather_name] = useState("");
  const [mother_name, setMother_name] = useState("");
  const [names, setNames] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      ci: ci,
      father_name: father_name,
      mother_name: mother_name,
      names: names,
      username: username,
      password: password,
    };
    try {
      const response = await createUser(body);
      console.log(response);
    } catch (error) {
      throw new Error(error);
    }
  };

//   console.log(ci, father_name, mother_name, names, username, password);

  return (
    <form action="" className="form" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="">CI</label>
      <input type="number" name="Ci" onChange={(e) => setCi(e.target.value)} />
      <label htmlFor="">APELLIDO PATERNO</label>
      <input
        type="text"
        name="fathername"
        onChange={(e) => setFather_name(e.target.value)}
      />
      <label htmlFor="">APELLIDO MATERNO</label>
      <input
        type="text"
        name="mothername"
        onChange={(e) => {
          setMother_name(e.target.value);
        }}
      />
      <label htmlFor="">NOMBRES</label>
      <input
        type="text"
        name="names"
        onChange={(e) => {
          setNames(e.target.value);
        }}
      />
      <label htmlFor="">NOMBRE DE USUARIO</label>
      <input
        type="text"
        name="username"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <label htmlFor="">CONSTRASEÑA</label>
      <input
        type="password"
        name="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
export default CreateUser;

// {
//     "ci": 123455678,
//     "father_name": "Perez",
//     "mother_name": "Luna",
//     "names": "Diego Fernando",
//     "username": "diego123",
//     "password": "password"
//   }

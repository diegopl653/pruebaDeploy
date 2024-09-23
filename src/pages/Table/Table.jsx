import { useEffect, useState } from "react";
import { getPokemons, createPokemon } from "../../services/pokemon";

import "./Table.css";

const Table = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const getPoke = async () => {
      try {
        const response = await getPokemons();
        setList(response.data.results);
        console.log("mensaje: ", response);
      } catch (error) {
        throw new Error(error);
      }
    };

    getPoke();
  }, []);

  console.log("Lista de estado:", list);

  return (
    <>
      <div className="tableContainer">
        {list.map((obj, idx) => {
          return (
            <div className="table">
              <span>{idx}</span>
              <h1>{obj.name}</h1>
              <p>{obj.url}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Table;

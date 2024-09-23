import { useState, useEffect } from "react";
import { useMemo, useCallback } from "react";

export const Card = () => {
  const [active, setActive] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("Componente montado");
    return () => {
      console.log("componente desmontado");
    }
  }, [active]);

  const handleChange = () => {
    if (active === 0) {
      setActive(1);
    } else {
      setActive(2);
    }
  };

  return (
    <>
      <h3>{name}</h3>
      {active === 0 && (
        <section>
          <h2>Aqui no hay nada</h2>
        </section>
      )}
      {active === 1 && (
        <section>
          <h2>Titulo 1</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sed
            omnis illo? Recusandae totam dolor, tenetur magni veniam quo rem
            neque, rerum culpa saepe dolore sit ut hic placeat ipsum.
          </p>
        </section>
      )}
      {active === 2 && (
        <section>
          <h2>Titulo 2</h2>
          <ul>
            <li>elemento</li>
            <li>elemento</li>
            <li>elemento</li>
          </ul>
        </section>
      )}
      <button onClick={handleChange}>Cambiar</button>
    </>
  );
};

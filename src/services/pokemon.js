import api from "./api";

//Axios

export const getPokemons = async () => {
  try {
    const response = await api.get("pokemon");
    console.log(response);
    return response;
  } catch (error) {
    console.error("No se pudo obtener los datos", error);
    throw new Error(error);
  }
};

export const createPokemon = (body) => {
  try {
    const response = api.post("pokemon", body);
    console.log(response);
  } catch (error) {
    throw new Error(error);
  }
};

//Fetch

export const getPokemonsFetch = (name) => {
  try {
    const response = fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    console.log(response);
    return response;
  } catch (error) {
    throw new Error("No se pudo obtener el pokemon. ", error);
  }
};

export const getPokemonsFetchThen = (name) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response) => response.json())
    .then((data) => console.log(data)
    .catch((error) => console.error(error)))
};
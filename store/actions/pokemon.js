import axios from "axios";

export const SET_POKEMONS = "SET_POKEMONS";

export const fetchPokemon = () => {
  return async (dispatch) => {
    try {
      const allPokemonUrl = await axios
        .get("https://pokeapi.co/api/v2/pokemon")
        .then((item) => (result = item.data.results));

      const loadedPokemon = [];
      for await (const pokemon of allPokemonUrl) {
        const name = pokemon.name;
        await axios
          .get(pokemon.url)
          .then((item) => item.data)
          .then((pokemonInfo) => {
            const id = pokemonInfo.id;
            const height = pokemonInfo.height;
            const weight = pokemonInfo.weight;
            const image =
              pokemonInfo.sprites[Object.keys(pokemonInfo.sprites)[0]];
            const types = pokemonInfo.types.map((item) => item.type.name);
            const abilities = pokemonInfo.abilities.map((item) => {
              let name = item.ability.name;
              return name;
            });
            const pokemonSpeciesUrl = pokemonInfo.species.url;
            const newPokemon = {
              id,
              name,
              image,
              types,
              height,
              weight,
              abilities,
              pokemonSpeciesUrl,
            };
            loadedPokemon.push(newPokemon);
          })
          .catch((err) => console.log(err));
      }

      dispatch({
        type: SET_POKEMONS,
        pokemon: loadedPokemon,
      });
    } catch (err) {
      // send to custom analystic server
      throw err;
    }
  };
};

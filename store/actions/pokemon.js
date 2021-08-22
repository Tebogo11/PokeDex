import axios from "axios";

import AsyncStorage from "@react-native-async-storage/async-storage";

export const SET_POKEMONS = "SET_POKEMONS";

/**
 * This function is a redux action, and when called it will fetch all pokemon found on PokeApi
 * @returns {void}
 */
export const fetchPokemon = () => {
  return async (dispatch) => {
    try {
      const storedPokemon = await AsyncStorage.getItem("dataKey");

      const restoredArray = JSON.parse(storedPokemon);
      if (!restoredArray) {
        //Fetch all pokemoyn and reference to the endpoint that contains further information on pokemon
        const allPokemonUrl = await axios
          .get("http://pokeapi.co/api/v2/pokemon/?limit=155")
          .then((item) => (result = item.data.results));

        /**
         * Where all pokemon data will be stored in an object
         * @type {Array[]}
         */
        const loadedPokemon = [];

        //For each pokemon endpoint fetched in allPokemonUrl
        //Gather all relevent information and store it in an object
        for await (const pokemon of allPokemonUrl) {
          const name = pokemon.name;
          await axios
            .get(pokemon.url)
            .then((item) => item.data)
            .then((pokemonInfo) => {
              //retrive the id of the pokemon
              const id = pokemonInfo.id;
              //retrive the height of the pokemon
              const height = pokemonInfo.height;
              //retrive the weight of the pokemon
              const weight = pokemonInfo.weight;
              //retrive the fourth item from the pokemon sprite object
              const image =
                pokemonInfo.sprites[Object.keys(pokemonInfo.sprites)[4]];
              //retrive the name of the types that pokemon has,
              //by looping through an array and creating a new one containing only the names of the types
              const types = pokemonInfo.types.map((item) => item.type.name);
              //retrive the name of the abilities that pokemon has,
              //by looping through an array and creating a new one containing only the names of the abilities
              const abilities = pokemonInfo.abilities.map(
                (item) => item.ability.name
              );
              //retrive the url for the endpoint containing the species inforamtion on the pokemon
              const pokemonSpeciesUrl = pokemonInfo.species.url;
              //An object containing all the information of the pokemon retrived from the previous endpoint
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
              //Push the newly created object in the pre-created array
              loadedPokemon.push(newPokemon);
            })
            //console log any errors
            .catch((err) => console.log(err));
        }

        const stringifiedArray = JSON.stringify(loadedPokemon);
        await AsyncStorage.setItem("dataKey", stringifiedArray);

        console.log("loadinf data");
        dispatch({
          type: SET_POKEMONS,
          pokemon: loadedPokemon,
        });
      } else {
        console.log("saved Data");
        dispatch({
          type: SET_POKEMONS,
          pokemon: restoredArray,
        });
      }
    } catch (err) {
      // send to custom analystic server
      throw err;
    }
  };
};

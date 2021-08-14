import { SET_POKEMONS } from "../actions/pokemon";

const initalState = {
  pokemon: ["helloWorld"],
};

export default (state = initalState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return {
        pokemon: action.pokemon,
      };
    default:
      // need this for default case
      return state;
  }
};

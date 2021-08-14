import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemon } from "../store/actions/pokemon";

const SearchResult = () => {
  // const getPokemon = async () => {
  //   const allPokemonUrl = await axios
  //     .get("https://pokeapi.co/api/v2/pokemon")
  //     .then((item) => (result = item.data.results));

  //   const pokemonArray = [];
  //   for await (const pokemon of allPokemonUrl) {
  //     const name = pokemon.name;
  //     await axios
  //       .get(pokemon.url)
  //       .then((item) => item.data)
  //       .then((pokemonInfo) => {
  //         const height = pokemonInfo.height;
  //         const weight = pokemonInfo.weight;
  //         const image =
  //           pokemonInfo.sprites[Object.keys(pokemonInfo.sprites)[0]];
  //         const types = pokemonInfo.types.map((item) => item.type.name);
  //         const abilities = pokemonInfo.abilities.map((item) => {
  //           let name = item.ability.name;
  //           return name;
  //         });
  //         const pokemonSpeciesUrl = pokemonInfo.species.url;
  //         const newPokemon = {
  //           name,
  //           image,
  //           types,
  //           height,
  //           weight,
  //           abilities,
  //           pokemonSpeciesUrl,
  //         };
  //         pokemonArray.push(newPokemon);
  //       });
  //   }
  //   return pokemonArray;
  // };

  // const results = async () => {
  //   const data = await getPokemon();
  //   console.log(data);
  // };

  // results();

  const dispatch = useDispatch();

  // const loadPokemon = useCallback(async () => {
  //   try {
  //     await dispatch(fetchPokemon());
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, [dispatch]);

  useEffect(() => {
    dispatch(fetchPokemon());
  }, [dispatch]);

  const pokemon = useSelector((state) => state.Pokemon.pokemon);
  console.log(pokemon);

  console.log("oooooooooooooooooooooooooooooooooooooooooooooooooooo");
  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default SearchResult;

const styles = StyleSheet.create({});

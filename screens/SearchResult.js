import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemon } from "../store/actions/pokemon";
import { FlatList, ActivityIndicator } from "react-native";
import PokemonCard from "../components/PokemonCard";
//icons
import { Icon } from "react-native-elements";
const SearchResult = ({ searchData }) => {
  /**
   * contains useDispatch function
   * @type {function}
   */
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemon());
  }, []);

  /**
   * Contains all the pokemon information fetched from PokeApi
   * @type {Array.<object>}
   */
  const pokemon = useSelector((state) => state.Pokemon.pokemon);

  /**
   * This are all the pokemons filtered to the users specfication
   * @type {Array.<object>} Pokemons
   */
  const pokemonFilter = pokemon.filter((pokemon) => {
    const name = pokemon.name;
    return name.includes(searchData.toLowerCase());
  });

  //If pokemon array is not empty then display in flatlist
  if (pokemon[1]) {
    return (
      <FlatList
        numColumns={2}
        style={styles.screen}
        data={pokemonFilter}
        renderItem={(itemData) => {
          return (
            <PokemonCard
              name={itemData.item.name}
              imageUrl={itemData.item.image}
              types={itemData.item.types}
            />
          );
        }}
      />
    );
  }
  //Else display loading symbol
  else {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }
};

export default SearchResult;

const styles = StyleSheet.create({
  screen: {
    height: "100%",
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

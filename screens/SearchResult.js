import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemon } from "../store/actions/pokemon";
import { FlatList } from "react-native";
import PokemonCard from "../components/PokemonCard";

const SearchResult = () => {
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

  //If pokemon array is not empty then display in flatlist
  if (pokemon[1]) {
    return (
      <FlatList
        numColumns={2}
        style={styles.screen}
        data={pokemon}
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
      <View>
        <Text>Is loading</Text>
      </View>
    );
  }
};

export default SearchResult;

const styles = StyleSheet.create({
  screen: {
    height: "100%",
  },
});

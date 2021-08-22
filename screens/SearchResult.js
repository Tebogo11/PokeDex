import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { FlatList, ActivityIndicator } from "react-native";
import PokemonCard from "../components/PokemonCard";
//icons

const SearchResult = ({
  searchData,
  setScreen,
  setViewingPokemonID,
  setHeader,
}) => {
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
    const type = pokemon.types;

    //trim - incase user leaves space before or after last charactor
    const value =
      name.includes(searchData.toLowerCase().trim()) ||
      type[0].includes(searchData.toLowerCase().trim()) ||
      (type[1] !== undefined &&
        type[1].includes(searchData.toLowerCase().trim()));

    return value;
  });

  const containerStyle = { width: "43%", height: 150 };
  //If filtered pokemon array is not empty then display in flatlist
  if (pokemonFilter[0]) {
    return (
      <FlatList
        numColumns={2}
        style={styles.screen}
        data={pokemonFilter}
        renderItem={(itemData) => {
          return (
            <PokemonCard
              containerStyle={containerStyle}
              name={itemData.item.name}
              imageUrl={itemData.item.image}
              types={itemData.item.types}
              setScreen={setScreen}
              id={itemData.item.id}
              setViewingPokemonID={setViewingPokemonID}
              setHeader={setHeader}
            />
          );
        }}
      />
    );
  }
  //If filtered pokemon array is empty, check to see if pokemon have being retriece
  //if yes, then search results were unable to match
  else if (pokemon[0]) {
    return (
      <View style={styles.loading}>
        <Text style={styles.warning}>Sorry no pokemon with those details</Text>
        <Text style={styles.warning}>were found, Try again</Text>
      </View>
    );
  }
  //Else display loading symbol
  //This shows pokemon are still being fetched from PokeApi
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
  warning: {
    color: "red",
    fontSize: 16,
  },
});

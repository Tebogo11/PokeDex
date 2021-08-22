import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  ActivityIndicator,
} from "react-native";
import { useSelector } from "react-redux";
//Compoenents for different sections
import Abilities from "./Abilities";
import Description from "./Description";
import Evolution from "./Evolution";
import HeaderInfo from "./HeaderInfo";

const InfoPage = ({ pokemonID, setScreen, setViewingPokemonID, setHeader }) => {
  const pokemons = useSelector((state) => state.Pokemon.pokemon);
  const pokemonInfo = pokemons.filter((item) => item.id === pokemonID);
  const pokemon = pokemonInfo[0];

  if (pokemon) {
    return (
      <ScrollView style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: pokemon.image,
          }}
        />
        <HeaderInfo pokemon={pokemon} />
        <Text style={styles.titleStyle}>Abilities</Text>
        <Abilities abilities={pokemon.abilities} />
        <Text style={styles.titleStyle}>Characteristics</Text>
        <Description pokemon={pokemon} />
        <Evolution
          pokemon={pokemon}
          setScreen={setScreen}
          setViewingPokemonID={setViewingPokemonID}
          setHeader={setHeader}
        />
      </ScrollView>
    );
  } else {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }
};

export default InfoPage;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  image: {
    width: "80%",
    height: 200,
    alignSelf: "center",
  },

  dimText: {
    fontSize: 18,
  },
  types: {
    fontSize: 18,
  },
  titleStyle: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 5,
    textAlign: "center",
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

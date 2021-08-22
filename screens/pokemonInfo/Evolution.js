import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import PokemonCard from "../../components/PokemonCard";
import axios from "axios";

import { useSelector } from "react-redux";

const Evolution = ({ pokemon, setScreen, setViewingPokemonID, setHeader }) => {
  const [startEvolve, setStartEvolve] = useState("");
  const [secondStage, setSecondStage] = useState("");
  const [thirdStage, setThirdStage] = useState("");
  const [evolvationChain, setEvolvationChain] = useState([]);
  const [load, setload] = useState(false);
  /**
   * Contains all the pokemon information fetched from PokeApi
   * @type {Array.<object>}
   */
  const pokemonArray = useSelector((state) => state.Pokemon.pokemon);

  const pokemonData = () => {
    pokemonArray.forEach((pokemon) => {
      if (pokemon.name == startEvolve) {
        setEvolvationChain((evolvationChain) => [...evolvationChain, pokemon]);
      } else if (secondStage && pokemon.name == secondStage) {
        setEvolvationChain((evolvationChain) => [...evolvationChain, pokemon]);
      } else if (thirdStage && pokemon.name == thirdStage) {
        setEvolvationChain((evolvationChain) => [...evolvationChain, pokemon]);
      }
    });
  };

  const data = async () => {
    setload(false);
    await axios
      .get(pokemon.pokemonSpeciesUrl)
      .then((item) => item.data)
      .then((item) => {
        return item.evolution_chain;
      })
      .then((evolveChain) => {
        axios.get(evolveChain.url).then((item) => {
          let firstEvolve = item.data.chain.species.name;
          console.log(item.data.chain);
          setStartEvolve(firstEvolve);
          let secondStageEv = item.data.chain.evolves_to;
          if (secondStageEv[0]) {
            setSecondStage(secondStageEv[0].species.name);
            let thirdStageEv = item.data.chain.evolves_to[0].evolves_to;
            if (thirdStageEv[0]) {
              setThirdStage(thirdStageEv[0].species.name);
            }
          }
          setload(true);
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    data();
  }, []);

  useEffect(() => {
    pokemonData();
  }, [load]);

  const containerStyle = { width: "80%", height: 250 };

  return (
    <View>
      <Text style={styles.title}>Evolvation Chain</Text>
      {evolvationChain.map((item, index) => {
        return (
          <View style={styles.container} key={index}>
            <PokemonCard
              name={item.name}
              imageUrl={item.image}
              types={item.types}
              setScreen={setScreen}
              id={item.id}
              setViewingPokemonID={setViewingPokemonID}
              setHeader={setHeader}
              containerStyle={containerStyle}
            />
          </View>
        );
      })}
    </View>
  );
};

export default Evolution;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 5,
    textAlign: "center",
  },
});

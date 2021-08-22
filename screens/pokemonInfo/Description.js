import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";
import { capitalizer } from "../../components/UsefulFunction";

const Description = ({ pokemon }) => {
  const [eggGroup, setEggGroup] = useState([]);
  const [habitats, setHabitats] = useState("");
  const [colors, setColors] = useState("");
  const [isBaby, setIsBaby] = useState(false);
  const [isLegend, setIsLegend] = useState(false);
  const [isMythical, setIsMythical] = useState(false);

  /**
   * This function fetchs data from the pokemon species endpoint and stores it state to then be displayed
   * @return {void}
   */
  const data = async () => {
    await axios
      .get(pokemon.pokemonSpeciesUrl)
      .then((item) => item.data)
      .then((data) => {
        setEggGroup(data.egg_groups);
        setHabitats(data.habitat.name);
        setColors(data.color.name);
        setIsBaby(data.is_baby);
        setIsLegend(data.is_legendary);
        setIsMythical(data.is_mythical);
      })
      .catch((err) => console.log(err));
  };

  //2 3 1 4(3)
  useEffect(() => {
    data();
  }, []);

  if (eggGroup[0]) {
    return (
      <View>
        <Text>
          <Text style={styles.subtitle}>Egg Group: </Text>
          {capitalizer(eggGroup[0].name)},{" "}
          {eggGroup[1] ? capitalizer(eggGroup[1].name) : null}
        </Text>
        <Text>
          <Text style={styles.subtitle}>Habitats:</Text> {capitalizer(habitats)}
        </Text>
        <Text>
          <Text style={styles.subtitle}>Color:</Text> {capitalizer(colors)}
        </Text>
        {isBaby ? <Text style={styles.subtitle}>Is a baby pokemon</Text> : null}
        {isLegend ? (
          <Text style={styles.subtitle}>Is a legendary pokemon</Text>
        ) : null}
        {isMythical ? (
          <Text style={styles.subtitle}>Is a mythical pokemon </Text>
        ) : null}
      </View>
    );
  } else {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }
};

export default Description;

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 16,
  },
});

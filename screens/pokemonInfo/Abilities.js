import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";
import { capitalizer } from "../../components/UsefulFunction";

const Abilities = ({ abilities }) => {
  const [abilitiesInfo, setabilitiesInfo] = useState([]);

  /**
   * This function is retrive informatio about abilites.
   * It loops through the abilities array provide to it and fetchs information by
   * tagging the name of the abilitie in the abilitiy endpoint then storing information
   * in an object which is then push to an array
   * @return {void}
   */
  const data = () => {
    abilities.forEach((item) => {
      axios
        .get(`https://pokeapi.co/api/v2/ability/${item}/`)
        .then((item) => item.data)
        .then((data) => {
          let name = data.name;
          let effectInfoArray = data.effect_entries.filter((item) => {
            return item.language.name === "en";
          });

          let effect = effectInfoArray[0].effect;
          let shortEffect = effectInfoArray[0].short_effect;
          let info = { name, effect, shortEffect };
          if (abilitiesInfo.length == 0) {
            setabilitiesInfo((abilitiesInfo) => [...abilitiesInfo, info]);
          }
        });
    });
  };

  useEffect(() => {
    data();
  }, []);

  return (
    <View>
      {abilitiesInfo.map((item, index) => {
        return (
          <View style={styles.container} key={index}>
            <Text style={styles.title}>{capitalizer(item.name)}</Text>
            <Text>
              <Text style={[styles.subtitle, { fontSize: 13 }]}>Effect: </Text>
              {item.effect.trim()}
            </Text>

            <Text>
              <Text style={[styles.subtitle, { fontSize: 12 }]}>
                Short Effect:
              </Text>
              {item.shortEffect}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default Abilities;

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 17,

    marginBottom: 3,
    marginTop: 5,
  },
  subtitle: {
    fontWeight: "bold",
  },
});

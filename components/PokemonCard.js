import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View, Image } from "react-native";
import { cardBgPicker, capitalizer } from "./UsefulFunction.js";
import { useHistory } from "react-router-native";
//Card component for each pokemon on the SearchResult page
const PokemonCard = ({
  name,
  imageUrl,
  types,
  setScreen,
  id,
  setViewingPokemonID,
  setHeader,
  containerStyle,
}) => {
  /**
   * Holds a string, with the color that matchs
   * the type of pokemon
   * @type {function}
   */
  const bgColor = cardBgPicker(types);

  const history = useHistory();

  /**
   * This changes the current screen of the page
   * @param {string} path the screen the user is trying to reach
   * @return {void}
   */
  const routeChange = () => {
    let path = `/info`;
    history.push(path);
    setScreen("info");
    setHeader(capitalizer(name));
    setViewingPokemonID(id);
  };

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: bgColor,
          width: containerStyle.width,
          height: containerStyle.height,
        },
      ]}
      onPress={routeChange}
    >
      <Text style={styles.name}>{name.toUpperCase()}</Text>
      <Image
        style={styles.image}
        source={{
          uri: imageUrl,
        }}
      />
      <View style={styles.types}>
        <Text style={styles.type}>{capitalizer(types[0])} </Text>

        {types[1] ? (
          <Text style={styles.type}>{capitalizer(types[1])} </Text>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

export default PokemonCard;

const styles = StyleSheet.create({
  container: {
    width: "43%",
    height: 150,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  bgImage: {
    flex: 1,
    justifyContent: "center",
    padding: 8,
  },
  name: {
    fontSize: 17,
    fontWeight: "bold",
    color: "whitesmoke",
    width: "100%",
    borderRadius: 50,
    textAlign: "center",
  },
  image: {
    marginTop: -8,
    height: "80%",
    width: "100%",
    alignSelf: "center",
    marginBottom: 0,
  },
  types: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: -20,
    width: "100%",
  },
  type: {
    padding: 3,
    fontSize: 15,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    margin: 5,
    color: "white",
    fontWeight: "bold",
  },
});

import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Button } from "react-native-elements";

import { Link, NativeRouter, useHistory } from "react-router-native";
//This is the first screen shown to the user
//This is primarly meant for the user to type in the
//details that my  result in finding their Pokemon
const SearchPage = ({ searching, setScreen }) => {
  const [searchValue, setSearchValue] = useState("");

  const history = useHistory();

  /**
   * This changes the current screen of the page
   * @param {string} path the screen the user is trying to reach
   * @return {void}
   */
  const routeChange = () => {
    let path = `/result`;
    history.push(path);
    searching(searchValue);
    setScreen("result");
  };
  return (
    <View style={{ color: "red" }}>
      <Text style={styles.heading}>Find Your Pokémon</Text>
      <TextInput
        style={styles.searchBox}
        placeholder="Who are you looking for..."
        onChangeText={(value) => setSearchValue(value)}
      />
      <Text style={styles.description}>
        Search the Pokédex for your favorite Pokémon/s by name, types, and
        habitats.
      </Text>

      <Button
        containerStyle={styles.button}
        title="Search"
        type="solid"
        buttonStyle={styles.buttonColor}
        onPress={routeChange}
      />
    </View>
  );
};

export default SearchPage;

const styles = StyleSheet.create({
  //The styling for headings on this screen
  heading: {
    fontSize: 17,
    marginLeft: 20,
    marginTop: 5,
  },
  //SearchBox style
  searchBox: {
    borderWidth: 2,
    borderColor: "black",
    marginHorizontal: 20,
    marginVertical: 5,
    borderRadius: 10,
    height: 40,
    fontSize: 20,
    paddingHorizontal: 10,
  },
  //Search box description Style
  description: {
    fontSize: 11,
    marginHorizontal: 20,
  },
  button: {
    width: 100,
    alignSelf: "flex-end",
    marginRight: 20,
    marginTop: 5,
  },
  buttonColor: {
    backgroundColor: "red",
  },
});

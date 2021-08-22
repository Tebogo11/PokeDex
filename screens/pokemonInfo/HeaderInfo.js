import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { capitalizer } from "../../components/UsefulFunction";

const HeaderInfo = ({ pokemon }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={(styles.dimText, { fontWeight: "900" })}>Height</Text>
        <Text style={styles.dimText}>{pokemon.height * 10} cm</Text>
      </View>
      <View>
        <Text style={styles.types}>{capitalizer(pokemon.types[0])}</Text>
        {pokemon.types[1] ? (
          <Text style={styles.types}>{capitalizer(pokemon.types[1])}</Text>
        ) : null}
      </View>
      <View>
        <Text style={(styles.dimText, { fontWeight: "900" })}>Weight</Text>
        <Text style={styles.dimText}>{pokemon.weight / 10} kg</Text>
      </View>
    </View>
  );
};

export default HeaderInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dimText: {
    fontSize: 18,
  },
  types: {
    fontSize: 18,
    textAlign: "center",
  },
});

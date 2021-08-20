import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
//Half the Header Image - file path
const headerImage = require("../constants/AppLayoutHeader.png");

//This component is the header for application, with navigation to travel
//Back and fourth
const Header = () => {
  
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.navButtonContainer}>
          <View style={styles.navButtonOutline}>
            <View style={styles.navButton}></View>
          </View>
        </View>
        <Image source={headerImage} style={styles.image} />
      </View>
      <Text style={styles.title}>PokéDex</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    alignSelf: "flex-end",
    width: 250,
  },
  navButtonContainer: {
    width: 100,
    height: 80,
    backgroundColor: "red",
  },
  navButton: {
    width: 60,
    height: 60,
    backgroundColor: "#69FFFF",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "black",
  },
  navButtonOutline: {
    width: 70,
    height: 70,
    backgroundColor: "whitesmoke",
    borderRadius: 50,
    marginLeft: 20,
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    alignSelf: "flex-end",
    marginRight: 50,
    fontSize: 22,
    marginTop: -30,
    marginBottom: 10,
  },
});

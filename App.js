import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
//Application Screens
import SearchPage from "./screens/SearchPage";
//Components
import Header from "./components/Header";
import Constants from "expo-constants";
export default function App() {
  return (
    <View>
      <View style={styles.StatusBar}>
        <StatusBar translucent barStyle="light-content" />
      </View>
      <SafeAreaView>
        <Header />
        <SearchPage />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  StatusBar: {
    height: Constants.statusBarHeight,
    backgroundColor: "red",
  },
});

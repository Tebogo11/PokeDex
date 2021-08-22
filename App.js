import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
//Application Screens
import Router from "./router";
//Components
import Constants from "expo-constants";
//Redux State
import pokemonReducer from "./store/reducers/pokemon";

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const rootReducer = combineReducers({
    Pokemon: pokemonReducer,
  });

  const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
  AsyncStorage.clear();
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <View style={styles.StatusBar}>
          <StatusBar
            barStyle="light-content"
            style="light"
            translucent={true}
          />
        </View>
        <SafeAreaView style={{ flex: 1 }}>
          <Router />
        </SafeAreaView>
      </View>
    </Provider>
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
